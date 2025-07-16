import Image from 'next/image'
import React from 'react'

const Donate = () => {
    return (
        <main className='flex flex-col items-center py-4'>
            <h1>Donate to Iskcon Rourkela</h1>
            <div className='space-y-3 w-[80vw]'>
                <p>Dear Devotees,</p>
                <p>With your continued blessings and devotion, our temple has remained a sacred space for prayer, peace, and community. We humbly request your generous support through donations to help us maintain temple activities, rituals, and upkeep.</p>
                <p>Every contribution, big or small, helps us preserve our traditions and serve the community better.</p>
                <p>May your kindness bring you divine blessings and inner peace.</p>
            </div>
            <Image src={'/donate-qr.jpg'} alt={'Iskcon Rourkela Donation QR Code'} width={700} height={1000}/>
        </main>
    )
}

export default Donate