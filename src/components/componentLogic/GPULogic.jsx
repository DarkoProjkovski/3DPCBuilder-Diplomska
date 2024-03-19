import React, { useContext } from 'react'
import { AnimationContext } from '../../App'
import rtx3070 from '/img/NvidiaGeForceRTX3070.png'
import rtx3080 from '/img/NvidiaGeForceRTX3080.png'
import rtx3090 from '/img/NvidiaGeForceRTX3090.png'

const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

const GPULogic = () => {

    const {
        cases, setCases,
        mb, setMB,
        lCaseBigMBSlide, setLCaseBigMBSlide,
        lCaseMedMBSlide, setLCaseMedMBSlide,
        lCaseSmlMBSlide, setLCaseSmlMBSlide,
        RTX3070BIGMBtop, setRTX3070BIGMBtop,
        RTX3070BIGMBbot, setRTX3070BIGMBbot,
        RTX3080BIGMBtop, setRTX3080BIGMBtop,
        RTX3080BIGMBbot, setRTX3080BIGMBbot,
        RTX3090BIGMBtop, setRTX3090BIGMBtop,
        RTX3090BIGMBbot, setRTX3090BIGMBbot,
        RTX3070MEDMB, setRTX3070MEDMB,
        RTX3080MEDMB, setRTX3080MEDMB,
        RTX3090MEDMB, setRTX3090MEDMB,
        RTX3070SMLMB, setRTX3070SMLMB,
        RTX3080SMLMB, setRTX3080SMLMB,
        RTX3090SMLMB, setRTX3090SMLMB
    } = useContext(AnimationContext);

    const onRTX3070 = (e) => {
        if (cases !== "" && mb == MB_SIZE.L) {
            if (lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) {
                if (RTX3080BIGMBtop == false && RTX3080BIGMBbot == false && RTX3090BIGMBtop == false && RTX3090BIGMBbot == false) {
                    if (RTX3070BIGMBbot == true && RTX3070BIGMBtop == false)
                        setRTX3070BIGMBbot(!RTX3070BIGMBbot)
                    else
                        setRTX3070BIGMBtop(!RTX3070BIGMBtop)
                } else {
                    console.log("Please deselect already selected GPU")
                }
            } else {
                console.log("Please select a motherboard first")
            }

        }
        if (cases !== "" && mb == MB_SIZE.M) {
            if (RTX3080MEDMB == false && RTX3090MEDMB == false) {
                setRTX3070MEDMB(!RTX3070MEDMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            if (RTX3080SMLMB == false && RTX3090SMLMB == false) {
                setRTX3070SMLMB(!RTX3070SMLMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
    }
    const onRTX3080 = (e) => {
        if (cases !== "" && mb == MB_SIZE.L) {
            if (RTX3070BIGMBtop == false && RTX3070BIGMBbot == false && RTX3090BIGMBtop == false && RTX3090BIGMBbot == false) {
                if (RTX3080BIGMBbot == true && RTX3080BIGMBtop == false)
                    setRTX3080BIGMBbot(!RTX3080BIGMBbot)
                else
                    setRTX3080BIGMBtop(!RTX3080BIGMBtop)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            if (RTX3070MEDMB == false && RTX3090MEDMB == false) {
                setRTX3080MEDMB(!RTX3080MEDMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            if (RTX3070SMLMB == false && RTX3090SMLMB == false) {
                setRTX3080SMLMB(!RTX3080SMLMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
    }
    const onRTX3090 = (e) => {
        if (cases !== "" && mb == MB_SIZE.L) {
            if (RTX3080BIGMBtop == false && RTX3080BIGMBbot == false && RTX3070BIGMBtop == false && RTX3070BIGMBbot == false) {
                if (RTX3090BIGMBbot == true && RTX3090BIGMBtop == false)
                    setRTX3090BIGMBbot(!RTX3090BIGMBbot)
                else
                    setRTX3090BIGMBtop(!RTX3090BIGMBtop)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            if (RTX3080MEDMB == false && RTX3070MEDMB == false) {
                setRTX3090MEDMB(!RTX3090MEDMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            if (RTX3080SMLMB == false && RTX3070SMLMB == false) {
                setRTX3090SMLMB(!RTX3090SMLMB)
            } else {
                console.log("Please deselect already selected GPU")
            }
        }
    }
    const toggleRTX3070Slot = () => {
        if (RTX3070BIGMBtop == true && RTX3070BIGMBbot == false) {
            setRTX3070BIGMBbot(!RTX3070BIGMBbot)
            setRTX3070BIGMBtop(!RTX3070BIGMBtop)
        }
        if (RTX3070BIGMBtop == false && RTX3070BIGMBbot == true) {
            setRTX3070BIGMBbot(!RTX3070BIGMBbot)
            setRTX3070BIGMBtop(!RTX3070BIGMBtop)
        }
    }
    const toggleRTX3080Slot = () => {
        if (RTX3080BIGMBtop == true && RTX3080BIGMBbot == false) {
            setRTX3080BIGMBbot(!RTX3080BIGMBbot)
            setRTX3080BIGMBtop(!RTX3080BIGMBtop)
        }
        if (RTX3080BIGMBtop == false && RTX3080BIGMBbot == true) {
            setRTX3080BIGMBbot(!RTX3080BIGMBbot)
            setRTX3080BIGMBtop(!RTX3080BIGMBtop)
        }
    }
    const toggleRTX3090Slot = () => {
        if (RTX3090BIGMBtop == true && RTX3090BIGMBbot == false) {
            setRTX3090BIGMBbot(!RTX3090BIGMBbot)
            setRTX3090BIGMBtop(!RTX3090BIGMBtop)
        }
        if (RTX3090BIGMBtop == false && RTX3090BIGMBbot == true) {
            setRTX3090BIGMBbot(!RTX3090BIGMBbot)
            setRTX3090BIGMBtop(!RTX3090BIGMBtop)
        }
    }

    return (
        <>
            <div style={{
                backgroundImage: `url(${rtx3070})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div onClick={onRTX3070} className={(RTX3070BIGMBtop == true || RTX3070BIGMBbot == true || RTX3070MEDMB == true || RTX3070SMLMB == true) ? 'box-active' : 'box-not-active'}>
                    <div>RTX3070</div>
                    {/* <RTX3070Canvas/> */}
                </div>
                <button onClick={toggleRTX3070Slot} className={(lCaseBigMBSlide == true && (RTX3070BIGMBtop == true || RTX3070BIGMBbot == true)) ? 'visible' : 'hidden'}>{(RTX3070BIGMBtop) ? 'Bottom slot' : 'Top slot'}</button>
            </div>
            <div style={{
                backgroundImage: `url(${rtx3080})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div onClick={onRTX3080} className={(RTX3080BIGMBtop == true || RTX3080BIGMBbot == true || RTX3080MEDMB == true || RTX3080SMLMB == true) ? 'box-active' : 'box-not-active'}>
                    <div>RTX3080</div>
                    {/* <NvidiaGeForceRTX3080Canvas/> */}
                </div>
                <button onClick={toggleRTX3080Slot} className={(lCaseBigMBSlide == true && (RTX3080BIGMBtop == true || RTX3080BIGMBbot == true)) ? 'visible' : 'hidden'}>{(RTX3080BIGMBtop) ? 'Bottom slot' : 'Top slot'}</button>
            </div>
            <div style={{
                backgroundImage: `url(${rtx3090})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div onClick={onRTX3090} className={(RTX3090BIGMBtop == true || RTX3090BIGMBbot == true || RTX3090MEDMB == true || RTX3090SMLMB == true) ? 'box-active' : 'box-not-active'}>
                    <div>RTX3090</div>
                    {/* <RTX3090Canvas/> */}
                </div>
                <button onClick={toggleRTX3090Slot} className={(lCaseBigMBSlide == true && (RTX3090BIGMBtop == true || RTX3090BIGMBbot == true)) ? 'visible' : 'hidden'}>{(RTX3090BIGMBtop) ? 'Bottom slot' : 'Top slot'}</button>
            </div>
        </>
    )
}

export default GPULogic
