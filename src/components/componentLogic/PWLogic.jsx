import React, { useContext, useEffect } from 'react'
import { AnimationContext } from '../../App'
import pw1200 from '/img/CorsairHX1200PW.png'
import pw850 from '/img/CorsairHX850PW.png'
import pw550 from '/img/CorsairCX550PW.png'

const CASE_SIZE = { L: "bigCase", M: "mediumCase", S: "smallCase" }
const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

const PWLogic = () => {
    const { reset, setReset,  cases, mb, setCases, setMB,
        lCaseBigMBSlide, lCaseMedMBSlide, lCaseSmlMBSlide,
        CX550PowerunitBIG, setCX550PowerunitBIG,
        CX550PowerunitMED, setCX550PowerunitMED,
        HX850PowerunitBIG, setHX850PowerunitBIG,
        HX1200PowerunitBIG, setHX1200PowerunitBIG,
        HX850PowerunitMID, setHX850PowerunitMID,
        HX1200PowerunitMID, setHX1200PowerunitMID
    } = useContext(AnimationContext);

    useEffect(()=>{
        if(reset > 1){
            setCX550PowerunitBIG(false)
            setHX850PowerunitBIG(false)
            setHX1200PowerunitBIG(false)
        }
    },[reset])

    const onCX550Powerunit=()=>{
        if (cases !== "") {
            if(HX1200PowerunitBIG == false && HX850PowerunitBIG == false){
                setCX550PowerunitBIG(!CX550PowerunitBIG)
            }else{
                console.log("Please deselect already selected power unit")
            }
        }
    }

    const onHX850Powerunit=()=>{
        if (cases !== "") {
            if(HX1200PowerunitBIG == false && CX550PowerunitBIG == false){
                setHX850PowerunitBIG(!HX850PowerunitBIG)
            }else{
                console.log("Please deselect already selected power unit")
            }
        }
    }

    const onHX1200Powerunit=()=>{
        if (cases !== "") {
            if(HX850PowerunitBIG == false && CX550PowerunitBIG == false){
                setHX1200PowerunitBIG(!HX1200PowerunitBIG)
            }else{
                console.log("Please deselect already selected power unit")
            }
        }
    }

    return (
        <>
            <div style={{
                    backgroundImage: `url(${pw550})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }} onClick={onCX550Powerunit}  className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && CX550PowerunitBIG == true) ? 'box-active' : 'box-not-active'}>
                <div>CX550Powerunit</div>
                {/* <CX550PowerunitCanvas /> */}
            </div>
            <div style={{
                    backgroundImage: `url(${pw850})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }} onClick={onHX850Powerunit} className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && HX850PowerunitBIG == true) ? 'box-active' : 'box-not-active'}>
                <div>HX850Powerunit</div>
                {/* <HX850PowerunitBIGCanvas /> */}
            </div>
            <div style={{
                    backgroundImage: `url(${pw1200})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }} onClick={onHX1200Powerunit} className={((lCaseBigMBSlide == true || lCaseMedMBSlide == true || lCaseSmlMBSlide == true) && HX1200PowerunitBIG == true) ? 'box-active' : 'box-not-active'}>
                <div>HX1200Powerunit</div>
                {/* <HX1200PowerunitBIGCanvas /> */}
            </div>
        </>
    )
}

export default PWLogic
