//prevents webpage from reloading when rerouting to another link - faster response
import {Link} from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
