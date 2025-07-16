import Navbar from '@/components/Homepage/Navbar'
import React from 'react'

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main className='space-y-3 py-3'>
        {/* Hero section */}
        <section className='w-[80vw] flex justify-center flex-col mx-auto'>
          <h1 className='text-center'>Welcome to ISKCON Rourkela</h1>
          <p>
            Experience divine tranquility at ISKCON Bhubaneswar, where devotion meets culture. Join us in celebrating the teachings of Lord Krishna through our vibrant temple, kirtan, and community activities. Explore our temple services, festivals, and opportunities to connect with like-minded devotees. Whether you’re seeking spiritual growth, donating for a noble cause, or attending our educational programs, ISKCON Bhubaneswar is here to guide you on your path to peace and enlightenment.
          </p>
        </section>
      </main>
    </>
  )
}

export default Homepage