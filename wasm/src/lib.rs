#![feature(internal_output_capture)]

use std::{path::Path, sync::Arc};

use wasm_bindgen::prelude::*;
#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_name = wasmError)]
    fn wasm_error(msg: &str);
}



#[wasm_bindgen]
pub fn eval(content: &str) -> String {
    std::io::set_output_capture(Some(Default::default()));
    

    std::panic::set_hook(Box::new(|info| {
        let msg = format!("Panic occurred: {info}");
        wasm_error(&msg);
    }));


    rustaml::interpret_code(content, Path::new("<wasm>")).unwrap();

    let captured = std::io::set_output_capture(None).unwrap();
    let captured = Arc::try_unwrap(captured).unwrap();
    let captured = captured.into_inner().unwrap();
    let captured = String::from_utf8(captured).unwrap();
    captured
}