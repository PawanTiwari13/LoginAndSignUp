import './App.css';
import Task from "./Components/Task";
import Login from'./Components/Login'
import SubTask from "./Components/SubTask";
import React,{useState} from "react";
function App() {
    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);

    const moveToComponent2 = () => {
        setShowComponent1(false);
        setShowComponent2(true);
    };
    return (

        <div>
            <Login/>
            {/* {showComponent1 && <Task moveToComponent2={moveToComponent2} />}
            {showComponent2 && <SubTask />} */}
        </div> );
}

export default App;
