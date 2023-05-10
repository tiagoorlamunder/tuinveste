import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button';
import LoginFields from '../../components/LoginFields';
import './styles.css'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { url } from '../../global';

const Login = (props) => {

    const navigate = useNavigate();
    localStorage.clear()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

const aoSalvar = async (evento) => {
    evento.preventDefault()
    try {
    const res = await Axios.post(`${url}login`, {
        email: email,
        password: password
    })
    localStorage.setItem("Authorization", res.data.token)
    localStorage.setItem("Nome", email)
    navigate({
        pathname: "/home",
    })
    } catch(e) {
        alert(e.response.data.error)
    }
}

    return (
        <>
            <div className='login'>
            <section className='formulario'>
                <form onSubmit={aoSalvar}>
                        <h1>TuInveste</h1>
                <div>
                <LoginFields 
                    obrigatorio={true}  
                    placeholder="Email"
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}
                    tipo="email"
                />
                <LoginFields 
                    obrigatorio={true} 
                    placeholder="Password"
                    valor={password}
                    aoAlterado={valor => setPassword(valor)}
                    tipo="password"
                />
                </div>
                    <h5>I forgot my password</h5>
                <div className='buttons'>
                <Button>
                    Sign In
                </Button>
                </div>
            </form>
            <Button click={() => navigate({
                pathname: "/logon",
                    })}>
                It's your first time here ?
            </Button>
        </section>
            </div>
        </>
        )
}

export default Login;