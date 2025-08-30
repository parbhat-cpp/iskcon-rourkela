import Image from 'next/image'
import React from 'react'

const Event = () => {
  return (
    <main>
      <section className='py-5 space-y-4'>
        <h1 className='text-center'>Events</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 space-y-3 w-[80vw] mx-auto gap-4 place-items-center'>
          <Image src={'/radhastami.jpg'} alt={'Radhasthami 2025'} width={300} height={300} className='' />
        </div>
      </section>
    </main>
  )
}

export default Event