import React from 'react'
import { icons } from '../constants'

export default function Header() {
    return (
        <header className='flex items-center gap-4 justify-end'>
            <div className='p-3 rounded-md bg-[#E7F8FF]'>
                <img src={icons.bell} alt="icon" className='w-5 h-5' />
            </div>
            <div className='rounded-full w-12 h-12 bg-[#D9D9D9]'>
                {/* Profile Photo Here */}
            </div>
        </header>
    )
}
