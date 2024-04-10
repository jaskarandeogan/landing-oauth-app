"use client"
import React, { useState, useEffect } from 'react'
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";

const Login = () => {
    const { user, googleSignIn, facebookSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleFacebookSignIn = async () => {
        try {
            await facebookSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user])

    const handleEmailLogin = async () => {
        try {
            console.log(email, 'Email login');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex w-full min-h-screen'>
            {loading && <Spinner />}
            {user && (
                <div className="w-[500px] m-auto p-8 shadow-lg rounded-lg">
                    <p>
                        Welcome, {user.displayName} - you are logged in to the profile page -
                        a protected route.
                    </p>
                </div>
            )}
            {!user && <div className='w-[500px] m-auto p-8 shadow-lg rounded-lg'>
                <h1 className='text-4xl text-gray-600 font-semibold'>Login</h1>
                <div className='mt-4 flex flex-col gap-2'>
                    <input type="email" placeholder='Email' className='p-3 border border-gray-300 rounded-md my-4' onChange={e => setEmail(prev => {
                        if (e.target.value !== prev) {
                            return e.target.value;
                        }
                        return prev;
                    })} />
                    <button className='bg-green-800 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleEmailLogin}>Login With Email</button>
                    <button className='bg-red-500 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleSignIn}>
                        Login With Google
                    </button>
                    <button className='bg-blue-950 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleFacebookSignIn}>Login With Facebook</button>
                </div>
            </div>}
        </div>
    )
}

export default Login