import classNames from 'classnames'
import React from 'react'

const MyStorySection = () => {
    return (
        <section className={classNames('flex', 'w-full', 'flex-col', 'gap-7')}>
            <p>
                Since 2016, I&apos;ve been on an exciting journey in computer science, evolving from a programming novice to a seasoned software engineer. My recent experiences include contributions to a groundbreaking <span className={classNames('text-orange', 'transition-all')}>web3</span> startup and a pivotal role in a leading fintech cloud-based payment processing company. Each step has been a learning opportunity, and I&apos;m eager to keep pushing the boundaries of what&apos;s possible in software development.
            </p>
            <p className='transition-all'>
                At Felix, my role as a web developer centered around devising software solutions for the <span className={classNames('text-orange transition-all', 'font-medium')}>Marketing</span> department&apos;s unique challenges. I thrive on embracing fresh challenges and crafting innovative solutions to drive progress.
            </p>
            <p className='transition-all'>Beyond the <span className={classNames('text-black transition-all',)}>tech realm</span>, I love exploring nature, and my go-to activities in my free time are hiking and kayaking. Additionally, I lead an active lifestyle, engaging in workouts and occasional sports. Despite my fear of heights, skydiving is on my bucket list for the future.</p>
        </section>
    )
}

export default MyStorySection