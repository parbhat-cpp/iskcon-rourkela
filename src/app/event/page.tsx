import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Event = () => {
  return (
    <main>
      <section className='py-5 space-y-4'>
        <h1 className='text-center'>Events</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-3 w-[80vw] mx-auto gap-4 place-items-center'>
          <div className='grid gap-2'>
            <Image src={'/janmasthami-event.webp'} alt={'Janmasthami 2025'} width={300} height={300} className='' />
            <Link href={'https://drive.google.com/drive/folders/1SLuRVd-cptDAnkGtwudO0qX8dWrbQ9OW?usp=sharing'} className='text-blue-400 underline' aria-label='Janmasthami Quiz Guide Book Link'>
              QUIZ GUIDE BOOK FOR JUNIOR AND SENIOR
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Event