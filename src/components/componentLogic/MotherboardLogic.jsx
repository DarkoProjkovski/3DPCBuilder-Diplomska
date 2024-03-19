import React, { useContext, useEffect } from 'react'
import { AnimationContext } from '../../App'
import MSIX370xPowerGaming from '/img/MSIX370xPowerGamingTitanium.png'
import AsusRogStrixB350 from '/img/AsusRogStrixB350-I.png'
import AsusEXA320MGaming from '/img/AsusEX-A320M-Gaming.png'

const CASE_SIZE = { L: "bigCase", M: "mediumCase", S: "smallCase" }
const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

const MotherboardLogic = () => {

  const {
    reset, setReset,
    cases, setCases,
    mb, setMB,
    lCaseBigMBSlide, setLCaseBigMBSlide,
    lCaseMedMBSlide, setLCaseMedMBSlide,
    lCaseSmlMBSlide, setLCaseSmlMBSlide
  } = useContext(AnimationContext);

  useEffect(()=>{
    if (reset > 1) {
      setLCaseBigMBSlide(false)
      setLCaseMedMBSlide(false)
      setLCaseSmlMBSlide(false)
    }
  },[reset])



  const onCaseBIGMB = () => {
    if (cases !== "") {
      if (lCaseMedMBSlide == false && lCaseSmlMBSlide == false) {
        setLCaseBigMBSlide(!lCaseBigMBSlide)
        setMB(MB_SIZE.L)
      } else
        console.log("Please deselect already selected motherboard")
    }

  }
  const onCaseMEDMB = () => {
    if (cases !== "") {
      if (lCaseBigMBSlide == false && lCaseSmlMBSlide == false) {
        setLCaseMedMBSlide(!lCaseMedMBSlide)
        setMB(MB_SIZE.M)
      } else
        console.log("Please deselect already selected motherboard")
    }
  }
  const onCaseSMLMB = () => {
    if (cases !== "") {
      if (lCaseMedMBSlide == false && lCaseBigMBSlide == false) {
        setLCaseSmlMBSlide(!lCaseSmlMBSlide)
        setMB(MB_SIZE.S)
      } else
        console.log("Please deselect already selected motherboard")
    }
  }

  return (
    <>
      <div style={{
        backgroundImage: `url(${MSIX370xPowerGaming})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className='width33'>
        <div className={lCaseSmlMBSlide == true ? 'box-active' : 'box-not-active'} onClick={onCaseSMLMB}>
          {/* <AsusRogStrixB350ICanvas /> */}
          <div>Small motherboard</div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${AsusEXA320MGaming})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className='width33'>
        <div className={lCaseMedMBSlide == true ? 'box-active' : 'box-not-active'} onClick={onCaseMEDMB}>
          {/* <AsusEXA320MGamingCanvas/> */}
          <div>Medium motherboard</div>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${AsusRogStrixB350})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className='width33'>
        <div className={lCaseBigMBSlide == true ? 'box-active' : 'box-not-active'} onClick={onCaseBIGMB}>
          {/* <MSIX370XPowerGamingTitatnumCanvas/> */}
          <div>Big motherboard</div>
        </div>
      </div>

    </>
  )
}

export default MotherboardLogic
