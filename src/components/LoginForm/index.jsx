import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFunction } from "../../actions";

function LoginForm() {

    const goTo = useNavigate();

    const [errorMessage, setErrorMessage] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('')
        await loginFunction(e);
        if (localStorage.length) { goTo('/flashcard') }
        else { setErrorMessage('Incorrect Username or Password!') }
    }

    const updateUsername = e => {
        const input = e.target.value;
        setUsername(input)
    }

    const updatePassword = e => {
        const input = e.target.value;
        setPassword(input)
    }

    return (
        <form aria-label='form' onSubmit={handleSubmit} id="register-form">
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='Username'>Username</label>
            <input className="input" aria-label="Username" name="username" type='text' onChange={updateUsername} placeholder="username" role="username" />
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' className="input" name="password" type='password' onChange={updatePassword} placeholder="password" role="password" />
            <input role='submit' className='signup-btn' type='submit' value='LOGIN' />
            <p className='clickable' onClick={() => goTo('/register')}>Don't have an account yet? Register here!</p>
        </form>
    );
};

export default LoginForm;
