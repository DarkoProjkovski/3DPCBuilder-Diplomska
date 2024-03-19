import { useRef, useState } from "react"
import CoolerMasterMasterCaseMaker5tCanvas from "./canvas/CoolerMasterMasterCaseMaker5t"
import { Canvas, useFrame } from "@react-three/fiber"
import { useLocation, useRoute } from "wouter"
import { MeshPortalMaterial, useCursor } from "@react-three/drei"
import { easing } from "maath"
import * as THREE from 'three'



const MainView2 = ()=>{
    return(
        <Canvas 
        camera={{fov: 75, position:[0, 0, 20]}} >
            <Frame id="01" name={"CoolerMasterCaseMaker5t"} bg="#e4cdac" position={[-1.15, 0, 0]} rotation={[0, 0.5, 0]}>
                <CoolerMasterMasterCaseMaker5tCanvas/>
            </Frame>
        </Canvas>
    )
}

function Frame({id, name, bg, width = 1, height = 1.61803398875, children, ...props}){
    const portalRef = useRef()
    const [, setLocation] = useLocation()
    const [, params] = useRoute('/items/:id')
    const [hover, setHover] = useState(false)
    useCursor(hover)
    useFrame((_, delta) => easing.damp(portalRef.current, 'blend', params?.id === id ? 1 : 0, 0.2, delta))
    return(
        <group {...props}>
            <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                {name}
            </Text>
            <mesh name={id} onDoubleClick={(e) => (e.stopPropagation(), setLocation('/item/' +e.object.name))} onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
                <roundedPlaneGeometry args={[width, height, 0.1]}/>
                <MeshPortalMaterial ref={portalRef} events={params?.id === id} side={THREE.DoubleSide}>
                    <color attach="background" args={[bg]}/>
                    {children}
                </MeshPortalMaterial>
            </mesh>
        </group>
    )
}


export default MainView2