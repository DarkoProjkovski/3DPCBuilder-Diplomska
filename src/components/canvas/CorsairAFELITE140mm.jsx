/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 CorsairAFELITE140mm.glb 
*/

import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const CorsairAFELITE140mm=(props)=> {
  const { nodes, materials } = useGLTF('/pc_parts/cooling/CorsairAFELITE140mm.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]} scale={1.485}>
        <mesh geometry={nodes.Vert017.geometry} material={materials.darkgrey} />
        <mesh geometry={nodes.Vert017_1.geometry} material={materials.BlackFan2nd} />
      </group>
    </group>
  )
}

const CorsairAFELITE140mmCanvas=()=>{
  return(
    <Canvas
      camera={{fov: 10}}>
        <Suspense>
          <ambientLight intensity={2} color={"white"}/>
          <OrbitControls/>
          <CorsairAFELITE140mm/>
        </Suspense>
      </Canvas>
  )
}

useGLTF.preload('/pc_parts/cooling/CorsairAFELITE140mm.glb')

export default CorsairAFELITE140mmCanvas