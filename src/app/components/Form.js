import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Form = ({
    handleSignIn,
    handleFacebookSignIn,
    handleEmailLogin,
    isEmailSent,
    setEmail
}) => {

    return (
        <div className='w-full min-h-[500px] flex flex-col justify-center md:w-[500px] m-auto'>
            <h1 className='text-4xl text-center text-gray font-semibold'>Sign In With</h1>
            <div className='flex items-start justify-between gap-2 mt-4 px-8'>
                <button className='font-medium h-[56px] w-full rounded-md flex-1 flex items-center shadow-md justify-center hover:shadow-lg transition-all bg-white' onClick={handleFacebookSignIn}>
                    <FaFacebook className='mr-2 h-[24px] w-[24px]' />
                    Facebook
                </button>
                <button className='font-medium h-[56px] w-full rounded-md flex-1 flex items-center shadow-md justify-center hover:shadow-lg transition-all bg-white' onClick={handleSignIn}>
                    <FcGoogle className='mr-2 h-[24px] w-[24px]' />
                    Google
                </button>
            </div>
            <h1 className='text-4xl text-center text-gray font-semibold mt-8'>Or</h1>
            <div className='mt-4 flex flex-col gap-2 px-8'>
                <input type="email" placeholder='Email' className='p-3 border-2 border-slate-200 rounded-md my-4' onChange={e => setEmail(prev => {
                    if (e.target.value !== prev) {
                        return e.target.value;
                    }
                    return prev;
                })} />
                {isEmailSent && <p className='text-green-500'>Verification email sent</p>}
                <button className='bg-[orange] text-[#FFFFFF] font-medium p-4 w-full rounded-md hover:bg-[#ff8c00] transition-all' onClick={handleEmailLogin}>Login With Email</button>
            </div>
        </div>
    )
}

export default Form;