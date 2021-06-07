import PropTypes from 'prop-types'

//props is used to pass in stuff to our components
//pass in title object to Header component ----> const Header = ({title})
const Header = ({title}) => {
    return (
        <header>
            <h1>{title}</h1>
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

export default Header
