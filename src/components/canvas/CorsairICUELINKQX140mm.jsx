/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 CorsairICUELINKQX140mm.glb 
*/

import React, { useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const CorsairICUELINKQX140mm=(props)=> {
  const { nodes, materials } = useGLTF('/pc_parts/cooling/CorsairICUELINKQX140mm.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Vert008.geometry} material={materials.darkgrey} />
        <mesh geometry={nodes.Vert008_1.geometry} material={materials.CorsairIcon} />
      </group>
    </group>
  )
}

const CorsairICUELINKQX140mmCanvas=()=>{
  return(
    <Canvas
      camera={{fov: 10}}>
        <ambientLight intensity={2} color={"white"}/>
        <OrbitControls/>
        <CorsairICUELINKQX140mm/>
      </Canvas>
  )
}

useGLTF.preload('/pc_parts/cooling/CorsairICUELINKQX140mm.glb')

export default CorsairICUELINKQX140mmCanvas