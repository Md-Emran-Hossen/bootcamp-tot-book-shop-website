// import React from 'react';

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Result } from "postcss";
import toast from "react-hot-toast";

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();

         //    const name = event.target.name.value;

        const form = new FormData(event.currentTarget);
       
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log(name, photo, email, password);

        createUser(email, password)
        .then((result)=>{
            console.log(result.user);
            handleUserProfile(name, photo);
            toast.success("User Registration Successfull", {
                position: "top-right",
            });
            navigate("/login");
        })
        .catch((error)=>{
            console.error(error);
        });

    };

    const handleUserProfile = (name, photo) => {
        const profile = {displayName: name, photoURL: photo};
        updateUserProfile(profile)
        .then(()=>{})
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" id="name" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" id="photo" name="photo" placeholder="Your photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" id="email" name="email" placeholder="Your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" id="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>


                            </div>

                            <div className="min-w-[270px]">
                                <div className="mt-2 text-center dark:text-gray-200">
                                    Already Have an Account? &nbsp;
                                    <Link
                                        className="text-blue-500 underline hover:text-blue-600"
                                        to="/login">
                                        Login Here
                                    </Link>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;