"use client";
import React from 'react'
import ProfileSection from '../components/ProfileSection'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link'
import MyStorySection from '../components/MyStorySection';

const page = () => {

  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jaskaran-deogan/',
      Icon: () => <FaLinkedin className='text-[#0388fc] h-8 w-8' />
    },
    {
      name: 'Github',
      url: "https://github.com/jaskarandeogan",
      Icon: () => <FaGithub className='text-black h-8 w-8' />
    },
    {
      name: 'Twitter',
      url: "https://twitter.com/deoganjaskaran",
      Icon: () => <FaTwitter className='text-[#1DA1F2] h-8 w-8' />
    }]

  const AboutUsLayout = ({
    leftContent,
    rightContent
  }) => {
    return (
      <div className='flex flex-col md:flex-row gap-6 w-full'>
        <div className='w-full h-full md:w-1/2'>
          {leftContent}
        </div>
        <div className='w-full h-full md:w-1/2'>
          {rightContent}
        </div>
      </div>
    )

  }

  const LeftContent = () => {
    return (
      <div className='flex-1 flex flex-col w-full h-full'>
        <h1 className='text-4xl text-orange font-semibold'>About me</h1>
        <div className='mt-4 w-full flex flex-col justify-between flex-1'>
          <div>
            <ProfileSection />
            <p className='mt-8' onClick={()=>{
              window.open('https://www.jaskaran.pro', '_blank');
            }}>
              Check out my <span className='text-orange font-semibold hover:text-darkorange cursor-pointer'>Personal site!</span> 
            </p>
          </div>

          <div className='mt-4'>
            <h4 className='text-gray font-medium'>Connect with me</h4>
            <div className='flex gap-4 mt-4'>
              {
                socials.map((social, index) => {
                  return (

                    <Link href={social.url} key={index} target='_blank' className='text-white hover:text-darkorange'>
                      <social.Icon />
                    </Link>
                  )
                })
              }
            </div>
            <button className='bg-[orange] mt-4 text-[#FFFFFF] font-medium py-2 px-4 w-full md:max-w-[150px] rounded-md hover:bg-[#ff8c00] transition-all'
              onClick={() => window.location.href = 'mailto:jaskaran2k15@gmail.com'}
            >
              email me
            </button>
          </div>
        </div>
      </div>
    )
  }

  const RightContent = () => {
    return (
      <div className='flex-1 mt-[6rem] md:mt-0'>
        <h1 className='text-4xl text-orange font-semibold'>My Story</h1>
        <div className='mt-4'>
          <MyStorySection />

        </div>
      </div>
    )
  }

  return (
    <div className='orange-gradient-100 flex md:items-center w-full min-h-[calc(100vh-80px)]'>
      <div className='max-w-7xl mx-auto w-full min-h-[600px] bg-white lg:rounded-[16px] p-6 flex'>
        <AboutUsLayout
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        />
      </div>
    </div>
  )
}

export default page