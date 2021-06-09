import {FaTimes} from "react-icons/fa"

const Task = ({task, onDelete}) => {
    return (
        <div className="task">
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
