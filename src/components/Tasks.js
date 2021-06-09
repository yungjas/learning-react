import Task from "./Task"

const Tasks = ({tasks, onDelete}) => {
    return (
        <div>
            {/* instead of using for loop to display the text of each task, we can use map */}
            {tasks.map((task) => (
                // each child in a list should have a unique key prop, hence we are using id which is unique
                <Task key={task.id} task={task} onDelete={onDelete}></Task>
            ))}
        </div>
    )
}

export default Tasks
