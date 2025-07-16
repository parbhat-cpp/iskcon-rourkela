import React from 'react'
import SocialLink from './SocialLink'
import { SOCIALS } from '@/app/constants'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className='sticky top-0 left-0 px-24 py-7 shadow-2xs'>
      <div className='flex justify-between items-center'>
        {/* Social links */}
        <div className='flex gap-3'>
          {
            Object.keys(SOCIALS).map((social) => (
              <SocialLink key={SOCIALS[social].link} link={SOCIALS[social].link} icon={SOCIALS[social].icon} />
            ))
          }
        </div>
        {/* Iskcon rourkela icon */}
        <div>
          Icon
        </div>
        {/* Donation */}
        <Button variant={'destructive'}>
          Donate
        </Button>
      </div>
      {/* Navbar links */}
      <div className='flex justify-between pt-7 pb-2'>
        <Link href={'/'}>
          Home
        </Link>
        <Link href={'/about'}>
          About
        </Link>
        <Link href={'/temple'}>
          Temple
        </Link>
        <Link href={'/event'}>
          Event
        </Link>
        <Link href={'/support-us'}>
          Support us
        </Link>
        <Link href={'/connect'}>
          Connect
        </Link>
      </div>
    </header>
  )
}

export default Navbar