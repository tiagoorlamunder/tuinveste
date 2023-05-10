import './button.css'

const Button = (props) => {
    return (<button className='button' onClick={props.click}>
        {props.children}
    </button>)
}

export default Button