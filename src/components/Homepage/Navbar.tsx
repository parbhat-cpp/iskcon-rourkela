'use client';

import React from 'react'
import SocialLink from './SocialLink'
import { SOCIALS } from '@/app/constants'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className='sticky top-0 left-0 md:px-24 px-7 py-7 shadow-2xs bg-blue-50 z-50'>
      <div className='grid grid-cols-3 justify-between items-center'>
        {/* Social links */}
        <div className='md:flex hidden gap-3'>
          {
            Object.keys(SOCIALS).map((social) => (
              <SocialLink key={SOCIALS[social].link as string} link={SOCIALS[social].link as string} icon={SOCIALS[social].icon} />
            ))
          }
        </div>
        {/* Iskcon rourkela icon */}
        <Image src='/iskcon-rkl-logo.png' alt='Iskcon Rourkela Logo' width={100} height={100} className='md:mx-auto mr-auto' />
        {/* Donation */}
        <div className='flex basis-2 gap-6 items-center ml-auto'>
          <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSeAD2mP_ruYbwKVUmQM9KLScRJZIJtqLeXi7vkpCfjXPtkPUg/viewform?pli=1&pli=1'} className='underline text-shadow-sky-300 md:text-xl text-md animate-glow'>
            Janmashtami Registration 2025
          </Link>
          <Button variant={'destructive'} onClick={() => router.push('/donate')}>
            Donate
          </Button>
        </div>
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