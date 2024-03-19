/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 KingstoneFuryBeast16gbDDR4.glb 
*/

import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const KingstoneFuryBeast16gbDDR4 =(props)=> {
  const { nodes, materials } = useGLTF('/pc_parts/ram/KingstoneFuryBeast16gbDDR4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube199.geometry} material={materials['ktc beast frontside']} />
      <mesh geometry={nodes.Cube199_1.geometry} material={materials['ktc beast backside']} />
    </group>
  )
}

const KingstoneFuryBeastCanvas = () =>{
  return(
    <Canvas
      camera={{fov: 4.5}}>
      <Suspense>
        <ambientLight intensity={2} color={"white"}/>
        <OrbitControls/>
        <KingstoneFuryBeast16gbDDR4 rotation-y={-1.57} position-y={-0.03}/>
      </Suspense>
    </Canvas>
  )
}

useGLTF.preload('/pc_parts/ram/KingstoneFuryBeast16gbDDR4.glb')

export default KingstoneFuryBeastCanvas