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
            <h1 className='text-center'>Hare Krishna</h1>
            <h2 className='text-center'>Welcome to ISKCON Rourkela</h2>
            <p>
              Immerse yourself in the serene and uplifting atmosphere of ISKCON Rourkela — a sacred space where devotion, culture, and community come together. Celebrate the timeless teachings of Lord Krishna through soulful kirtans, vibrant festivals, and meaningful spiritual gatherings.
            </p>
            <p>
              Explore our temple services, participate in devotional programs, and connect with fellow seekers on the path of Bhakti. Whether you wish to grow spiritually, contribute through donations, or join our educational initiatives, ISKCON Rourkela offers a welcoming path toward inner peace and divine connection.
            </p>
          </section>
          {/* add more sections below */}
        </div>
      </main>
    </>
  )
}

export default Homepage