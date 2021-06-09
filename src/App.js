//root App component
import {useState} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
    //we want the data to be part of the component's state
    //state is where you store property values that belongs to the component
    //when the state changes, the component will re-render
    //setTasks is a function used to update the state i.e. add more tasks
    //state is immutable, you can't change it directly --> can't use tasks.push to update the state
    //placing tasks here so that it becomes a global state i.e. every component can access it 
    const [tasks, setTasks] = useState ([
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
          id: 3,
          text: "Food Shopping",
          day: "Feb 7th at 2.30pm",
          reminder: false
      },
  ])
  
  //delete task
  function deleteTask(id){
    //for each task, i want to filter where the current task is not equal to the id of the task we are deleting
    //basically this shows tasks that are not yet deleted
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    //must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element
    <div className="container">
      <Header/>
      {/* pass in tasks data (using props) into tasks component first (Tasks.js) */}
      {/* Tasks component will then use the map function to go thru each task and display each task using the Task component (Task.js) */}
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
