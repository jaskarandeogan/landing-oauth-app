import React from 'react'

const Form = ({
    handleSignIn,
    handleFacebookSignIn ,
    handleEmailLogin,
    isEmailSent,
    setEmail
}) => {

    return (
        <div className='w-[500px] m-auto p-8 shadow-2xl rounded-lg'>
            <h1 className='text-4xl text-gray-600 font-semibold'>Login</h1>
            <div className='mt-4 flex flex-col gap-2'>
                <input type="email" placeholder='Email' className='p-3 border border-gray-300 rounded-md my-4' onChange={e => setEmail(prev => {
                    if (e.target.value !== prev) {
                        return e.target.value;
                    }
                    return prev;
                })} />
                {isEmailSent && <p className='text-green-500'>Verification email sent</p>}
                <button className='bg-green-800 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleEmailLogin}>Login With Email</button>
                <button className='bg-red-500 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleSignIn}>
                    Login With Google
                </button>
                <button className='bg-blue-950 text-white font-medium hover:brightness-125 p-4 w-full rounded-md' onClick={handleFacebookSignIn}>Login With Facebook</button>
            </div>
        </div>
    )
}

export default Form