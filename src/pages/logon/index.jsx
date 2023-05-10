import React from 'react'
import { useState } from 'react'
import Button from '../../components/Button';
import LoginFields from '../../components/LoginFields';
import './styles.css'
import { useNavigate } from "react-router-dom";
import Axios from 'axios'
import { url } from '../../global';

const Logon = (props) => {

    const navigate = useNavigate();
    localStorage.clear()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nome, setNome] = useState('')

const aoSalvar = async () => {
    navigate({
        pathname: "/home",
    })
}

    return (
        <>
            <div className='logon'>
            <section className='formulario'>
                <form onSubmit={aoSalvar}>
                        <h1>TuInveste</h1>
                <div>
                <LoginFields 
                    obrigatorio={true}  
                    placeholder="Nome completo"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    tipo="text"
                />
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
                <div className='buttons'>
                <Button>
                    Sign In
                </Button>
                </div>
            </form>
        </section>
            </div>
        </>
        )
}

export default Logon;