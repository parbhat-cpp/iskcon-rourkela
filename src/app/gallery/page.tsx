'use client'

import React, { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import ImageStack from '@/components/ImageStack'

const imagesStack1 = [
  { id: 1, img: "/gallery1.jpg" },
  { id: 2, img: "/gallery2.jpg" },
  { id: 3, img: "/gallery3.jpg" },
  { id: 4, img: "/gallery4.jpg" }
];

const imagesStack2 = [
  { id: 1, img: "/gallery5.jpg" },
  { id: 2, img: "/gallery6.jpg" },
  { id: 3, img: "/gallery7.jpg" },
  { id: 4, img: "/gallery8.jpg" }
];

const imagesStack3 = [
  { id: 1, img: "/gallery9.jpg" },
  { id: 2, img: "/gallery10.jpg" },
  { id: 3, img: "/gallery11.jpg" },
  { id: 4, img: "/gallery12.jpg" }
];

const imagesStack4 = [
  { id: 1, img: "/gallery13.jpg" },
  { id: 2, img: "/gallery14.jpg" },
  { id: 3, img: "/gallery15.jpg" },
];

function LotusModel() {
  const group = useRef(null);
  const { scene, animations } = useGLTF('/models/lotus_flower_blooming_animation.glb')
  const { actions, mixer } = useAnimations(animations, group)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]]?.reset().play()
    }
  }, [actions])

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return <primitive ref={group} object={scene} scale={isMobile ? 0.8 : 1.5} />
}

useGLTF.preload('/models/lotus_flower_blooming_animation.glb')

export default function Gallery() {
  const galleryBreakpoint = useMediaQuery({ query: '(max-width: 874px)' })

  return (
    <main className='relative bg-violet-200 overflow-hidden'>
      <div className='p-10 w-full'>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
          <ImageStack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: galleryBreakpoint ? 240 : 400, height: 250 }}
            cardsData={imagesStack1}
          />
          <ImageStack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: galleryBreakpoint ? 240 : 400, height: 250 }}
            cardsData={imagesStack2}
          />
        </div>
        <div className='h-[45vh]'>
          <Canvas camera={{ position: [0, 5, 5] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <LotusModel />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-5 place-items-center'>
          <ImageStack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: galleryBreakpoint ? 240 : 400, height: 250 }}
            cardsData={imagesStack3}
          />
          <ImageStack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: galleryBreakpoint ? 240 : 400, height: 250 }}
            cardsData={imagesStack4}
          />
        </div>
      </div>
    </main>
  )
}
