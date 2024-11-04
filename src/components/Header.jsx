import React from 'react'
import { icons } from '../constants'

export default function Header() {
    return (
        <header className='flex items-center gap-4 justify-end mb-6'>
            <div className='p-2 rounded-md bg-highlight-3'>
                <img src={icons.bell} alt="icon" className='w-4 h-4' />
            </div>
            <div className='rounded-full w-12 h-12 bg-[#D9D9D9]'>
                {/* Profile Photo Here */}
            </div>
        </header>
    )
}
