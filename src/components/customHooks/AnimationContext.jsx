import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useContext, useRef, useState } from "react";

const AnimationContext = React.createContext()
const AnimationPlay = React.createContext()

export const useAnimationsHook=()=>{
    return useContext(AnimationContext)
}

export const useAnimationsPlayHook=()=>{
    return useContext(AnimationPlay)
}

const AnimationProvider = ({ children }) =>{
    const { animations } = useGLTF('/pc_parts/pc_cases/CoolerMasterMasterCaseMaker5t.glb')
    const { actions } = useAnimations(animations)
    const [animation, setAnimation] = useState(actions)

    console.log(animation)

    const slidePanelAnimation = () =>{
        animation.SidePanelSlide.loop = 0
        animation.SidePanelSlide.repetitions = 0
        animation.SidePanelSlide.play()
        animation.SidePanelSlide.clampWhenFinished = true
        console.log("We are here")
    }

    return(
        <AnimationContext.Provider value={animation}>
            <AnimationPlay.Provider value={slidePanelAnimation}>
                {children}
            </AnimationPlay.Provider>
        </AnimationContext.Provider>
    )
}

export default AnimationProvider