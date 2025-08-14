'use client';

import React from 'react'
import SocialLink from './SocialLink'
import { SOCIALS } from '@/app/constants'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '../ui/drawer';

const Navbar = () => {
  const router = useRouter();

  return (
    <header className='sticky top-0 left-0 md:px-24 px-7 py-2 shadow-2xs bg-[#002e6c] z-50 text-white'>
      <div className='grid md:grid-cols-3 grid-cols-2 justify-between items-center'>
        {/* Social links */}
        <div className='md:flex hidden gap-3'>
          {
            Object.keys(SOCIALS).map((social) => (
              <SocialLink key={SOCIALS[social].link as string} link={SOCIALS[social].link as string} icon={SOCIALS[social].icon} />
            ))
          }
        </div>
        {/* Iskcon rourkela icon */}
        <Image src='/iskcon-rkl-logo.png' alt='Iskcon Rourkela Logo' width={100} height={100} className='md:mx-auto mr-auto md:h-[100px] md:w-[100px] h-[75px] w-[75px]' />
        {/* Donation */}
        <div className='flex gap-3 items-center ml-auto'>
          <Link href={'/donate'} className='md:hidden block underline text-shadow-sky-300 md:text-xl text-sm animate-glow' aria-label='ISKCON Rourkela Donation'>
            Donate
          </Link>
          <Button variant={'destructive'} className='md:block hidden' onClick={() => router.push('/donate')}>
            Donate
          </Button>
          {/* Show drawer on smaller screens */}
          <Drawer direction='right'>
            <DrawerTrigger asChild>
              <button className='md:hidden block cursor-pointer' aria-label='Side Drawer Menu Iskcon'>
                <CiMenuFries size={35} />
              </button>
            </DrawerTrigger>
            <DrawerContent className='w-full bg-white'>
              <div className="">
                <DrawerHeader>
                  <DrawerTitle>
                    <DrawerClose asChild className='flex ml-auto cursor-pointer'>
                      <IoCloseOutline size={28} />
                    </DrawerClose>
                  </DrawerTitle>
                </DrawerHeader>
                <div className="p-4 text-xl flex flex-col gap-3">
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/donate'} className='hover:underline' aria-label='Iskon Rourkela Donate'>
                      Donate
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/gallery'} aria-label='Iskon Rourkela Gallery'>
                      Gallery
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/event'} className='hover:underline' aria-label='Iskon Rourkela Event'>
                      Event
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/connect'} className='hover:underline' aria-label='Iskon Rourkela Connect'>
                      Connect
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/support-us'} className='hover:underline' aria-label='Iskon Rourkela Support'>
                      Support us
                    </Link>
                  </DrawerClose>
                  <DrawerClose asChild className='cursor-pointer'>
                    <Link href={'/about'} className='hover:underline' aria-label='Iskon Rourkela About'>
                      About
                    </Link>
                  </DrawerClose>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className='w-full overflow-hidden'>
        <div className='sliding'>
          {/* add sliding links */}
        </div>
      </div>
      {/* Navbar links */}
      <div className='md:flex hidden justify-between pt-7 pb-2'>
        <Link href={'/'} aria-label='Iskon Rourkela Home'>
          Home
        </Link>
        <Link href={'/gallery'} aria-label='Iskon Rourkela Gallery'>
          Gallery
        </Link>
        <Link href={'/about'} aria-label='Iskon Rourkela About'>
          About
        </Link>
        <Link href={'/event'} aria-label='Iskon Rourkela Event'>
          Event
        </Link>
        <Link href={'/support-us'} aria-label='Iskon Rourkela Support'>
          Support us
        </Link>
        <Link href={'/connect'} aria-label='Iskon Rourkela Connect'>
          Connect
        </Link>
      </div>
    </header>
  )
}

export default Navbar