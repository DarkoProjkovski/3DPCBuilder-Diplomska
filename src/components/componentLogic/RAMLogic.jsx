import React, { useContext, useEffect, useRef, useState } from 'react'
import { AnimationContext } from '../../App'
import kfb from '/img/KingstoneFuryBeastCL18DDR48GB.png'
import hp from '/img/DIMM16BGDDR4.png'
import vengence from '/img/CorsairVengenceDDR516GB.png'

const CASE_SIZE = { L: "bigCase", M: "mediumCase", S: "smallCase" }
const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

const RAMLogic = () => {
    const {
        cases, mb, setCases, setMB, lCaseBigMBSlide, lCaseMedMBSlide, lCaseSmlMBSlide,
        KFBeast16BGRAMBIGMBslot1, KFBeast16BGRAMBIGMBslot2, KFBeast16BGRAMBIGMBslot3, KFBeast16BGRAMBIGMBslot4,
        KFBeast16BGRAMMEDMBslot1, KFBeast16BGRAMMEDMBslot2, KFBeast16BGRAMMEDMBslot3, KFBeast16BGRAMMEDMBslot4,
        KFBeast16BGRAMSMLMBslot1, KFBeast16BGRAMSMLMBslot2,
        HPV8GBRAMBIGMBslot1, HPV8GBRAMBIGMBslot2, HPV8GBRAMBIGMBslot3, HPV8GBRAMBIGMBslot4,
        HPV8GBRAMMEDMBslot1, HPV8GBRAMMEDMBslot2, HPV8GBRAMMEDMBslot3, HPV8GBRAMMEDMBslot4,
        HPV8GBRAMSMLMBslot1, HPV8GBRAMSMLMBslot2,
        setKFBeast16BGRAMBIGMBslot1, setKFBeast16BGRAMBIGMBslot2, setKFBeast16BGRAMBIGMBslot3, setKFBeast16BGRAMBIGMBslot4,
        setKFBeast16BGRAMMEDMBslot1, setKFBeast16BGRAMMEDMBslot2, setKFBeast16BGRAMMEDMBslot3, setKFBeast16BGRAMMEDMBslot4,
        setKFBeast16BGRAMSMLMBslot1, setKFBeast16BGRAMSMLMBslot2,
        setHPV8GBRAMBIGMBslot1, setHPV8GBRAMBIGMBslot2, setHPV8GBRAMBIGMBslot3, setHPV8GBRAMBIGMBslot4,
        setHPV8GBRAMMEDMBslot1, setHPV8GBRAMMEDMBslot2, setHPV8GBRAMMEDMBslot3, setHPV8GBRAMMEDMBslot4,
        setHPV8GBRAMSMLMBslot1, setHPV8GBRAMSMLMBslot2, beast8GBRam, setbeast8GBRam, HP16BGRam, setHP16BGRam
    } = useContext(AnimationContext);

    const [kSlot1, setKslot1] = useState(false)
    const [kSlot2, setKslot2] = useState(false)
    const [kSlot3, setKslot3] = useState(false)
    const [kSlot4, setKslot4] = useState(false)

    const [vSlot1, setVslot1] = useState(false)
    const [vSlot2, setVslot2] = useState(false)
    const [vSlot3, setVslot3] = useState(false)
    const [vSlot4, setVslot4] = useState(false)

    const onKFBeast16BGRAM = () => {
        if (cases !== "" && mb !== "") {
            setbeast8GBRam(!beast8GBRam)
            if (KFBeast16BGRAMBIGMBslot1 == true)
                setKFBeast16BGRAMBIGMBslot1(false)
            if (KFBeast16BGRAMBIGMBslot2 == true)
                setKFBeast16BGRAMBIGMBslot2(false)
            if (KFBeast16BGRAMBIGMBslot3 == true)
                setKFBeast16BGRAMBIGMBslot3(false)
            if (KFBeast16BGRAMBIGMBslot4 == true)
                setKFBeast16BGRAMBIGMBslot4(false)

        }
    }

    const onHPV8GBRAM = () => {
        if (cases !== "" && mb !== "") {
            setHP16BGRam(!HP16BGRam)
            if (HPV8GBRAMBIGMBslot1 == true)
                setHPV8GBRAMBIGMBslot1(false)
            if (HPV8GBRAMBIGMBslot2 == true)
                setHPV8GBRAMBIGMBslot2(false)
            if (HPV8GBRAMBIGMBslot3 == true)
                setHPV8GBRAMBIGMBslot3(false)
            if (HPV8GBRAMBIGMBslot4 == true)
                setHPV8GBRAMBIGMBslot4(false)
        }
    }

    useEffect(() => {
        if (KFBeast16BGRAMBIGMBslot1 == true || KFBeast16BGRAMMEDMBslot1 == true || KFBeast16BGRAMSMLMBslot1 == true)
            setKslot1(true)
        else
            setKslot1(false)
        if (KFBeast16BGRAMBIGMBslot2 == true || KFBeast16BGRAMMEDMBslot2 == true || KFBeast16BGRAMSMLMBslot2 == true)
            setKslot2(true)
        else
            setKslot2(false)
        if (KFBeast16BGRAMBIGMBslot3 == true || KFBeast16BGRAMMEDMBslot3 == true)
            setKslot3(true)
        else
            setKslot3(false)
        if (KFBeast16BGRAMBIGMBslot4 == true || KFBeast16BGRAMMEDMBslot4 == true)
            setKslot4(true)
        else
            setKslot4(false)
        if (HPV8GBRAMBIGMBslot1 == true || HPV8GBRAMMEDMBslot1 == true || HPV8GBRAMSMLMBslot1 == true)
            setVslot1(true)
        else
            setVslot1(false)
        if (HPV8GBRAMBIGMBslot2 == true || HPV8GBRAMMEDMBslot2 == true || HPV8GBRAMSMLMBslot2 == true)
            setVslot2(true)
        else
            setVslot2(false)
        if (HPV8GBRAMBIGMBslot3 == true || HPV8GBRAMMEDMBslot3 == true)
            setVslot3(true)
        else
            setVslot3(false)
        if (HPV8GBRAMBIGMBslot4 == true || HPV8GBRAMMEDMBslot4 == true)
            setVslot4(true)
        else
            setVslot4(false)
    }, [KFBeast16BGRAMBIGMBslot1, KFBeast16BGRAMBIGMBslot2, KFBeast16BGRAMBIGMBslot3, KFBeast16BGRAMBIGMBslot4,
        HPV8GBRAMBIGMBslot1, HPV8GBRAMBIGMBslot2, HPV8GBRAMBIGMBslot3, HPV8GBRAMBIGMBslot4,
        KFBeast16BGRAMMEDMBslot1, KFBeast16BGRAMMEDMBslot2, KFBeast16BGRAMMEDMBslot3, KFBeast16BGRAMMEDMBslot4,
        HPV8GBRAMMEDMBslot1, HPV8GBRAMMEDMBslot2, HPV8GBRAMMEDMBslot3, HPV8GBRAMMEDMBslot4,
        KFBeast16BGRAMSMLMBslot1, KFBeast16BGRAMSMLMBslot2, HPV8GBRAMSMLMBslot1, HPV8GBRAMSMLMBslot2])



    const onKRAMslot1 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setKFBeast16BGRAMBIGMBslot1(!KFBeast16BGRAMBIGMBslot1)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setKFBeast16BGRAMMEDMBslot1(!KFBeast16BGRAMMEDMBslot1)
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            setKFBeast16BGRAMSMLMBslot1(!KFBeast16BGRAMSMLMBslot1)
        }
    }

    const onKRAMslot2 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setKFBeast16BGRAMBIGMBslot2(!KFBeast16BGRAMBIGMBslot2)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setKFBeast16BGRAMMEDMBslot2(!KFBeast16BGRAMMEDMBslot2)
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            setKFBeast16BGRAMSMLMBslot2(!KFBeast16BGRAMSMLMBslot2)
        }
    }

    const onKRAMslot3 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setKFBeast16BGRAMBIGMBslot3(!KFBeast16BGRAMBIGMBslot3)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setKFBeast16BGRAMMEDMBslot3(!KFBeast16BGRAMMEDMBslot3)
        }
    }

    const onKRAMslot4 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setKFBeast16BGRAMBIGMBslot4(!KFBeast16BGRAMBIGMBslot4)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setKFBeast16BGRAMMEDMBslot4(!KFBeast16BGRAMMEDMBslot4)
        }
    }

    const onVRAMslot1 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setHPV8GBRAMBIGMBslot1(!HPV8GBRAMBIGMBslot1)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setHPV8GBRAMMEDMBslot1(!HPV8GBRAMMEDMBslot1)
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            setHPV8GBRAMSMLMBslot1(!HPV8GBRAMSMLMBslot1)
        }
    }

    const onVRAMslot2 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setHPV8GBRAMBIGMBslot2(!HPV8GBRAMBIGMBslot2)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setHPV8GBRAMMEDMBslot2(!HPV8GBRAMMEDMBslot2)
        }
        if (cases !== "" && mb == MB_SIZE.S) {
            setHPV8GBRAMSMLMBslot2(!HPV8GBRAMSMLMBslot2)
        }
    }

    const onVRAMslot3 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setHPV8GBRAMBIGMBslot3(!HPV8GBRAMBIGMBslot3)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setHPV8GBRAMMEDMBslot3(!HPV8GBRAMMEDMBslot3)
        }
    }

    const onVRAMslot4 = () => {
        if (cases !== "" && mb == MB_SIZE.L) {
            setHPV8GBRAMBIGMBslot4(!HPV8GBRAMBIGMBslot4)
        }
        if (cases !== "" && mb == MB_SIZE.M) {
            setHPV8GBRAMMEDMBslot4(!HPV8GBRAMMEDMBslot4)
        }
    }

    return (
        <>
            <div style={{
                backgroundImage: `url(${kfb})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div onClick={onKFBeast16BGRAM} className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && beast8GBRam == true) ? 'box-active' : 'box-not-active'}>
                    {/* <KingstoneFuryBeastCanvas /> */}
                    <div>KingstoneFurybeast</div>
                </div>
                <div className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && beast8GBRam == true) ? 'visible' : 'hidden'}>
                    <button disabled={vSlot1 ? true : false} onClick={onKRAMslot1} className={(vSlot1) ? 'button-disabled' : 'button-enabled'}>Slot1</button>
                    <button disabled={vSlot2 ? true : false} onClick={onKRAMslot2} className={(vSlot2) ? 'button-disabled' : 'button-enabled'}>Slot2</button>
                    <button disabled={vSlot3 ? true : false} onClick={onKRAMslot3} className={(vSlot3) ? 'button-disabled' : 'button-enabled'}>Slot3</button>
                    <button disabled={vSlot4 ? true : false} onClick={onKRAMslot4} className={(vSlot4) ? 'button-disabled' : 'button-enabled'}>Slot4</button>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${hp})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div onClick={onHPV8GBRAM} className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && HP16BGRam == true) ? 'box-active' : 'box-not-active'}>
                    <div>HPV8GBDDR4</div>
                    {/* <HPV8GBDDR4Canvas /> */}
                </div>
                <div className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && HP16BGRam == true) ? 'visible' : 'hidden'}>
                    <button disabled={kSlot1 ? true : false} onClick={onVRAMslot1} className={(kSlot1) ? 'button-disabled' : 'button-enabled'}>Slot1</button>
                    <button disabled={kSlot2 ? true : false} onClick={onVRAMslot2} className={(kSlot2) ? 'button-disabled' : 'button-enabled'}>Slot2</button>
                    <button disabled={kSlot3 ? true : false} onClick={onVRAMslot3} className={(kSlot3) ? 'button-disabled' : 'button-enabled'}>Slot3</button>
                    <button disabled={kSlot4 ? true : false} onClick={onVRAMslot4} className={(kSlot4) ? 'button-disabled' : 'button-enabled'}>Slot4</button>
                </div>
            </div>
            <div style={{
                backgroundImage: `url(${vengence})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "center"
            }} className='width33'>
                <div className='box-not-active not-comp'>
                    {/* <CorsairVengeanceCanvas /> */}
                    <div className='not-comp-text'>NOT COMPATIBLE</div>
                </div>
            </div>

        </>
    )
}

export default RAMLogic
