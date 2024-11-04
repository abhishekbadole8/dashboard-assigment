import { useLocation } from 'react-router-dom'

export default function AsideItems({ item }) {
    const { pathname } = useLocation();

    const { icon, title, path } = item

    return (
        <li className={`first:mb-4 list-none flex items-center gap-x-5 rounded-md py-2.5 px-4 mb-1 cursor-pointer hover:bg-[#D6F4FF] 
        ${pathname === path ? 'bg-[#D6F4FF]' : ''}`}>
            <img src={icon} alt="icon" className='w-5 h-5' />
            <p className='text-black font-normal text-base'>{title}</p>
        </li>
    )
}
