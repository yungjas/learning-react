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

export default Header
