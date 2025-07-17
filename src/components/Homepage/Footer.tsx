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
                        <Link href={'tel:+91 7008443529'} className='hover:underline' aria-label='Iskon Rourkela Contact Number'>
                            Mobile: +91 7008443529
                        </Link>
                        <Link href={'tel:+91 9668429415'} className='hover:underline' aria-label='Iskon Rourkela Contact Number'>
                            Mobile: +91 9668429415
                        </Link>
                        <Link href={'mailto:rourkelaiskcon@gmail.com'} className='hover:underline' aria-label='Iskon Rourkela Email'>
                            Email: rourkelaiskcon@gmail.com
                        </Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4>
                        Quick Links
                    </h4>
                    <div className='flex flex-col space-y-2 text-sm text-stone-300'>
                        <Link href={'/'} className='hover:underline' aria-label='Iskon Rourkela Home Page'>
                            Home
                        </Link>
                        <Link href={'/about'} className='hover:underline' aria-label='Iskon Rourkela About'>
                            About
                        </Link>
                        <Link href={'/donate'} className='hover:underline' aria-label='Iskon Rourkela Donate'>
                            Donate
                        </Link>
                        <Link href={'/temple'} className='hover:underline' aria-label='Iskon Rourkela Temple'>
                            Temple
                        </Link>
                        <Link href={'/event'} className='hover:underline' aria-label='Iskon Rourkela Event'>
                            Event
                        </Link>
                    </div>
                </div>
                <div className='space-y-3'>
                    <h4>
                        Legalities
                    </h4>
                    <div className='flex flex-col space-y-2 text-sm text-stone-300'>
                        <Link href={'/terms-condition'} className='hover:underline' aria-label='Iskon Rourkela Terms and Conditions'>
                            Terms and Conditions
                        </Link>
                        <Link href={'/privacy-policy'} className='hover:underline' aria-label='Iskon Rourkela Privacy Policy'>
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
                                <Link href={SOCIALS[social].link as string} key={SOCIALS[social].link as string} className='p-2 border' aria-label={`Iskon Rourkela ${social}`}>
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