/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 CorsairAFELITE92mm.glb 
*/

import React, { Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const CorsairAFELITE92mm=(props)=> {
  const { nodes, materials } = useGLTF('/pc_parts/cooling/CorsairAFELITE92mm.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Vert011.geometry} material={materials.darkgrey} />
        <mesh geometry={nodes.Vert011_1.geometry} material={materials.BlackFan2nd} />
      </group>
    </group>
  )
}

const CorsairAFELITE92mmCanvas=()=>{
  return(
    <Canvas
      camera={{fov: 10}}>
        <Suspense>
          <ambientLight intensity={2} color={"white"}/>
          <OrbitControls/>
          <CorsairAFELITE92mm/>
        </Suspense>
      </Canvas>
  )
}

useGLTF.preload('/pc_parts/cooling/CorsairAFELITE92mm.glb')

export default CorsairAFELITE92mmCanvas