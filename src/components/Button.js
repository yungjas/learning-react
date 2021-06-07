import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    //set button color and text based on input property
    return <button style={{backgroundColor: color}} className="btn">{text}</button>
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes ={
    color: PropTypes.string,
    text: PropTypes.string
}

export default Button
