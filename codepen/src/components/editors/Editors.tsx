import { useEffect, useState } from 'react'
import Editor from './Editor';
import './Editors.css'
import Output from '../output/Output';

function Editors():JSX.Element {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [run,setRun]=useState(false);
    useEffect(()=>{
        if(run){
            setRun(!run);
        }
    },[html,css,js])
    function handleHtmlChange(newValue: string):void {
        setHtml(newValue);
    }
    function handleCssChange(newValue: string):void {
        setCss(newValue);
    }
    function handleJsChange(newValue: string):void {
        setJs(newValue);
    }
    const srcDoc:string=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `
    return (
        <>
            <div className='editors-container'>
                <Editor title="HTML" value={html} change={handleHtmlChange}></Editor>
                <Editor title="CSS" value={css} change={handleCssChange}></Editor>
                <Editor title="JS" value={js} change={handleJsChange}></Editor>
            </div>
            <div>
            <button onClick={()=>{setRun(!run)}}>Run</button>
            {run && <Output src={srcDoc}></Output>}
            </div>
            
        </>
    )
}

export default Editors