import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        //prevent from submitting to a page
        e.preventDefault()

        if(!text){
            alert("Please add task")
            return
        }

        //add new task
        onAdd({text, day, reminder})

        //clear the form
        setText("")
        setDay("")
        setReminder(false)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                {/* onChange triggers a function, e is an event object that is passed into the function */}
                {/* e.target.value represents the value typed in the input text */}
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                {/* e.currentTarget.checked checks if the checkbox is checked, if checked returns true, else returns false */}
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
