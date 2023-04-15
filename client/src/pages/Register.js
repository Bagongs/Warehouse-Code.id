import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { registerUser } from '../axios/userAxios'


const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        status: "",
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        registerUser(form, (status) => {
          if (status) {
            navigation("/users/login");
          }
        });
      };

    const linkStyle = {
        textDecoration: "none",
        color: "green",
    };

    return (
        <div className="text-center login-body bg-success bg-gradient">
            <form className="form-signin bg-light p-4 shadow-lg rounded">
                <h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
                <div class="form-label-group text-start">
                    <label htmlFor="inputUsername">Username</label>
                    <input
                        type="username"
                        id="inputUsername"
                        className="form-control"
                        placeholder="Username"
                        required
                        autoFocus
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />

                </div>

                <div class="form-label-group text-start">
                    <label htmlFor="inputEmail">Email address</label>
                    <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
                        required
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </div>

                <div class="form-label-group text-start">
                    <label htmlFor="inputPassword">Password</label>
                    <input
                        type="password"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Password"
                        required
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                </div>
                <div class="form-label-group text-start">
                    <label htmlFor="inputStatus">Status</label>
                    <input
                        type="status"
                        id="inputStatus"
                        className="form-control"
                        placeholder="Status"
                        required
                        onChange={(e) => setForm({ ...form, status: e.target.value })}
                    />
                </div>

                <p className="message">
                    Already have an account?{" "}
                    <Link to="/" style={linkStyle}>
                        log in
                    </Link>
                </p>
                <button
                    className="btn btn-lg btn-primary btn-block bg-success"
                    type="submit"
                    onClick={() => submitHandler()}
                > Sign up</button>
            </form>
        </div>
    );
};

export default Register;