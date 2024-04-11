'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { UserAuth } from "../context/AuthContext";
import Image from 'next/image'

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
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

    return (
        <div className="h-20 w-full border-b-2 p-2 flex items-center">
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                <ul className="flex">
                    <li className="p-2 cursor-pointer">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-2 cursor-pointer">
                        <Link href="/about">About</Link>
                    </li>


                    <li className="p-2 cursor-pointer">
                        <Link href="/profile">Profile</Link>
                    </li>
                </ul>
                {loading ? null : !user ? (
                    <ul className="flex">
                        <li onClick={handleSignIn} className="p-2 cursor-pointer">
                            Login with Google
                        </li>
                        <li onClick={()=>{
                            window.location.href = '/login'
                        }} className="p-2 cursor-pointer">
                            Other
                        </li>
                    </ul>
                ) : (
                    <div className='flex items-center gap-2'>
                        {user.photoURL && <Image
                            src={user?.photoURL}
                            alt={user?.displayName}
                            className="h-8 w-8 rounded-full"
                            width={50}
                            height={50}
                        />}
                        <div>
                            <p>Welcome, {user.displayName?.split(' ')[0] || user?.email}</p>
                            <p className="cursor-pointer" onClick={handleSignOut}>
                                Sign out
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar