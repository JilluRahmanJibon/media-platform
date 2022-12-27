import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../Assests/login.webp'
const SignIn = () => {
    return (
        <section className='h-screen md:flex justify-center items-center'>
            <img className='md:w-1/2' src={login} alt="" />
            <div className='sm:w-96 mx-auto'>
                <h1 className='font-bold text-4xl pb-2 text-center '>Welcome Back! </h1>
                <p className='text-center pb-5'>Please sign in to your account</p>
                <form >
                    <div>
                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input required type="email" id='email' placeholder="Enter Your Email" className="input mt-1 input-bordered block rounded-sm input-success w-full" />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input required type="password" id='password' placeholder="Enter Your password" className="input mt-1 input-bordered block rounded-sm input-success w-full" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded" />
                            <label for="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm mt-3">
                            <a href="#" className="font-medium text-indigo-500 hover:text-indigo-500">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <input type="submit" value='SignIn' className="input font-semibold cursor-pointer input-bordered block rounded-sm input-success bg-primary w-full" />
                    </div>
                    <p className="mt-5 text-center text-md">
                        <span>Don't have an account?</span>
                        <Link to='/SignUp' href="#" className="font-semibold ml-2 hover:text-primary">Sign up</Link>
                    </p>
                </form>
                <div className='mt-6'>
                    <button className=' btn btn-outline btn-primary font-semibold cursor-pointer block rounded-sm   w-full'>
                        Continue With Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignIn;