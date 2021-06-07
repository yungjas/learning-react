const tasks = [
    {
        id: 1,
        text: "Doctors Appointment",
        day: "Feb 5th at 2.30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th at 2.30pm",
        reminder: true
    },
    {
        id: 1,
        text: "Food Shopping",
        day: "Feb 7th at 2.30pm",
        reminder: false
    },
]

const Tasks = () => {
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
