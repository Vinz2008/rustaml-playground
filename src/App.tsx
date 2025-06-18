import './App.css'
import CodeEditor from "./CodeEditor.tsx";

function App() {
    let content: string = "";
    function showValue(){
        alert(content);
    }


    function onChange(value: string, event?: any){
        content = value;
    }

    return (
        <>
        
            <h1>Vite + React</h1>
            <div id='container'>
                <CodeEditor onChange={onChange}></CodeEditor>
                <button id='run_button' onClick={showValue}>Run</button>
            </div>
            
        </>
    )
}

export default App
