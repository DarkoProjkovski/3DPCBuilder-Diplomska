/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 CorsairAFELITE120mm.glb 
*/

import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const CorsairAFELITE120mm=(props)=> {
  const { nodes, materials } = useGLTF('/pc_parts/cooling/CorsairAFELITE120mm.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]} scale={1.271}>
        <mesh geometry={nodes.Vert016.geometry} material={materials.darkgrey} />
        <mesh geometry={nodes.Vert016_1.geometry} material={materials.BlackFan2nd} />
      </group>
    </group>
  )
}

const CorsairAFELITE120mmCanvas=()=>{
  return(
    <Canvas
      camera={{fov: 10}}>
        <Suspense>
          <ambientLight intensity={2} color={"white"}/>
          <OrbitControls/>
          <CorsairAFELITE120mm/>
        </Suspense>
      </Canvas>
  )
}

useGLTF.preload('/pc_parts/cooling/CorsairAFELITE120mm.glb')

export default CorsairAFELITE120mmCanvas