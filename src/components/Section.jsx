import React, { useState } from 'react'
import SubHeader from './SubHeader'
import { icons } from '../constants'
import ChapterPart from './ChapterPart'

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
        duration: '05:00:00',
        parts: [
            {
                title: 'Part 1',
                heading: 'Lorem ipsum dolor sit amet',
                totalDuration: '02:00:00',
                level: 'Medium',
                progressPercent: 45,
                lessonsLength: 5,
                lessons: [
                    {
                        type: 'video',
                        title: 'Video 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Article 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Quiz 1',
                        duration: '10:00'
                    },
                    {
                        type: 'coding',
                        title: 'Coding Exercise 1',
                        duration: '10:00'
                    },
                    {
                        type: '',
                        title: 'Combined Resource 1',
                        duration: '10:00'
                    },
                ]
            },
            {
                title: 'Part 2',
                heading: 'Lorem ipsum dolor sit amet',
                totalDuration: '02:00:00',
                level: 'Medium',
                progressPercent: 20,
                lessonsLength: 12,
                lessons: [
                    {
                        type: 'video',
                        title: 'Video 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Article 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Quiz 1',
                        duration: '10:00'
                    },
                    {
                        type: 'coding',
                        title: 'Coding Exercise 1',
                        duration: '10:00'
                    },
                    {
                        type: '',
                        title: 'Combined Resource 1',
                        duration: '10:00'
                    },
                ]
            },
            {
                title: 'Part 3',
                heading: 'Lorem ipsum dolor sit amet',
                totalDuration: '02:00:00',
                level: 'Medium',
                progressPercent: 0,
                lessonsLength: 12,
                lessons: [
                    {
                        type: 'video',
                        title: 'Video 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Article 1',
                        duration: '10:00'
                    },
                    {
                        type: 'text',
                        title: 'Quiz 1',
                        duration: '10:00'
                    },
                    {
                        type: 'coding',
                        title: 'Coding Exercise 1',
                        duration: '10:00'
                    },
                    {
                        type: '',
                        title: 'Combined Resource 1',
                        duration: '10:00'
                    },
                ]
            }
        ]
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
    const [activeChapterId, setActiveChapterId] = useState(chapters[0].id)
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleChapterClick = (id) => {
        setActiveChapterId(id);
    };

    const activeChapter = chapters.find(chapter => chapter.id === activeChapterId);

    return (
        <section className='h-full bg-white border border-highlight-2 rounded-xl p-6'>

            {/* Sub Header */}
            <SubHeader activeTab={activeTab} />

            <div className='pt-6 mt-6 border-t border-[#A4E6FF] ' />

            <div className=' flex gap-4'>

                {/* Chapters Here */}
                <ul className='w-full max-w-[250px]'>

                    {chapters.map(({ id, title, duration }) => (
                        <li key={id} onClick={() => handleChapterClick(id)} className={`flex items-center justify-between py-4 px-2 rounded-md mb-1 last:mb-0 cursor-pointer hover:bg-highlight-5 hover:font-bold ${id === activeChapterId ? "bg-highlight-5 font-bold" : "font-normal"}`}>
                            <h5 className={`text-base ${id === activeChapterId ? 'font-bold' : ''}`}>{title}</h5>

                            {id === activeChapterId && (
                                <div className='flex items-center gap-2'>
                                    <img src={icons.clock} alt="" className='w-4 h-4' />
                                    <span className='text-[#608AD2] text-base font-normal'>{duration}</span>
                                </div>
                            )}
                        </li>
                    ))}

                </ul>


                {/* Accordion */}
                <ul className='w-full'>

                    {activeChapter.parts && activeChapter.parts.map((part, index) => (
                        <ChapterPart key={index} part={part} />
                    ))}

                </ul>

            </div>
        </section >
    )
}
