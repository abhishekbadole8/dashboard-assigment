import React, { useState } from 'react'
import SubHeader from './SubHeader'

const ACTIVE_TAB = {
    MENTOR_SESSIONS: 'MENTOR_SESSIONS',
    LEARNING_MATERIAL: 'LEARNING_MATERIAL'
}

export default function Section() {
    const [activeTab, setActiveTab] = useState(ACTIVE_TAB.LEARNING_MATERIAL)

    return (
        <section className='h-full border border-highlight-2 rounded-xl p-6'>

            {/* Sub Header */}
            <SubHeader activeTab={activeTab} />

        </section>
    )
}
