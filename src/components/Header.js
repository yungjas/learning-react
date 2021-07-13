import PropTypes from 'prop-types'
import Button from './Button'

//props is used to pass in stuff to our components
//pass in title object to Header component ----> const Header = ({title})
const Header = ({title, onAdd, showAdd}) => {
    // function onClick(){
    //     console.log("Click")
    // }
    
    return (
        <header className="header">
            {/* dynamic styling */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            {/* using props to pass in input to this button component */}
            {/* each button component can have different click events, hence we define a click event specifically for this button component using props */}
            {/* if showAdd is true (meaning the Add Task component is showing), the button will be red and its text will be Close */}
            {/* else if showAdd is false (meaning the Add Task component is not showing), the button will be green and its text will be Add */}
            <Button color={showAdd ? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracer"
}

//check the type of the prop, e.g. the title prop should be string and is required
//helps catch type related errors
Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS - for dynamic styling
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }

export default Header
