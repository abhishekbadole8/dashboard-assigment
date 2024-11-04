import { useState } from 'react';
import { icons } from '../constants'

export default function ChapterPart({ part }) {

    const [isOpen, setIsOpen] = useState(false);

    // Toggle accordion state
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className='shadow-custom-drop mb-2.5 cursor-pointer last:mb-0 '>
            <div onClick={toggleAccordion} className='relative overflow-hidden flex items-center justify-center p-[0.75px] bg-gradient-border rounded-lg '>
                <div className='w-full p-4 bg-white rounded-lg'>

                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-base text-[#17384D]'>{part.title}</p>
                            <h5 className='text-base text-black font-bold'>{part.heading}</h5>
                        </div>

                        <div className='flex gap-4'>

                            <div className='flex items-center gap-2'>
                                <img src={icons.clock} alt="" className='w-4 h-4' />
                                <span className='text-[#17384D] text-base font-normal'>{part.totalDuration}</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <img src={icons.growth1} alt="" className='w-4 h-4' />
                                <span className='text-[#17384D] text-base font-normal'>{part.level}</span>
                            </div>

                            <div className='flex items-center gap-2'>
                                <img src={icons.copy} alt="" className='w-4 h-4' />
                                <span className='text-[#17384D] text-base font-normal'>{part.lessionsLength}</span>
                            </div>

                            {/* Dropdown Icon */}
                            <div className='flex items-center gap-2 cursor-pointer' onClick={toggleAccordion}>
                                <img src={icons.arrow} alt="" className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
                            </div>

                        </div>
                    </div>

                    {/* Chapter Completed Status (Percent) */}
                    <div className='w-fit ml-auto rounded-md border border-highlight-4 bg-highlight-5 px-2'>
                        <span className='text-sm font-normal '>{part.progressPercent}% Completed</span>
                    </div>

                </div>

                {/* Loader */}
                <div className='absolute w-full h-2 bottom-0 bg-highlight-5'>
                    <div style={{ width: `${part.progressPercent}%` }} className='h-2 bg-secondary opacity-85' />
                </div>
            </div>

            {isOpen && (
                <div className="py-1 p-4 rounded-b-lg ">
                    {part.lessons?.map((lesson, index) => (
                        <div key={index} className='w-full flex justify-between px-1 py-5 border-b'>

                            <div className='flex items-center gap-2'>
                                <img src={icons.PlayOutline} alt="" className='w-5 h-5' />
                                <h5 className='text-base text-black font-bold'>{lesson.title}</h5>
                            </div>

                            <div className='flex items-center gap-2'>
                                <img src={icons.clock} alt="" className='w-4 h-4' />
                                <span className='text-secondary text-base font-normal'>{lesson.duration}</span>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </li>
    )
}
