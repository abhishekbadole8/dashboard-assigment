import { icons } from '../constants';

const ACTIVE_TAB = {
    MENTOR_SESSIONS: 'MENTOR_SESSIONS',
    LEARNING_MATERIAL: 'LEARNING_MATERIAL'
}

export default function SubHeader({ activeTab }) {
    return (
        <div className='flex justify-between items-center'>

            {/* Tabs */}
            <div className='flex gap-2 bg-light-blue-to-white rounded-lg p-2'>

                <div className={`flex items-center gap-2.5 py-2 px-4 rounded-[10px] cursor-pointer ${activeTab === ACTIVE_TAB.MENTOR_SESSIONS ? 'border-border-gradient bg-white shadow-custom-blue' : ''}`}>
                    <img src={icons.calendar} alt="icon-calendar" className='w-4 h-4' />
                    <h6 className={`text-base  ${activeTab === ACTIVE_TAB.MENTOR_SESSIONS ? 'font-bold' : 'font-normal'}`}>Mentor Sessions</h6>
                </div>

                <div className={`flex items-center gap-2.5 py-2 px-4 rounded-[10px] cursor-pointer ${activeTab === ACTIVE_TAB.LEARNING_MATERIAL ? 'border-border-gradient bg-white shadow-custom-blue' : ''}`}>
                    <img src={icons.briefcase} alt="icon-briefcase" className='w-4 h-4' />
                    <h6 className={`text-base ${activeTab === ACTIVE_TAB.LEARNING_MATERIAL ? 'font-bold' : 'font-normal'}`}>Learning Material</h6>
                </div>

            </div>

            {/* How it works */}
            <div className='flex items-center gap-2.5 py-2 px-4 rounded-[10px] border cursor-pointer  border-highlight-4 '>
                <img src={icons.instruction} alt="icon-instruction" className='w-4 h-4' />
                <h1 className='text-base text-secondary font-bold'>How it works</h1>
            </div>

        </div>
    )
}
