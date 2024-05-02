import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsPatchCheckFill } from 'react-icons/bs'
import classNames from 'classnames'


const index = ({
    user,
    handleSignOut,
    className
}) => {
    return (
        <div className={classNames('flex flex-col min-w-[22.5rem] p-4', className)}>
            <div className='flex items-center gap-4'>
                <Image src={user?.photoURL} alt={user?.displayName} width={400} height={400} className='rounded-full h-20 w-20' />
                <div className='flex-1'>
                    <p className='font-medium text-gray'>{user.displayName || user?.email}</p>
                    {user?.emailVerified &&
                        <div className='flex items-center gap-2'>
                            <BsPatchCheckFill className='text-[#0388fc]' />
                            <p className='text-[#0388fc] text-sm'>Verified</p>
                        </div>
                    }
                    {
                        !user?.emailVerified && <div className='flex items-center gap-2'>
                            <BsPatchCheckFill className='text-[#bdbdbd]' />
                            <p className='text-[#bdbdbd] text-sm'>Not Verified</p>
                        </div>

                    }

                </div>
            </div>
            <hr className='my-4 text-zinc-300' />
            <p className='font-medium text-orange hover:brightness-125'>Account</p>
            <Link href="/profile" className='ml-4'>
                <p className='text-gray hover:brightness-125'>Profile</p>
            </Link>
            <Link href="/#" className='ml-4'>
                <p className='text-gray hover:brightness-125'>Help</p>
            </Link>
            <Link href="/#" className='ml-4'>
                <p className='text-gray hover:brightness-125'>Language</p>
            </Link>
            <hr className='my-4 text-zinc-300' />
            <button onClick={handleSignOut} className="px-4 py-2 cursor-pointer text-white font-medium rounded bg-[orange] hover:bg-[#ff8c00] transition-all">
                Log out
            </button>
        </div>
    )
}

export default index