import React from 'react'
import { NavLink } from 'react-router';

const Register = () => {
    const submitregister= (e) =>{
        e.preventDefault();
        console.log("submitted")
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <div className="card-body">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Register Now</h1>
                        </div>
                        <form onSubmit={submitregister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input" placeholder="Name" />
                                <label className="label">Photo Url</label>
                                <input name='photourl' type="text" className="input" placeholder="Photo Url" />
            
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name='password' type="password" className="input" placeholder="Password" />
                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                               
                            </fieldset>
                        </form>
                        <h1>Already Have an Account ? <span className='link link-hover'><NavLink to={"/login"}>Login</NavLink></span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register