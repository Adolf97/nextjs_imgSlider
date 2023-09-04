import React from 'react'
import { AiFillCaretDown, AiFillFacebook, AiFillYoutube, AiOutlineCopyright } from 'react-icons/ai'
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Archivo } from 'next/font/google'

const archivo = Archivo({ subsets: ['latin'], weight: '400' })

export default function Footer() {
  return (
    <footer className='flex flex-col py-12 px-28 h-auto footer'>
      <section className='footer_section_first'>
        <div className='flex flex-col justify-start'>
          <h2>Navigation</h2>
          <ul>
            <li>Browse Popular</li>
            <li>Browse Simulcasts</li>
            <li>Browse Manga</li>
            <li>Release Calendar</li>
            <li>News</li>
            <li>Games</li>
          </ul>
        </div>
        <div className='flex flex-col justify-start'>
          <h2>Connect With Us</h2>
          <ul>
            <li>
              <AiFillYoutube className='footer_icon' />
              Youtube
            </li>
            <li>
              <AiFillFacebook className='footer_icon' />
              Facebook
            </li>
            <li>
              <FaTwitter className='footer_icon' />
              Twitter
            </li>
            <li>
              <FaInstagram className='footer_icon' />
              Instagram
            </li>
            <li>
              <FaTiktok className='footer_icon' />
              TikTok
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-start'>
          <h2>Crunchyroll</h2>
          <ul>
            <li>About</li>
            <li>Help/FAQ</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>AdChoices</li>
            <li>Your Privacy Choices</li>
            <li>Cookie Consent Tool</li>
            <li>Press Inquiries</li>
            <li>Get the Apps</li>
            <li>Redeem Gift Card</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className='flex flex-col justify-start'>
          <h2>Account</h2>
          <ul>
            <li>Watchlist</li>
            <li>Crunchylists</li>
            <li>History</li>
            <li>My Account</li>
            <li>Log Out</li>
          </ul>
        </div>
      </section>
      <section className='flex justify-between items-center mt-8'>
        <div className='flex text-gray-400'>
          <span className={`${archivo.className} text-lg font-extralight tracking-wide border-[#4a545a] border-r-[1px] pr-2 mr-2`}>SONY PICTURES</span>
          <span className='flex justify-center items-center text-sm'>
            <AiOutlineCopyright className='mr-1' />
            Crunchyroll, LLC
          </span>
        </div>
        <div className='flex justify-center items-center text-gray-400 text-sm font-semibold'>
          <AiFillCaretDown className='mr-3' />
          ENGLISH (US)
        </div>
      </section>
    </footer>
  )
}
