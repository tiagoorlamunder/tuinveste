import './loginFields.css'

const LoginFields = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="loginFields">
            <input onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder} type={props.tipo}/>
        </div>
    )
}

export default LoginFields