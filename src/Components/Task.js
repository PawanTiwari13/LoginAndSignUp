import './Task.css';
import {useState} from "react";
function Task({ moveToComponent2 }){
    const [task, setTask]=useState('');
    function onClickSubTask(){

    }
    return(
        <div>
            <h1>Component 1</h1>
            <button onClick={moveToComponent2}>Move to Component 2</button>
        </div>
    )
}
export default Task;
