import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    //set button color and text based on input property
    return (
        <button 
                //this onClick will call the prop onClick (the orange one) which will call the onClick function in Header.js
                onClick={onClick} 
                style={{backgroundColor: color}} 
                className="btn">{text}
        </button>
    )
}

Button.defaultProps = {
    color: "steelblue"
}

Button.propTypes ={
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
