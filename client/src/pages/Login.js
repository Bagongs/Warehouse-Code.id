import React, { useState } from 'react'
import { loginUser } from '../axios/userAxios'
import { Link, useNavigate } from 'react-router-dom'

const Login = (props) => {
    const { loginCbHandler } = props;
    const [form, setForm] = useState({
        email: '',
        password: '',
    })


    const loginHandler = () => {
        loginCbHandler(true);
    };
    const navigation = useNavigate();
    const submitHandler = () => {
        loginUser(form, (status) => {
            if (status) {
                loginHandler();
                navigation("/");
            }
        });
    };
    return (
        <>
            <div className='login-page'>
                <div className='login-component'>
                    <div className='my-3 w-100 text-center'>
                        <h3> Login</h3>
                    </div>
                    <div className='w-100'>
                        <div class="form-floating mb-1">
                            <input
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                type="text" class="form-control" placeholder="Input Username" />
                            <label htmlFor="inputUsername">Username</label>
                        </div>
                        <div class="form-floating mb-1">
                            <input
                                onChange={(e) => setForm({ ...form, password: e.target.value })}
                                type="password" class="form-control" placeholder="Password" />
                            <label htmlFor='inputPassword'>Password</label>
                        </div>
                        <div className='text-center mt-5 mb-3'>
                            <button onClick={() => submitHandler()} className='btn btn-success' type='submit'>LOGIN</button>
                        </div>

                        <p className="text-center">
                            Don't have Account?
                            <Link
                                className="link-primary text-decoration-none ms-2"
                                to="/users/register"
                            >Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login