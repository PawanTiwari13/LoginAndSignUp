import './SubTask.css'
import React,{useState} from "react";
function SubTask(){
    const [width, setWidth] = useState(200); // Initial width
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseDown = (e) => {
        setIsResizing(true);
        const initialX = e.clientX;

        const handleMouseMove = (e) => {
            const newWidth = width + (e.clientX - initialX);
            setWidth(newWidth);
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    return(
        <div className={`resizable-div ${isResizing ? 'resizing' : ''}`}
             style={{ width: `${width}px` }}>
            <div className="resize-handle" onMouseDown={handleMouseDown}>
                <text> Sub Task View</text>

            </div>

        </div>
    )
}
export default SubTask
