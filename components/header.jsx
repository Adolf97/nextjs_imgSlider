import Image from 'next/image'
import React from 'react'
import Logo from '@/public/crunchy.png'
import { AiFillCaretDown } from 'react-icons/ai'


export default function Header() {
  return (
    <header className='fixed flex items-center top-0 bg-[#23252b] w-full px-6 z-50'>
      <Image className='logo' src={Logo} />
      <ul className='flex justify-center items-start list-none text-slate-200 ml-5'>
          <li className='flex justify-center items-center item_menu'>
            Browse
            <AiFillCaretDown className='btn_menu_arrowDown' />
          </li>
          <li className='item_menu'>Manga</li>
          <li className='item_menu'>Games</li>
          <li className='flex justify-center items-center item_menu'>
            News
            <AiFillCaretDown className='btn_menu_arrowDown' />
          </li>
        </ul>
    </header>
  )
}
