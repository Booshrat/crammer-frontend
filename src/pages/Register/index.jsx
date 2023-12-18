import React, {useEffect} from 'react';
import { BackButton, RegisterForm } from '../../components';

const Register = () =>  {
    
    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
    <section>
    <h1>Register</h1>

    <RegisterForm />
    <BackButton />
    </section>
    )

}

export default Register;
