import React, { useEffect, useState } from 'react'

const Button = ({ reset, objects, size, setObjects, num }) => {

    const [disabled, setDisabled] = useState(false)
    const [resets, setResets] = useState(reset)

    const changeState = (id, next) => {
        setObjects(objects.map(fan => {
            if (fan.key === id) {
                return { ...fan, slot: next }
            } else {
                return fan
            }
        }))
    }
    const getButtonText = (e) => {
        if (e.includes(size)) {
            return e.slice(0, -1)
        }
    }

    // const disabledButton = (s) => {
    //     if (s.includes("Slot1")) {
    //         setDisabled(true)
    //     }
    // }

    // const resetState = () =>{
    //     setObjects(objects.map(fan =>{
    //         return {... fan, slot: false}
    //     }))
    // }

    // useEffect(() => {
    //     console.log(resets)
    //     if(resets == true){
    //         resetState()
    //     }
    // }, [disabled, resets])

    // const buttons = []

    // for (let i = 0; i < num; i++) {
    //     buttons.push(
            
    //     )
    // }

    return (
        <>
            {objects.map((e) => (
                <button disabled={disabled} className={`${(getButtonText(e.key)) ? "visible" : "hidden"} ${(disabled) ? "button-disabled" : "button-enabled"}`}
                    id={e.key}
                    onClick={() => { changeState(e.key, !e.slot); }}>
                    {/* disabledButton(e.key) */}
                    {getButtonText(e.key)}
                </button>
            ))}
        </>
    )
}

export default Button
