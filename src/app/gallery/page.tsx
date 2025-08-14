'use client'

import React, { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'

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
  return (
    <main className='relative bg-violet-200 overflow-hidden'>
      <div className='h-[60dvh]'>
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <LotusModel />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
      <div className='text-center py-2 bg-yellow-500 h-36'>
        <h1>COMMING SOON</h1>
      </div>
      <div className='absolute md:-bottom-62 md:-left-62 -bottom-31 -left-31'>
        <Image src={'/konark-wheel.png'} width={550} height={550} alt='' className='md:h-[550px] md:w-[550px] h-[250px] w-[250px]'/>
      </div>
      <div className='absolute md:-bottom-62 md:-right-62 -bottom-31 -right-31'>
        <Image src={'/konark-wheel.png'} width={550} height={550} alt='' className='md:h-[550px] md:w-[550px] h-[250px] w-[250px]'/>
      </div>
    </main>
  )
}
