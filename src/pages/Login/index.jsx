import React, { useEffect } from 'react';
import { BackButton, LoginForm } from '../../components';

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])
    
    return (
    <section>
    <h1>Login</h1>

    <LoginForm />
    <BackButton />
    </section>
    )
}

export default Login;
