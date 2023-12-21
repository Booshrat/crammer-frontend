import React, {useEffect} from 'react';
import { RegisterForm } from '../../components';

const Register = () =>  {
    
    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
    <section id="register-page">
    <h1>Register</h1>

    

    <RegisterForm />
    
    </section>
    )

}

export default Register;
