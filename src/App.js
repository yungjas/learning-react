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
          id: 1,
          text: "Food Shopping",
          day: "Feb 7th at 2.30pm",
          reminder: false
      },
  ])
  
  return (
    //must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
