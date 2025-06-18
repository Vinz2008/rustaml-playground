import './App.css'
import CodeEditor from "./CodeEditor.tsx";
import * as wasmMode from '../wasm/pkg/wasm';
import { Fragment, useEffect, useState } from 'react';

declare global {
  interface Window {
    wasmLog: (msg: string) => void;
    wasmError: (msg: string) => void;
  }
}

function App() {
    const [content, setContent] = useState("");
    const [output, setOutput] = useState("");

    useEffect(() => {
        window.wasmError = (msg: string) => {
            setOutput((prev) => prev +`[error] ${msg}`);
        };
    }, []);



    function runCode(){
        setOutput("");
        const out = wasmMode._eval(content);
        setOutput(out);;
    }


    function onChange(value: string, event?: any){
        setContent(value);
    }

    return (
        <>
        
            <h1>Rustaml playground</h1>
            <div id='container'>
                <CodeEditor onChange={onChange}></CodeEditor>
                <div id='output' className='border-black border-2 rounded-2xl'>
                    Output : {output.split('\n').map((subStr) => <Fragment key={0}> {subStr} <br /> </Fragment> )}
                </div>
                <button id='run_button' onClick={runCode}>Run</button>
            </div>
            
        </>
    )
}

export default App
