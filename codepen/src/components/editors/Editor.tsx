import { useState } from 'react';
import './Editors.css';
interface IEditorProps{
    title:string;
    value:string;
    change:Function
}
function Editor(props:IEditorProps):JSX.Element{
    const [open,setOpen]=useState<boolean>(true);
    return (
        <div className={`editor-container ${open?'':"collapsed"}`}>
            <div className='editor-title'>
                {props.title}
                <button onClick={()=>{setOpen(!open)}}>O/C</button>
            </div>
            <div className='editor-area'>
                <textarea name="editor" id="editor" onChange={(e)=>props.change(e.target.value)}  value={props.value}></textarea>
            </div>
        </div>
    )
}

export default Editor