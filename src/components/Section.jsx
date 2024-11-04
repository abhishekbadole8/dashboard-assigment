import React, { useState } from 'react'
import SubHeader from './SubHeader'
import { icons } from '../constants'

const ACTIVE_TAB = {
    MENTOR_SESSIONS: 'MENTOR_SESSIONS',
    LEARNING_MATERIAL: 'LEARNING_MATERIAL'
}

const ACTIVE_CHAPTER = {
    CHAPTER1: "Chapter 1",
    CHAPTER2: "Chapter 2",
    CHAPTER3: "Chapter 3",
    CHAPTER4: "Chapter 4",
}

const chapters = [
    {
        id: 1,
        title: 'Chapter 1',
        duration: '05:00:00'
    },
    {
        id: 2,
        title: 'Chapter 2',
        duration: '05:00:00'
    },
    {
        id: 3,
        title: 'Chapter 3',
        duration: '05:00:00'
    },
    {
        id: 4,
        title: 'Chapter 4',
        duration: '05:00:00'
    },

]

export default function Section() {
    const [activeTab, setActiveTab] = useState(ACTIVE_TAB.LEARNING_MATERIAL)
    const [activeChapter, setActiveChapter] = useState(ACTIVE_CHAPTER.CHAPTER1)

    return (
        <section className='h-full border border-highlight-2 rounded-xl p-6'>

            {/* Sub Header */}
            <SubHeader activeTab={activeTab} />

            <div className='pt-6 mt-6 border-t border-[#A4E6FF] ' />

            <div className='flex gap-2'>

                {/* Chapters Here */}
                <ul className='w-full max-w-[250px]'>

                    {chapters.map(({ id, title, duration }) => (
                        <li key={id} className={`flex items-center justify-between py-4 px-2 rounded-md mb-1 last:mb-0 cursor-pointer hover:bg-highlight-5 hover:font-bold ${title === activeChapter ? "bg-highlight-5 font-bold" : "font-normal"}`}>
                            <h5 className={`text-base ${title === activeChapter ? 'font-bold' : ''}`}>{title}</h5>

                            {title === activeChapter && (
                                <div className='flex items-center gap-2'>
                                    <img src={icons.clock} alt="" className='w-4 h-4' />
                                    <span className=''>{duration}</span>
                                </div>
                            )}
                        </li>
                    ))}

                </ul>


                {/* Accordion */}
                <div className=''>

                </div>

            </div>
        </section >
    )
}
