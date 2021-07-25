//root App component
//useEffect - By using this Hook, you tell React that your component needs to do something after render
import {useState, useEffect} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import Footer from "./components/Footer"
import About from "./components/About"

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
  
    //we want the data to be part of the component's state
    //state is where you store property values that belongs to the component
    //when the state changes, the component will re-render
    //setTasks is a function used to update the state i.e. add more tasks
    //state is immutable, you can't change it directly --> can't use tasks.push to update the state
    //placing tasks here so that it becomes a global state i.e. every component can access it 
    const [tasks, setTasks] = useState([])

    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      
      getTasks()
    //an empty dependency array - dependency array is used to activate the useEffect when values inside the array (if any) changes
    }, [])

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()

    return data
  }

  //Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
  
  //Add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(task)
    })
    
    const data = await res.json()

    //copy new task (data) into existing tasks
    setTasks([...tasks, data])

    //const id = Math.floor(Math.random() * 10000) + 1
    //const newTask = {id, ...task}
    //copies current tasks that are already there (...tasks) and the newly added task
    //setTasks([...tasks, newTask])
  }

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })
    
    //for each task, i want to filter where the current task is not equal to the id of the task we are deleting
    //basically this shows tasks that are not yet deleted in the UI
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = async (id) => { 
    const taskToToggle = await fetchTask(id)
    //everything except the reminder info is not changed, hence use the spread operator
    const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json()
    
    setTasks(
      tasks.map((task) =>
        //if the id of the current iteration equals to the id that is passed in, copy all info of the updated task
        //else (from : onwards) there will be no change to the task 
        //... is a spread operator, used in cases where we want to create a new object and its information is copied from another object, except that we are making a few changes to the information of the new object
        task.id === id ? {...task, reminder: data.reminder} : task))
  }

  return (
    <Router>
      {/* must only return one element, therefore if multiple elements need to be rendered, need to put it under one parent element */}
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        {/* exact - checks url path and matches to "/" exactly to take us back to home page*/}
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {/* if showAddTask is true, show the AddTask component */}
              {showAddTask && <AddTask onAdd={addTask} />}
              {/* pass in tasks data (using props) into tasks component first (Tasks.js) */}
              {/* Tasks component will then use the map function to go thru each task and display each task using the Task component (Task.js) */}
              {/* if there are tasks, show the tasks, if no tasks then show the message no tasks to show */}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No tasks to show"
              )}
            </>
          )}
        ></Route>
        <Route path="/about" component={About}></Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
