"use client";
import React, { useEffect, useState } from 'react'
import { UserAuth } from "../context/AuthContext";
import Spinner from "../components/Spinner";
import { PuffLoader } from 'react-spinners';

const Profile = () => {
    const { user } = UserAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div className="p-4 orange-gradient-100 min-h-[calc(100vh-80px)] relative">
            {loading ? (
                <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                    <PuffLoader color="#FFFF" />
                </div>
            ) : user ? (
                <p>
                    Welcome, {user?.displayName || user?.email} - you are logged in to the profile page -
                    a protected route.
                </p>
            ) : (
                <p>You must be logged in to view this page - protected route.</p>
            )}
        </div>
    );
}

export default Profile