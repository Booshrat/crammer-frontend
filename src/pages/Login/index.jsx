import React, { useEffect } from 'react';
import { BackButton, LoginForm } from '../../components';

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])
    
    return (
    <section id="register-page">
    <h1>Login</h1>

    {/* <BackButton /> */}

    <LoginForm />
    
    </section>
    )
}

export default Login;
