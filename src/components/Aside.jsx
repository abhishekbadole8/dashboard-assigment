import React from 'react'
import { icons } from "../constants"

export default function Aside() {

  const asideItems = [
    {
      id: 1,
      title: 'AlgoZenith',
      icon: icons.menu,
    },
    {
      id: 2,
      title: 'Dashboard',
      icon: icons.dashboard
    },
    {
      id: 3,
      title: 'Learn',
      icon: icons.bulb
    },
    {
      id: 4,
      title: 'Forums',
      icon: icons.people
    },
    {
      id: 5,
      title: 'Upskill',
      icon: icons.clipboard
    },
    {
      id: 6,
      title: 'Contest',
      icon: icons.growth

    },
    {
      id: 7,
      title: 'Leaderboard',
      icon: icons.star

    }
  ]

  return (
    <aside className='w-full  max-w-[250px] '>

      <ul>
        {asideItems.map(({ id, icon, title }) => (
          <li key={id} className='list-none text-secondary'>{title}</li>
        ))}
      </ul>

    </aside>
  )
}
