'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { UserAuth } from "../context/AuthContext";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Image from 'next/image'
import Dropdowns from './shared/Dropdown';
import CartView from './shared/CartView';
import ProfileView from './ProfileView';
import { BsPatchCheckFill } from "react-icons/bs";

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
        <div className="h-20 w-full md:p-2 flex items-center shadow-md">
            <div className='max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
                <ul className="items-center flex">
                    <Image src="/sneakers.svg" alt="logo" width={100} height={30} className='h-auto w-auto cursor-pointer' onClick={
                        () => { window.location.href = '/' }
                    } />

                </ul>
                {loading ? null : !user ? (
                    <ul className="flex gap-4 items-center flex-row-reverse md:flex-row">
                        <li className="ml-8 px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li className="cart cursor-pointer">
                            <Dropdowns Icon={HiOutlineShoppingCart}
                                className={"shadow-sm border-2 border-zinc-300 hover:bg-gray-50 px-4 py-2"}
                            >
                                <CartView />
                            </Dropdowns>
                        </li>
                        <button onClick={handleSignIn} className="px-4 py-2 cursor-pointer text-white font-medium rounded bg-[orange] hover:bg-[#ff8c00] transition-all">
                            Sign in
                        </button>
                    </ul>
                ) : (
                    <ul className='flex flex-row-reverse md:flex-row items-center gap-2'>
                        <li className="ml-8 px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-2 cursor-pointer font-medium text-gray hover:brightness-125 hidden md:block">
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li className="cart cursor-pointer mr-2">
                            <Dropdowns Icon={HiOutlineShoppingCart}
                                className={"shadow-sm border-2 border-zinc-300 hover:bg-gray-50 px-4 py-2"}
                            >
                                <CartView />
                            </Dropdowns>
                        </li>
                        {user.photoURL &&
                            <Dropdowns image={{
                                src: user?.photoURL,
                                alt: user?.displayName,
                                width: 80,
                                height: 80,
                                className: "h-10 w-10 rounded-full",
                            }
                            }
                                translate="translate-x-16 md:translate-x-0"
                            >
                                <ProfileView user={user} handleSignOut={handleSignOut} />
                            </Dropdowns>
                        }
                        <li className='hidden md:flex items-center gap-4'>
                            <Link href="/profile">
                                <p className='font-medium text-gray hover:brightness-125'>{user.displayName?.split(' ')[0] || user?.email}</p>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Navbar