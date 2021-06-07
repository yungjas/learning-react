import PropTypes from 'prop-types'

//props is used to pass in stuff to our components
//pass in title object to Header component ----> const Header = ({title})
const Header = ({title}) => {
    return (
        <header className="header">
            {/* dynamic styling */}
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracer",
}

//check the type of the prop, e.g. the title prop should be string and is required
//helps catch type related errors
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS - for dynamic styling
// const headingStyle = {
//     color: 'red', 
//     backgroundColor: 'black',
// }

export default Header
