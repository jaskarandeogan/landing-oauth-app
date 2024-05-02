'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { UserAuth } from "../context/AuthContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Image from 'next/image'
import Dropdowns from './shared/Dropdown';
import CartView from './shared/CartView';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        window.location.href = '/login';
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
        <div className="h-20 w-full p-2 flex items-center shadow-md">
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                <ul className="items-center flex">
                    <Image src="/sneakers.svg" alt="logo" width={100} height={30} className='h-auto w-auto cursor-pointer' onClick={
                        () => { window.location.href = '/' }    
                    }/>
                    <li className="ml-8 px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                        <Link href="/about">About</Link>
                    </li>
                </ul>
                {loading ? null : !user ? (
                    <ul className="flex gap-4 items-center flex-row-reverse md:flex-row">
                        <li className="cart cursor-pointer">
                            <Dropdowns Icon={HiOutlineShoppingCart} >
                                <CartView />
                            </Dropdowns>
                        </li>
                        <button onClick={handleSignIn} className="px-4 py-2 cursor-pointer text-white font-medium rounded bg-[orange] hover:bg-[#ff8c00] transition-all">
                            Sign in
                        </button>
                    </ul>
                ) : (
                    <div className='flex flex-row-reverse md:flex-row items-center gap-2'>
                        <div className="cart cursor-pointer mr-2">
                            <Dropdowns Icon={HiOutlineShoppingCart} >
                                <CartView />
                            </Dropdowns>
                        </div>
                        {user.photoURL &&
                            <Link href="/profile">
                                <Image
                                    src={user?.photoURL}
                                    alt={user?.displayName}
                                    className="h-10 w-10 rounded-full"
                                    width={80}
                                    height={80}
                                    onClick={() => { window.location.href = '/profile' }}
                                />
                            </Link>
                        }
                        <div className='hidden md:flex items-center gap-4'>
                            <Link href="/profile">
                                <p className='font-medium text-gray hover:brightness-125'>{user.displayName?.split(' ')[0] || user?.email}</p>
                            </Link>
                            <button onClick={handleSignOut} className="px-4 py-2 cursor-pointer text-white font-medium rounded bg-[orange] hover:bg-[#ff8c00] transition-all">
                                Log out
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar