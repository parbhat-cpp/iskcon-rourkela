'use client'

import React, { useEffect, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, useAnimations } from '@react-three/drei'

function LotusModel() {
  const group = useRef(null);
  const { scene, animations } = useGLTF('/models/lotus_flower_blooming_animation.glb')
  const { actions, mixer } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && actions[Object.keys(actions)[0]]) {
      actions[Object.keys(actions)[0]]?.reset().play()
    }
  }, [actions])

  useFrame((state, delta) => {
    mixer?.update(delta)
  })

  return <primitive ref={group} object={scene} scale={1.5} />
}

useGLTF.preload('/models/lotus_flower_blooming_animation.glb')

export default function Gallery() {
  return (
    <div style={{ height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[0, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <LotusModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
