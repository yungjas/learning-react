//root App component
import {useState} from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
  
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
  
  //Add task
  function addTask(task){
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    //copies current tasks that are already there (...tasks) and the newly added task
    setTasks([...tasks, newTask])
  }

  //delete task
  function deleteTask(id){
    //for each task, i want to filter where the current task is not equal to the id of the task we are deleting
    //basically this shows tasks that are not yet deleted
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  function toggleReminder(id){
    setTasks(
      tasks.map((task) =>
        //if the id of the current iteration equals to the id that is passed in, copy all info of the task except change the reminder of the task to the opposite (i.e. if its currently true then it will be set to false and vice versa)
        //else (from : onwards) there will be no change to the task 
        //... is a spread operator, used in cases where we want to create a new object and its information is copied from another object, except that we are making a few changes to the information of the new object
        task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    //must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {/* if showAddTask is true, show the AddTask component */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {/* pass in tasks data (using props) into tasks component first (Tasks.js) */}
      {/* Tasks component will then use the map function to go thru each task and display each task using the Task component (Task.js) */}
      {/* if there are tasks, show the tasks, if no tasks then show the message no tasks to show */}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : ("No tasks to show")}
    </div>
  );
}

export default App;
