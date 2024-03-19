import { Canvas, useFrame } from "@react-three/fiber"
import CoolerMasterCaseMaker5t from "./canvas/CoolerMasterCaseMaker5t"
import PhanteksEclipseP300Midtower from "./canvas/PhanteksEclipseP300Midtower"
import CoolerMasterNR200MiniITX from "./canvas/CoolerMasterNR200MiniITXNEW"
import { useTexture, MeshPortalMaterial, RoundedBox, CameraControls, Text } from "@react-three/drei"
import * as THREE from "three"
import { useState, useRef, useEffect, useContext } from "react"
import { easing } from "maath"
import CASE_SIZE from "./const/CASE_SIZE"

import { AnimationContext } from "../App"



const Background = (props) => {
    const texture = useTexture("./img/1.png")
    const [active, setActive] = useState(false)
    const [leftButton, setleftButton] = useState(0)
    const meshPortalMaterialRef = useRef()
    const [active2, setActive2] = useState(false)
    const [active3, setActive3] = useState(false)
    const [zoom, setZoom] = useState(false)
    const meshPortalMaterialRef2 = useRef()
    const meshPortalMaterialRef3 = useRef()
    const textRef = useRef()
    const cameraControlsRef = useRef()
    const box = useRef()
    const [boxPosition, setBoxPosition] = useState([0, 0, 0])
    const [boxPosition2, setBoxPosition2] = useState([-5, 0, 2.5])
    const [boxRotation2, setBoxRotation2] = useState(1)
    const [boxPosition3, setBoxPosition3] = useState([5, 0, 2.5])
    const [boxRotation3, setBoxRotation3] = useState(5.1)

    const { smlCaseSide1Slide, setSmlCaseSide1Slide,
        medCaseSide1Slide, setMedCaseSide1Slide,
        bigCaseSide1Slide, setBigCaseSide1Slide } = useContext(AnimationContext)

    const { cases, setCases, reset, setReset } = useContext(AnimationContext)

    useFrame((_, delta) => {
        easing.damp(meshPortalMaterialRef.current, "blend", active ? 1 : 0, 0.2, delta)
        easing.damp(meshPortalMaterialRef2.current, "blend", active2 ? 1 : 0, 0.2, delta)
        easing.damp(meshPortalMaterialRef3.current, "blend", active3 ? 1 : 0, 0.2, delta)
        easing.damp(textRef.current, "blend", zoom ? 1 : 0, 0.5, delta)
    })

    useEffect(() => {
        if (active) {
            cameraControlsRef.current.setLookAt(0, 0, 4, 0, 0, 0, true)
        } else if (active2) {
            cameraControlsRef.current.setPosition(0, 0, 5, true)
            cameraControlsRef.current.setTarget(0, 0, 0, true)
            setBoxPosition([10, 10, 10])
            setBoxPosition3([10, 10, 10])
            setBoxPosition2([0, 0, 0])
            setBoxRotation2(0)
        }
        else if (active3) {
            cameraControlsRef.current.setPosition(0, 0, 2, true)
            cameraControlsRef.current.setTarget(0, 0, 0, true)
            setBoxPosition([10, 10, 10])
            setBoxPosition2([10, 10, 10])
            setBoxPosition3([0, 0, 0])
            setBoxRotation3(0)
        } else if (zoom) {
            cameraControlsRef.current.setLookAt(0, 0, 11, 0, 0, 0, true)
            setBoxPosition3([5, 0, 2.5])
            setBoxRotation3(5.1)
            setBoxPosition2([-5, 0, 2.5])
            setBoxRotation2(1)
            setBoxPosition([0, 0, 0])
        } else {
            cameraControlsRef.current.setLookAt(0, 0, 50, 0, 0, 0, true)
            setBoxPosition3([5, 0, 2.5])
            setBoxRotation3(5.1)
            setBoxPosition2([-5, 0, 2.5])
            setBoxRotation2(1)
            setBoxPosition([0, 0, 0])
        }
    }, [active, active2, active3, zoom, reset])

    const doubleClickHandler = () => {
        setActive(!active)

        setleftButton(!leftButton)
        if (!active)
            setCases(CASE_SIZE.L)
        else
            setCases("")
    }

    const doubleClickHandler2 = () => {
        setActive2(!active2)

        setleftButton(!leftButton)
        if (!active2)
            setCases(CASE_SIZE.M)
        else
            setCases("")
    }

    const doubleClickHandler3 = () => {
        setActive3(!active3)

        setleftButton(!leftButton)
        if (!active3)
            setCases(CASE_SIZE.S)
        else
            setCases("")
    }

    const zoomIn = () => {
        setZoom(!zoom)
    }

    const onSmlCaseSide1Slide = () => {
        setSmlCaseSide1Slide(!smlCaseSide1Slide)
    }

    const onMedCaseSide1Slide = () => {
        setMedCaseSide1Slide(!medCaseSide1Slide)
    }

    const onBigCaseSide1Slide = () => {
        setBigCaseSide1Slide(!bigCaseSide1Slide)
    }

    const handleReset = () => {
        if (reset === 0 || reset === 1) {
            setReset(reset + 1)
        } else {
            setReset(0)
        }

    }


    return (
        <>
            <CameraControls ref={cameraControlsRef} mouseButtons={{ left: leftButton }} />
            <Text position={[0, 0, 40]}>Welcome to 3D PC Builder</Text>
            <Text ref={textRef} onClick={zoomIn} position={[0, -1, 40]}>click here to continue</Text>
            <Text onClick={zoomIn} position={[-7.5, 7.5, 0]}>Back</Text>
            <RoundedBox className="first" ref={box} args={[4, 5, 0.01]} radius={0.5} position={boxPosition2} rotation-y={boxRotation2}
                onDoubleClick={event => { doubleClickHandler2(); onMedCaseSide1Slide(); handleReset() }}>
                <MeshPortalMaterial ref={meshPortalMaterialRef2}>
                    <ambientLight intensity={2} color={"white"} />
                    <Text position={[0, 2, 0]}>This</Text>
                    <PhanteksEclipseP300Midtower rotation={[0, 0, 0]} position-y={0} doubleClickHandler={doubleClickHandler2} />
                    <mesh>
                        <sphereGeometry args={[10, 64, 64]} />
                        <meshBasicMaterial map={texture} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
            <RoundedBox args={[4, 5, 0.01]} position={boxPosition} radius={0.5}
                onDoubleClick={event => { doubleClickHandler(), onBigCaseSide1Slide(); handleReset() }}>
                <Text position={[0, 2, 0]}>Not that</Text>
                <MeshPortalMaterial ref={meshPortalMaterialRef}>
                    <ambientLight intensity={2} color={"white"} />
                    <CoolerMasterCaseMaker5t position-y={-1.5} />
                    <mesh>
                        <sphereGeometry args={[5, 64, 64]} />
                        <meshBasicMaterial map={texture} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
            <RoundedBox args={[4, 5, 0.01]} position={boxPosition3} rotation-y={boxRotation3} radius={0.5}
                onDoubleClick={event => { doubleClickHandler3(); onSmlCaseSide1Slide(); handleReset() }}>
                <Text position={[0, 2, 0]}>That</Text>
                <MeshPortalMaterial ref={meshPortalMaterialRef3}>
                    <ambientLight intensity={2} color={"white"} />
                    <CoolerMasterNR200MiniITX />
                    <mesh>
                        <sphereGeometry args={[10, 64, 64]} />
                        <meshBasicMaterial map={texture} side={THREE.BackSide} />
                    </mesh>
                </MeshPortalMaterial>
            </RoundedBox>
        </>

    )
}

const MainView = (props) => {

    return (
        <Canvas camera={{ far: 20 }} className="main-view">
            <ambientLight intensity={2} />
            <Background />
        </Canvas>
    )
}

export default MainView