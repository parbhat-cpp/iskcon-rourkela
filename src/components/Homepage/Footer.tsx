"use client"

import { SOCIALS } from '@/app/constants';
import Link from 'next/link';
import React, { useState } from 'react'

const Footer = () => {
    const [year] = useState(new Date().getFullYear());

    return (
        <footer className='w-full md:px-24 px-7 bg-surface-a10 text-white'>
            <div className='grid md:grid-cols-4 grid-cols-2 py-7 gap-5'>
                <div className='space-y-3'>
                    <h4>
                        Contact Us
                    </h4>
                    <div className='flex flex-col space-y-2 text-sm text-stone-300'>
                        <p>
                            Iskcon Rourkela
                        </p>
                        <p>
                            Kn-24, Kalyani nagar, Phase 1, Chhend Colony, Rourkela, Odisha
                        </p>
                        <p>
                            Pincode: 769015
                        </p>
                        <Link href={'tel:+91 9999999999'} className='hover:underline'>
                            Mobile: +91 9999999999
                        </Link>
                        <Link href={'mailto:sridham.govinda@gmail'} className='hover:underline'>
                            Email: sridham.govinda@gmail
                        </Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4>
                        Quick Links
                    </h4>
                    <div className='flex flex-col space-y-2 text-sm text-stone-300'>
                        <Link href={'/'} className='hover:underline'>
                            Home
                        </Link>
                        <Link href={'/about'} className='hover:underline'>
                            About
                        </Link>
                        <Link href={'/donate'} className='hover:underline'>
                            Donate
                        </Link>
                        <Link href={'/temple'} className='hover:underline'>
                            Temple
                        </Link>
                        <Link href={'/event'} className='hover:underline'>
                            Event
                        </Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4>
                        Ligalities
                    </h4>
                    <div className='flex flex-col space-y-2 text-sm text-stone-300'>
                        <Link href={'/terms-condition'} className='hover:underline'>
                            Terms and Conditions
                        </Link>
                        <Link href={'/privacy-policy'} className='hover:underline'>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4>
                        Follow Us
                    </h4>
                    <div className='flex gap-3'>
                        {
                            Object.keys(SOCIALS).map((social) => (
                                <Link href={SOCIALS[social].link as string} key={SOCIALS[social].link as string} className='p-2 border'>
                                    {SOCIALS[social].icon}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='h-[1px] border-b'></div>
            <div className='py-3'>
                <p>
                    &copy; {year} ISKCON Rourkela
                </p>
            </div>
        </footer>
    )
}

export default Footer