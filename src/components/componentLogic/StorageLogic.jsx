import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../../App'
import Button from './fans/Button'
import samsung870SSD from '/img/Samsung870EVO.png'
import samsung970SSD from '/img/Samsung970EVO.png'
import seagateBarraCude from '/img/SeagateBarraCude.png'

const CASE_SIZE = { L: "bigCase", M: "mediumCase", S: "smallCase" }
const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

const StorageLogic = () => {

  const { reset, setReset, cases, setcases, mb, setMB,
    lCaseBigMBSlide, lCaseMedMBSlide, lCaseSmlMBSlide,
    Samsung870EVOBIGs, setSamsung870EVOBIGs,
    Samsung970SlotsBIGSlot1, setSamsung970SlotsBIGSlot1,
    Samsung970SlotsBIGSlot2, setSamsung970SlotsBIGSlot2,
    Samsung970SlotsMED, setSamsung970SlotsMED,
    SeagateBarraCuda2TBBIGs, setSeagateBarraCuda2TBBIGs } = useContext(AnimationContext)

  const [evo870box, setEVO870box] = useState(false)
  const [evo970box, setEVO970box] = useState(false)
  const [SeagateBarraCudabox, setSeagateBarraCudabox] = useState(false)

  const [numSSD, setNumSSD] = useState(0)
  const [numHDD, setNumHDD] = useState(0)


  // const changeStateEVO = (next) => {
  //   setSamsung870EVOBIGs(Samsung870EVOBIGs.map(ssd => {
  //     return { ...ssd, slot: next }
  //   }))
  // }

  // const changeStateBarraCude = (next) => {
  //   setSeagateBarraCuda2TBBIGs(SeagateBarraCuda2TBBIGs.map(hdd => {
  //     return { ...hdd, slot: next }
  //   }))
  // }

  useEffect(() => {
    if(cases == CASE_SIZE.L){
      setNumSSD(11)
      setNumHDD(7)
    }else if(cases == CASE_SIZE.M || cases == CASE_SIZE.S){
      setNumSSD(2)
      setNumHDD(2)
    }
    if (reset > 1) {
      setEVO870box(false)
      setEVO970box(false)
      setSeagateBarraCudabox(false)
    }
    if (SeagateBarraCudabox) {
      setSeagateBarraCuda2TBBIGs(SeagateBarraCuda2TBBIGs.map(hdd => {
        if (hdd.slot == true) {
          return { ...hdd, slot: false }
        } else {
          return hdd
        }
      }))
    }
    if (evo870box) {
      setSamsung870EVOBIGs(Samsung870EVOBIGs.map(ssd => {
        if (ssd.slot == true) {
          return { ...ssd, slot: false }
        } else {
          return ssd
        }
      }))
    }
  }, [evo870box, evo970box, SeagateBarraCudabox, reset])


  const onSamsung870EVO = (prop) => {
    setEVO870box(!evo870box)
  }

  const onSamsung970EVOPlus = () => {
    setEVO970box(!evo970box)
    if (Samsung970SlotsBIGSlot1 == true || Samsung970SlotsBIGSlot2 == true || Samsung970SlotsMED == true) {
      setSamsung970SlotsBIGSlot1(false)
      setSamsung970SlotsBIGSlot2(false)
      setSamsung970SlotsMED(false)
    }
  }
  const onSamsung970EVOPlusBIGSlot1 = () => {
    if (cases !== "" && lCaseBigMBSlide == true)
      setSamsung970SlotsBIGSlot1(!Samsung970SlotsBIGSlot1)
    else
      console.log("This SSD is only compatible with big motherboard")
  }
  const onSamsung970EVOPlusBIGSlot2 = () => {
    if (cases !== "" && lCaseBigMBSlide == true)
      setSamsung970SlotsBIGSlot2(!Samsung970SlotsBIGSlot2)
    else
      console.log("This SSD is only compatible with big motherboard")
  }
  const onSamsung970EVOPlusMED = () => {
    if (cases !== "" && lCaseMedMBSlide == true)
      setSamsung970SlotsMED(!Samsung970SlotsMED)
    else
      console.log("This SSD is only compatible with medium motherboard")
  }

  const onSeagateBarraCuda2TB = () => {
    setSeagateBarraCudabox(!SeagateBarraCudabox)
  }

  return (
    <>
      <div style={{
        backgroundImage: `url(${samsung870SSD})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className={`width33  ${(evo870box == true && mb !== "") ? "box-active" : "box-not-active"}`} >
        <div style={{ height: "inherit" }}>
          <div style={{ height: "50%" }} onClick={onSamsung870EVO}>
            {/* <Samsung870EVOCanvas /> */}
          </div>
          <div className={(evo870box && mb !== "") ? "visible" : "hidden"}>
            <Button objects={Samsung870EVOBIGs} size={"A"} setObjects={setSamsung870EVOBIGs}  num={numSSD}/>
          </div>
        </div>
      </div>

      <div style={{
        backgroundImage: `url(${samsung970SSD})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className='width33'>
        <div id='box' onClick={onSamsung970EVOPlus} className={(evo970box == true && mb !== "") ? "box-active" : "box-not-active"}>
          <div>Samsung970EVOPlus</div>
          {/* <Samsung970EVOPlusCanvas /> */}
        </div>
        <div className={(evo970box && mb !== "") ? "visible" : "hidden"}>
          <button id='slot1' onClick={onSamsung970EVOPlusBIGSlot1}>Slot1</button>
          <button id='slot2' onClick={onSamsung970EVOPlusBIGSlot2}>Slot2</button>
          <button id='slot3' onClick={onSamsung970EVOPlusMED}>Slot3</button>
        </div>
      </div>
      <div style={{
        backgroundImage: `url(${seagateBarraCude})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className='width33'>
        <div onClick={onSeagateBarraCuda2TB} className={(SeagateBarraCudabox == true && mb !== "") ? "box-active" : "box-not-active"}>
          <div>SeagateBarraCuda2TB</div>
          {/* <SeagateBarraCuda2TBCanvas /> */}
        </div>
        <div className={(SeagateBarraCudabox && mb !== "") ? "visible" : "hidden"}>
          <Button objects={SeagateBarraCuda2TBBIGs} size={"A"} setObjects={setSeagateBarraCuda2TBBIGs} num={numHDD}/>
        </div>
      </div>
    </>
  )
}

export default StorageLogic
