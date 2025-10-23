import React from 'react'
import { NavLink } from 'react-router';

const Login = () => {
    const submithandle= (e) =>  {
        e.preventDefault();
        console.log(e.target.email.value);
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <form onSubmit={submithandle}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover"> <NavLink>Forgot password?</NavLink> </a></div>
                                <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </form>
                        <h1>Dont Have an Account ? <span className='link link-hover'><NavLink to={"/register"}>Register</NavLink></span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login