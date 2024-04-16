import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

function Login({ toggleLogin }) {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const [emailCheck, setEmailCheck] = useState(null);
    const [passwordCheck, setPasswordCheck] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = () => {
        setEmailCheck(null);
    };

    const handlePasswordChange = () => {
        setPasswordCheck(null)
    };


    // const loginUser = (formData) => {
    //     axios.post('http://localhost:3001/v1/users/login', formData).then(response => {

    //         if (response?.data?.data) {
    //             localStorage.setItem('userinfo', JSON.stringify(response.data.data));
    //             toggleLogin(true)
    //             navigate('/dashboard');
    //         }

    //     }).catch(error => {

    //         if (error.response.data?.errorDescription) {
    //             if (error.response.data.errorDescription === 'Email is not registered') {
    //                 setEmailCheck(error.response.data.errorDescription)
    //             }
    //             else {
    //                 setPasswordCheck('Incorrect password')
    //             }
    //         }

    //     })
    // }

    const loginUser = (formData) => {

        const fakeUser = {
            email: 'admin',
            password: 'admin',
        };

        if (formData.email === fakeUser.email && formData.password === fakeUser.password) {

            localStorage.setItem('userinfo', JSON.stringify(fakeUser));

            toggleLogin(true);

            navigate('/dashboard');
        } else {
            
            setPasswordCheck('Incorrect email or password');
        }
    }


    return (
        <div className="login-container">
            <img src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="" className="background-image" />

            <div className="login-form">
                <h1 className='fw-bold'><span className='letter-color'>E</span>
                    lder & <span className='letter-color'>C</span>ommunity<br /><span className='letter-color'>Caresuite</span>
                </h1>

                <form action="/login" method="post" className='mt-4' onSubmit={handleSubmit(loginUser)}>
                    <div className="">
                        <input type="text" name="userId" placeholder="User ID" className='mb-3' {...register('email', { required: true })} onChange={handleInputChange} />
                        {emailCheck && <p className="text-danger mb-0 pb-0">{emailCheck}</p>}
                        {errors.email?.type === 'required' && <p className="text-danger mb-0 pb-0">Email is mandatory</p>}


                    </div>
                    <div className="">
                        <input type="password" name="password" placeholder="Password" className='mb-3' {...register('password', { required: true })} onChange={handlePasswordChange} />
                        {errors.password?.type === 'required' && <p className="text-danger mb-0 pb-0">Password is mandatory</p>}
                        {<p className="text-danger mb-0 pb-0">{errors.password?.message}</p>}
                        {passwordCheck && <p className="text-danger mb-0 pb-0">{passwordCheck}</p>}
                    </div>
                    <p>By logging in, you understand and agree to the

                        <a href="/terms-and-conditions" className='text-dark fw-semibold'> Terms and Conditions</a> of use.
                    </p>

                    <button type='submit' className='btn custom-button fw-bold text-light' >Log In</button>
                </form>

                <p className='text-center'>SSO Version 2.20 - A</p>
            </div>
        </div>
    )
}
export default Login;