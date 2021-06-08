const Tasks = ({tasks}) => {
    return (
        <div>
            {/* instead of using for loop to display the text of each task, we can use map */}
            {tasks.map((task) => (
                // each child in a list should have a unique key prop, hence we are using id which is unique
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
