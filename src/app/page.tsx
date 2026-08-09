"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselItem from "@/components/Homepage/CarouselItem";
import UpcomingEventImg from "@/components/Homepage/UpcomingEventImg";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Homepage = () => {
  return (
    <>
      <main className="space-y-3">
        {/* apply for janmasthami */}
        <section className="relative flex justify-center items-center min-h-60 mt-2 overflow-hidden bg-[#fffaf0] bg-[radial-gradient(circle_at_75%_50%,rgba(255,215,120,0.45),transparent_30%),radial-gradient(circle_at_15%_20%,rgba(180,200,110,0.18),transparent_20%),radial-gradient(circle_at_50%_100%,rgba(244,204,105,0.20),transparent_40%)]">
          <div className="space-y-6 z-10">
            <div className="md:space-y-2 text-center">
              <p className="md:text-5xl text-3xl text-primary-background font-bold font-sans">
                Janmashtami 2026
              </p>
              <p className="md:text-2xl">Be a part of our spiritual journey</p>
            </div>
            <span className="flex items-center gap-3 bg-primary-background md:py-3 py-2 md:px-6 px-4 rounded-md text-gold w-max mx-auto">
              <Link
                href={"https://forms.gle/9Z1473YfyqeXUFXg7"}
                className="font-semibold self-center"
              >
                APPLY NOW
              </Link>
              <FaArrowRightLong />
            </span>
          </div>
          <Image
            src="/leaves.png"
            alt="ISKCON LEAVES"
            className="absolute -top-12 -left-10 sm:h-[175px] h-[125px] w-auto z-0"
            height={1000}
            width={1000}
          />
          <Image
            src="/leaves.png"
            alt="ISKCON LEAVES"
            className="absolute -bottom-14 left-10 md:h-[175px] h-[125px] w-auto -rotate-60 overflow-clip scale-[225%] opacity-90 z-0"
            height={1000}
            width={1000}
          />
          <Image
            src="/temple.png"
            alt="ISKCON TEMPLE"
            className="absolute right-0 bottom-0 h-auto lg:w-[350px] sm:w-[225px] w-[175px] z-0"
            height={1000}
            width={1000}
          />
        </section>
        {/* Hero section */}
        <Carousel
          infiniteLoop
          autoPlay
          stopOnHover={false}
          className="md:w-[75vw] w-full mx-auto"
        >
          <CarouselItem image={"/home.jpg"} alt={"ISKCON HERO IMAGE"} />
          <CarouselItem image={"/home1.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home2.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home3.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home4.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home5.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home6.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home7.jpg"} alt={"Janmasthami 2025"} />
          <CarouselItem image={"/home8.jpg"} alt={"Janmasthami 2025"} />
        </Carousel>
        <div className="space-y-5">
          <section className="w-[80vw] flex justify-center flex-col mx-auto">
            <h1 className="text-center">Hare Krishna</h1>
            <h2 className="text-center">Welcome to ISKCON Rourkela</h2>
            <p>
              Immerse yourself in the serene and uplifting atmosphere of ISKCON
              Rourkela — a sacred space where devotion, culture, and community
              come together. Celebrate the timeless teachings of Lord Krishna
              through soulful kirtans, vibrant festivals, and meaningful
              spiritual gatherings.
            </p>
            <p>
              Explore our temple services, participate in devotional programs,
              and connect with fellow seekers on the path of Bhakti. Whether you
              wish to grow spiritually, contribute through donations, or join
              our educational initiatives, ISKCON Rourkela offers a welcoming
              path toward inner peace and divine connection.
            </p>
          </section>
          <section className="space-y-3 bg-accent pb-5">
            <div className="w-36 h-2 bg-black mx-auto"></div>
            <h2 className="text-center">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 place-items-center w-[80vw] mx-auto">
              <UpcomingEventImg
                src="/jan-2026.jpeg"
                alt="Radhastami ISKCON Rourkela"
              />
              <UpcomingEventImg
                src="/jan-schedule.jpeg"
                alt="Radhastami ISKCON Rourkela"
              />
            </div>
          </section>
          {/* add more sections below */}
        </div>
      </main>
    </>
  );
};

export default Homepage;
