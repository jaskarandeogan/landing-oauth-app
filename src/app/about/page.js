import React from 'react'

const page = () => {

  const AboutUsLayout = ({
    leftContent,
    rightContent
  }) => {
    return (
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/2'>
          {leftContent}
        </div>
        <div className='w-full md:w-1/2'>
          {rightContent}
        </div>
      </div>
    )

  }
  
  const LeftContent = () => {
    return (
      <div className=''>
        <h1 className='text-4xl text-darkorange font-semibold'>About Us</h1>
      </div>
    )
  }

  const RightContent = () => {
    return (
      <div className=''>
        <h1 className='text-4xl text-darkorange font-semibold'>Our Mission</h1>
      </div>
    )
  }

  return (
    <div className='orange-gradient-100 flex items-center w-full min-h-[calc(100vh-80px)]'>
      <div className='max-w-7xl mx-auto w-full h-[600px] glass-bg rounded-[16px] p-6'>
        <AboutUsLayout 
          leftContent={<LeftContent />}
          rightContent={<RightContent />}
        />
      </div>
    </div>
  )
}

export default page