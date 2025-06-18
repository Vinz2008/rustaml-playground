import AceEditor from "react-ace";


import ace from 'ace-builds';
import modeOcamlUrl from 'ace-builds/src-noconflict/mode-ocaml?url';
ace.config.setModuleUrl('ace/mode/ocaml', modeOcamlUrl);
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/theme-github_dark";


type Props = {
    onChange : (value: string, event?: any) => void,
}

function CodeEditor({onChange} : Props){
    return <AceEditor
    height="700px"
    width="900px"
    mode="ocaml"
    theme="github_dark"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
}

export default CodeEditor;