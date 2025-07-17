'use client';

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '@/components/Homepage/CarouselItem';

const Homepage = () => {
  return (
    <>
      <main className='space-y-3'>
        {/* Hero section */}
        <Carousel
          infiniteLoop
          autoPlay
          stopOnHover={false}
          className='md:w-[75vw] w-full mx-auto'
        >
          <CarouselItem
            image={'/janmasthami2025.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home1.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home2.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home3.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home4.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home5.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home6.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home7.jpg'}
            alt={'Janmasthami 2025'}
          />
          <CarouselItem
            image={'/home8.jpg'}
            alt={'Janmasthami 2025'}
          />
        </Carousel>
        <div className='py-7'>
          <section className='w-[80vw] flex justify-center flex-col mx-auto'>
            <h1 className='text-center'>Welcome to ISKCON Rourkela</h1>
            <p>
              Experience divine tranquility at ISKCON Rourkela, where devotion meets culture. Join us in celebrating the teachings of Lord Krishna through our vibrant temple, kirtan, and community activities. Explore our temple services, festivals, and opportunities to connect with like-minded devotees. Whether you’re seeking spiritual growth, donating for a noble cause, or attending our educational programs, ISKCON Rourkela is here to guide you on your path to peace and enlightenment.
            </p>
          </section>
          {/* add more sections below */}
        </div>
      </main>
    </>
  )
}

export default Homepage