import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"



const Computers =()=>{

    const computer = useGLTF("./pc_parts/pc_cases/PC.gltf")
    console.log(computer)

    return(
        <mesh>
            <hemisphereLight intensity={1.15} groundColor='gray'/>
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}/>
            <pointLight intensity={1}/>
            <primitive
                object={computer.scene}
                scale={2}
                position={[0, -2.25, 0]}
                rotation-y={5.1}/>
        </mesh>
    )
}

const ComputersCanvas = () =>{
    return(
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1,2]}
            camera={{position: [20, 3, 5], fov: 25}}
            gl={{preserveDrawingBuffer: true}}>
                <Suspense>
                    <OrbitControls 
                        enableZoom={false}
                        maxPolarAngle={Math.PI/2}
                        minPolarAngle={Math.PI/2}
                        enablePan={false}/>
                    <Computers/>
                </Suspense>
        </Canvas>
    )
}

export default ComputersCanvas