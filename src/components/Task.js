import {FaTimes} from "react-icons/fa"

const Task = ({task, onDelete, onToggle}) => {
    return (
        //if task.reminder is true, then set the class of the div to task reminder, else set the class of the div to task
        <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} 
                {/* onDelete will work its way up (from Task component to Tasks component to App component) to call deleteTask function in App component */}
                {/* () => onDelete(task.id) means call a function then call onDelete and pass in the task id --> syntax for events with parameter*/}
                <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)}></FaTimes>
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
