import React from 'react'
import { icons } from "../constants"
import AsideItems from './AsideItems';

const asideItems = [
  {
    id: 1,
    title: 'AlgoZenith',
    icon: icons.menu,
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: icons.dashboard,
    path: '/dashboard'
  },
  {
    id: 3,
    title: 'Learn',
    icon: icons.bulb,
    path: '/learn'
  },
  {
    id: 4,
    title: 'Forums',
    icon: icons.people,
    path: '/forum'
  },
  {
    id: 5,
    title: 'Upskill',
    icon: icons.clipboard,
    path: '/upskill'
  },
  {
    id: 6,
    title: 'Contest',
    icon: icons.growth,
    path: '/contest'
  },
  {
    id: 7,
    title: 'Leaderboard',
    icon: icons.star,
    path: '/leaderboard'
  }
]

export default function Aside() {

  return (
    <aside className='w-full h-full pl-2 pr-4 max-w-[250px]'>

      <ul className=''>
        {asideItems.map((item) => (
          <AsideItems key={item.id} item={item} />
        ))}
      </ul>

    </aside>
  )
}
