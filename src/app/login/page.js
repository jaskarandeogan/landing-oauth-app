"use client"
import React, { useState, useEffect } from 'react'
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import Form from '../components/Form';
import Image from 'next/image'
import { data } from '../data/data';

const Login = () => {
    const { user, googleSignIn, facebookSignIn, sendEmail, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [isEmailSent, setIsEmailSent] = useState(false);
    const [email, setEmail] = useState('');
    const [image, setImage] = React.useState(data.images[0].src);

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

    useEffect(() => {
        if (user) {
            window.location.href = '/profile';
        }
    }
    , [user])

    const handleEmailLogin = async () => {
        try {
            await sendEmail(email);
            setIsEmailSent(true);
        } catch (error) {
            console.log(error);
        }
    }

    const handleImageChange = (e) => {
        setImage(e.target.src);
      };

    return (
        <div className='flex w-full '>
            {loading && <Spinner />}
            {!loading &&
                <section className='flex justify-between w-full py-12 lg:py-24 mx-auto max-w-7xl px-8 gap-12 lg:gap-24'>
                    <div className="image-section w-full lg:max-w-[550px] hidden md:block flex-1">
                        <div className="main-image rounded">
                            <Image src={image} alt="main" className="rounded w-full shadow-xl" width={400} height={400} />
                        </div>
                        <div className="thumbnails flex-wrap justify-between mt-[32px] flex">
                            {data.images.map((item) => {
                                return (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        key={item.id}
                                        onClick={(e) => handleImageChange(e)}
                                        width={400}
                                        height={400}
                                        className="w-[20%] h-[20%] rounded hover:opacity-70 cursor-pointer shadow-sm"
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className='flex-1 flex items-center'>
                        <Form
                            handleSignIn={handleSignIn}
                            handleFacebookSignIn={handleFacebookSignIn}
                            handleEmailLogin={handleEmailLogin}
                            isEmailSent={isEmailSent}
                            setEmail={setEmail}
                        />
                    </div>
                </section>}
        </div>
    )
}

export default Login