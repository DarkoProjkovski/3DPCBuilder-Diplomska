import Collection from "./components/Collection"
import MainView from "./components/MainView"
import './App.scss'
import React, { useEffect, useState } from "react"

export const AnimationContext = React.createContext(false)

const CASE_SIZE = { L: "bigCase", M: "mediumCase", S: "smallCase" }
const MB_SIZE = { L: 'bigMB', M: "mediumMB", S: "smallMB" }

function App() {

  const [cases, setCases] = useState("")
  const [mb, setMB] = useState("")

  const [smlCaseSide1Slide, setSmlCaseSide1Slide] = useState(false)
  const [medCaseSide1Slide, setMedCaseSide1Slide] = useState(false)
  const [bigCaseSide1Slide, setBigCaseSide1Slide] = useState(false)

  const [lCaseBigMBSlide, setLCaseBigMBSlide] = useState(false)
  const [lCaseMedMBSlide, setLCaseMedMBSlide] = useState(false)
  const [lCaseSmlMBSlide, setLCaseSmlMBSlide] = useState(false)

  const [amdRyzen5BIGMB, setAMDRyzen5BIGMB] = useState(false)
  const [amdRyzen7BIGMB, setAMDRyzen7BIGMB] = useState(false)
  const [amdRyzen9BIGMB, setAMDRyzen95BIGMB] = useState(false)

  const [amdRyzen5MEDMB, setAMDRyzen5MEDMB] = useState(false)
  const [amdRyzen7MEDMB, setAMDRyzen7MEDMB] = useState(false)
  const [amdRyzen9MEDMB, setAMDRyzen9MEDMB] = useState(false)

  const [amdRyzen5SMLMB, setAMDRyzen5SMLMB] = useState(false)
  const [amdRyzen7SMLMB, setAMDRyzen7SMLMB] = useState(false)
  const [amdRyzen9SMLMB, setAMDRyzen9SMLMB] = useState(false)

  const [RTX3070BIGMBtop, setRTX3070BIGMBtop] = useState(false)
  const [RTX3070BIGMBbot, setRTX3070BIGMBbot] = useState(false)
  const [RTX3080BIGMBtop, setRTX3080BIGMBtop] = useState(false)
  const [RTX3080BIGMBbot, setRTX3080BIGMBbot] = useState(false)
  const [RTX3090BIGMBtop, setRTX3090BIGMBtop] = useState(false)
  const [RTX3090BIGMBbot, setRTX3090BIGMBbot] = useState(false)

  const [RTX3070MEDMB, setRTX3070MEDMB] = useState(false)
  const [RTX3080MEDMB, setRTX3080MEDMB] = useState(false)
  const [RTX3090MEDMB, setRTX3090MEDMB] = useState(false)

  const [RTX3070SMLMB, setRTX3070SMLMB] = useState(false)
  const [RTX3080SMLMB, setRTX3080SMLMB] = useState(false)
  const [RTX3090SMLMB, setRTX3090SMLMB] = useState(false)

  const [HPV8GBRAMBIGMBslot1, setHPV8GBRAMBIGMBslot1] = useState(false)
  const [HPV8GBRAMBIGMBslot2, setHPV8GBRAMBIGMBslot2] = useState(false)
  const [HPV8GBRAMBIGMBslot3, setHPV8GBRAMBIGMBslot3] = useState(false)
  const [HPV8GBRAMBIGMBslot4, setHPV8GBRAMBIGMBslot4] = useState(false)

  const [HPV8GBRAMMEDMBslot1, setHPV8GBRAMMEDMBslot1] = useState(false)
  const [HPV8GBRAMMEDMBslot2, setHPV8GBRAMMEDMBslot2] = useState(false)
  const [HPV8GBRAMMEDMBslot3, setHPV8GBRAMMEDMBslot3] = useState(false)
  const [HPV8GBRAMMEDMBslot4, setHPV8GBRAMMEDMBslot4] = useState(false)

  const [HPV8GBRAMSMLMBslot1, setHPV8GBRAMSMLMBslot1] = useState(false)
  const [HPV8GBRAMSMLMBslot2, setHPV8GBRAMSMLMBslot2] = useState(false)

  const [KFBeast16BGRAMBIGMBslot1, setKFBeast16BGRAMBIGMBslot1] = useState(false)
  const [KFBeast16BGRAMBIGMBslot2, setKFBeast16BGRAMBIGMBslot2] = useState(false)
  const [KFBeast16BGRAMBIGMBslot3, setKFBeast16BGRAMBIGMBslot3] = useState(false)
  const [KFBeast16BGRAMBIGMBslot4, setKFBeast16BGRAMBIGMBslot4] = useState(false)

  const [KFBeast16BGRAMMEDMBslot1, setKFBeast16BGRAMMEDMBslot1] = useState(false)
  const [KFBeast16BGRAMMEDMBslot2, setKFBeast16BGRAMMEDMBslot2] = useState(false)
  const [KFBeast16BGRAMMEDMBslot3, setKFBeast16BGRAMMEDMBslot3] = useState(false)
  const [KFBeast16BGRAMMEDMBslot4, setKFBeast16BGRAMMEDMBslot4] = useState(false)

  const [KFBeast16BGRAMSMLMBslot1, setKFBeast16BGRAMSMLMBslot1] = useState(false)
  const [KFBeast16BGRAMSMLMBslot2, setKFBeast16BGRAMSMLMBslot2] = useState(false)

  const [beast8GBRam, setbeast8GBRam] = useState(false)
  const [HP16BGRam, setHP16BGRam] = useState(false)

  const [CX550PowerunitBIG, setCX550PowerunitBIG] = useState(false)
  const [HX850PowerunitBIG, setHX850PowerunitBIG] = useState(false)
  const [HX1200PowerunitBIG, setHX1200PowerunitBIG] = useState(false)
  const [HX850PowerunitMID, setHX850PowerunitMID] = useState(false)
  const [HX1200PowerunitMID, setHX1200PowerunitMID] = useState(false)

  const [Samsung970SlotsBIGSlot1, setSamsung970SlotsBIGSlot1] = useState(false)
  const [Samsung970SlotsBIGSlot2, setSamsung970SlotsBIGSlot2] = useState(false)
  const [Samsung970SlotsMED, setSamsung970SlotsMED] = useState(false)

  const [reset, setReset] = useState(0)

  let samsung870SlotsBIG = []
  let seagateBarraCudaBIG = []

  for (let i = 1; i < 12; i++) {
    samsung870SlotsBIG.push({
      key: "Slot" + i + "A",
      slot: false
    })
  }

  for (let i = 1; i < 8; i++) {
    seagateBarraCudaBIG.push({
      key: "Slot" + i + "A",
      slot: false
    })
  }

  const [Samsung870EVOBIGs, setSamsung870EVOBIGs] = useState(samsung870SlotsBIG)
  const [SeagateBarraCuda2TBBIGs, setSeagateBarraCuda2TBBIGs] = useState(seagateBarraCudaBIG)

  let corsairAFSLIMBIG = []
  let corsairICUELINKQXBIG = []
  let corsairAFELITEBIG = []

  for (let i = 1; i < 3; i++) {
    corsairAFSLIMBIG.push({
      key: "Slot" + i + " 92mmA",
      slot: false
    })
    corsairAFSLIMBIG.push({
      key: "Slot" + i + " 120mmA",
      slot: false
    })
    corsairAFSLIMBIG.push({
      key: "Slot" + i + " 140mmA",
      slot: false
    })
  }

  for (let i = 1; i < 3; i++) {
    corsairICUELINKQXBIG.push({
      key: "Slot" + i + " 92mmB",
      slot: false
    })
    corsairICUELINKQXBIG.push({
      key: "Slot" + i + " 120mmB",
      slot: false
    })
    corsairICUELINKQXBIG.push({
      key: "Slot" + i + " 140mmB",
      slot: false
    })
  }

  for (let i = 1; i < 3; i++) {
    corsairAFELITEBIG.push({
      key: "Slot" + i + " 92mmC",
      slot: false
    })
    corsairAFELITEBIG.push({
      key: "Slot" + i + " 120mmC",
      slot: false
    })
    corsairAFELITEBIG.push({
      key: "Slot" + i + " 140mmC",
      slot: false
    })
  }

  const [CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs] = useState(corsairAFSLIMBIG)
  const [CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs] = useState(corsairICUELINKQXBIG)
  const [CorsairAFELITEBIGs, setCorsairAFELITEBIGs] = useState(corsairAFELITEBIG)

  // let corsairAFSLIMMED = []
  // let corsairICUELINKQXMED = []
  // let corsairAFELITEMED = []

  // for (let i = 1; i < 2; i++) {
  //   corsairAFSLIMMED.push({
  //     key: "Slot" + i + " 92mmA",
  //     slot: false
  //   })
  //   corsairAFSLIMMED.push({
  //     key: "Slot" + i + " 120mmA",
  //     slot: false
  //   })
  //   corsairAFSLIMMED.push({
  //     key: "Slot" + i + " 140mmA",
  //     slot: false
  //   })
  // }

  // for (let i = 1; i < 2; i++) {
  //   corsairICUELINKQXMED.push({
  //     key: "Slot" + i + " 92mmB",
  //     slot: false
  //   })
  //   corsairICUELINKQXMED.push({
  //     key: "Slot" + i + " 120mmB",
  //     slot: false
  //   })
  //   corsairICUELINKQXMED.push({
  //     key: "Slot" + i + " 140mmB",
  //     slot: false
  //   })
  // }

  // for (let i = 1; i < 2; i++) {
  //   corsairAFELITEMED.push({
  //     key: "Slot" + i + " 92mmC",
  //     slot: false
  //   })
  //   corsairAFELITEMED.push({
  //     key: "Slot" + i + " 120mmC",
  //     slot: false
  //   })
  //   corsairAFELITEMED.push({
  //     key: "Slot" + i + " 140mmC",
  //     slot: false
  //   })
  // }

  // const [CorsairAFSLIMMEDs, setCorsairAFSLIMMEDs] = useState(corsairAFSLIMMED)
  // const [CorsairICUELINKQXMEDs, setCorsairICUELINKQXMEDs] = useState(corsairICUELINKQXMED)
  // const [CorsairAFELITEMEDs, setCorsairAFELITEMEDs] = useState(corsairAFELITEMED)

  // let corsairAFSLIMSML = []
  // let corsairICUELINKQXSML = []
  // let corsairAFELITESML = []

  // for (let i = 1; i < 2; i++) {
  //   corsairAFSLIMSML.push({
  //     key: "Slot" + i + " 92mmA",
  //     slot: false
  //   })
  //   corsairAFSLIMSML.push({
  //     key: "Slot" + i + " 120mmA",
  //     slot: false
  //   })
  //   corsairAFSLIMSML.push({
  //     key: "Slot" + i + " 140mmA",
  //     slot: false
  //   })
  // }

  // for (let i = 1; i < 2; i++) {
  //   corsairICUELINKQXSML.push({
  //     key: "Slot" + i + " 92mmB",
  //     slot: false
  //   })
  //   corsairICUELINKQXSML.push({
  //     key: "Slot" + i + " 120mmB",
  //     slot: false
  //   })
  //   corsairICUELINKQXSML.push({
  //     key: "Slot" + i + " 140mmB",
  //     slot: false
  //   })
  // }

  // for (let i = 1; i < 2; i++) {
  //   corsairAFELITESML.push({
  //     key: "Slot" + i + " 92mmC",
  //     slot: false
  //   })
  //   corsairAFELITESML.push({
  //     key: "Slot" + i + " 120mmC",
  //     slot: false
  //   })
  //   corsairAFELITESML.push({
  //     key: "Slot" + i + " 140mmC",
  //     slot: false
  //   })
  // }

  // const [CorsairAFSLIMSMLs, setCorsairAFSLIMSMLs] = useState(corsairAFSLIMSML)
  // const [CorsairICUELINKQXSMLs, setCorsairICUELINKQXSMLs] = useState(corsairICUELINKQXSML)
  // const [CorsairAFELITESMLs, setCorsairAFELITESMLs] = useState(corsairAFELITESML)
  

  return (
    <div className={cases === "" ? 'not-mid' : 'mid'}>
      <div className={cases === "" ? 'mainView' : 'mainView-half'}>
        <AnimationContext.Provider
          value={{
            reset: reset, setReset: setReset,
            cases: cases, setCases: setCases,
            smlCaseSide1Slide: smlCaseSide1Slide, setSmlCaseSide1Slide: setSmlCaseSide1Slide,
            medCaseSide1Slide: medCaseSide1Slide, setMedCaseSide1Slide: setMedCaseSide1Slide,
            bigCaseSide1Slide: bigCaseSide1Slide, setBigCaseSide1Slide: setBigCaseSide1Slide,
            lCaseBigMBSlide: lCaseBigMBSlide, setLCaseBigMBSlide: setLCaseBigMBSlide,
            lCaseMedMBSlide: lCaseMedMBSlide, setLCaseMedMBSlide: setLCaseMedMBSlide,
            lCaseSmlMBSlide: lCaseSmlMBSlide, setLCaseSmlMBSlide: setLCaseSmlMBSlide,
            amdRyzen5BIGMB: amdRyzen5BIGMB, setAMDRyzen5BIGMB: setAMDRyzen5BIGMB,
            amdRyzen7BIGMB: amdRyzen7BIGMB, setAMDRyzen7BIGMB: setAMDRyzen7BIGMB,
            amdRyzen9BIGMB: amdRyzen9BIGMB, setAMDRyzen9BIGMB: setAMDRyzen95BIGMB,
            amdRyzen5MEDMB: amdRyzen5MEDMB, setAMDRyzen5MEDMB: setAMDRyzen5MEDMB,
            amdRyzen7MEDMB: amdRyzen7MEDMB, setAMDRyzen7MEDMB: setAMDRyzen7MEDMB,
            amdRyzen9MEDMB: amdRyzen9MEDMB, setAMDRyzen9MEDMB: setAMDRyzen9MEDMB,
            amdRyzen5SMLMB: amdRyzen5SMLMB, setAMDRyzen5SMLMB: setAMDRyzen5SMLMB,
            amdRyzen7SMLMB: amdRyzen7SMLMB, setAMDRyzen7SMLMB: setAMDRyzen7SMLMB,
            amdRyzen9SMLMB: amdRyzen9SMLMB, setAMDRyzen9SMLMB: setAMDRyzen9SMLMB,
            RTX3070BIGMBtop: RTX3070BIGMBtop, setRTX3070BIGMBtop: setRTX3070BIGMBtop,
            RTX3070BIGMBbot: RTX3070BIGMBbot, setRTX3070BIGMBbot: setRTX3070BIGMBbot,
            RTX3080BIGMBtop: RTX3080BIGMBtop, setRTX3080BIGMBtop: setRTX3080BIGMBtop,
            RTX3080BIGMBbot: RTX3080BIGMBbot, setRTX3080BIGMBbot: setRTX3080BIGMBbot,
            RTX3090BIGMBtop: RTX3090BIGMBtop, setRTX3090BIGMBtop: setRTX3090BIGMBtop,
            RTX3090BIGMBbot: RTX3090BIGMBbot, setRTX3090BIGMBbot: setRTX3090BIGMBbot,
            RTX3070MEDMB: RTX3070MEDMB, setRTX3070MEDMB: setRTX3070MEDMB,
            RTX3080MEDMB: RTX3080MEDMB, setRTX3080MEDMB: setRTX3080MEDMB,
            RTX3090MEDMB: RTX3090MEDMB, setRTX3090MEDMB: setRTX3090MEDMB,
            RTX3070SMLMB: RTX3070SMLMB, setRTX3070SMLMB: setRTX3070SMLMB,
            RTX3080SMLMB: RTX3080SMLMB, setRTX3080SMLMB: setRTX3080SMLMB,
            RTX3090SMLMB: RTX3090SMLMB, setRTX3090SMLMB: setRTX3090SMLMB,
            HPV8GBRAMBIGMBslot1: HPV8GBRAMBIGMBslot1, setHPV8GBRAMBIGMBslot1: setHPV8GBRAMBIGMBslot1,
            HPV8GBRAMBIGMBslot2: HPV8GBRAMBIGMBslot2, setHPV8GBRAMBIGMBslot2: setHPV8GBRAMBIGMBslot2,
            HPV8GBRAMBIGMBslot3: HPV8GBRAMBIGMBslot3, setHPV8GBRAMBIGMBslot3: setHPV8GBRAMBIGMBslot3,
            HPV8GBRAMBIGMBslot4: HPV8GBRAMBIGMBslot4, setHPV8GBRAMBIGMBslot4: setHPV8GBRAMBIGMBslot4,
            KFBeast16BGRAMBIGMBslot1: KFBeast16BGRAMBIGMBslot1, setKFBeast16BGRAMBIGMBslot1: setKFBeast16BGRAMBIGMBslot1,
            KFBeast16BGRAMBIGMBslot2: KFBeast16BGRAMBIGMBslot2, setKFBeast16BGRAMBIGMBslot2: setKFBeast16BGRAMBIGMBslot2,
            KFBeast16BGRAMBIGMBslot3: KFBeast16BGRAMBIGMBslot3, setKFBeast16BGRAMBIGMBslot3: setKFBeast16BGRAMBIGMBslot3,
            KFBeast16BGRAMBIGMBslot4: KFBeast16BGRAMBIGMBslot4, setKFBeast16BGRAMBIGMBslot4: setKFBeast16BGRAMBIGMBslot4,
            HPV8GBRAMMEDMBslot1: HPV8GBRAMMEDMBslot1, setHPV8GBRAMMEDMBslot1: setHPV8GBRAMMEDMBslot1,
            HPV8GBRAMMEDMBslot2: HPV8GBRAMMEDMBslot2, setHPV8GBRAMMEDMBslot2: setHPV8GBRAMMEDMBslot2,
            HPV8GBRAMMEDMBslot3: HPV8GBRAMMEDMBslot3, setHPV8GBRAMMEDMBslot3: setHPV8GBRAMMEDMBslot3,
            HPV8GBRAMMEDMBslot4: HPV8GBRAMMEDMBslot4, setHPV8GBRAMMEDMBslot4: setHPV8GBRAMMEDMBslot4,
            KFBeast16BGRAMMEDMBslot1: KFBeast16BGRAMMEDMBslot1, setKFBeast16BGRAMMEDMBslot1: setKFBeast16BGRAMMEDMBslot1,
            KFBeast16BGRAMMEDMBslot2: KFBeast16BGRAMMEDMBslot2, setKFBeast16BGRAMMEDMBslot2: setKFBeast16BGRAMMEDMBslot2,
            KFBeast16BGRAMMEDMBslot3: KFBeast16BGRAMMEDMBslot3, setKFBeast16BGRAMMEDMBslot3: setKFBeast16BGRAMMEDMBslot3,
            KFBeast16BGRAMMEDMBslot4: KFBeast16BGRAMMEDMBslot4, setKFBeast16BGRAMMEDMBslot4: setKFBeast16BGRAMMEDMBslot4,
            HPV8GBRAMSMLMBslot1: HPV8GBRAMSMLMBslot1, setHPV8GBRAMSMLMBslot1: setHPV8GBRAMSMLMBslot1,
            HPV8GBRAMSMLMBslot2: HPV8GBRAMSMLMBslot2, setHPV8GBRAMSMLMBslot2: setHPV8GBRAMSMLMBslot2,
            KFBeast16BGRAMSMLMBslot1: KFBeast16BGRAMSMLMBslot1, setKFBeast16BGRAMSMLMBslot1: setKFBeast16BGRAMSMLMBslot1,
            KFBeast16BGRAMSMLMBslot2: KFBeast16BGRAMSMLMBslot2, setKFBeast16BGRAMSMLMBslot2: setKFBeast16BGRAMSMLMBslot2,
            beast8GBRam: beast8GBRam, setbeast8GBRam: setbeast8GBRam,
            HP16BGRam: HP16BGRam, setHP16BGRam: setHP16BGRam,
            CX550PowerunitBIG: CX550PowerunitBIG, setCX550PowerunitBIG: setCX550PowerunitBIG,
            HX850PowerunitBIG: HX850PowerunitBIG, setHX850PowerunitBIG: setHX850PowerunitBIG,
            HX1200PowerunitBIG: HX1200PowerunitBIG, setHX1200PowerunitBIG: setHX1200PowerunitBIG,
            HX850PowerunitMID: HX850PowerunitMID, setHX850PowerunitMID: setHX850PowerunitMID,
            HX1200PowerunitMID: HX1200PowerunitMID, setHX1200PowerunitMID: setHX1200PowerunitMID,
            Samsung870EVOBIGs: Samsung870EVOBIGs, setSamsung870EVOBIGs: setSamsung870EVOBIGs,
            Samsung970SlotsBIGSlot1: Samsung970SlotsBIGSlot1, setSamsung970SlotsBIGSlot1: setSamsung970SlotsBIGSlot1,
            Samsung970SlotsBIGSlot2: Samsung970SlotsBIGSlot2, setSamsung970SlotsBIGSlot2: setSamsung970SlotsBIGSlot2,
            Samsung970SlotsMED: Samsung970SlotsMED, setSamsung970SlotsMED: setSamsung970SlotsMED,
            SeagateBarraCuda2TBBIGs: SeagateBarraCuda2TBBIGs, setSeagateBarraCuda2TBBIGs: setSeagateBarraCuda2TBBIGs,
            CorsairAFSLIMBIGs: CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs: setCorsairAFSLIMBIGs,
            CorsairICUELINKQXBIGs: CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs: setCorsairICUELINKQXBIGs,
            CorsairAFELITEBIGs: CorsairAFELITEBIGs, setCorsairAFELITEBIGs: setCorsairAFELITEBIGs,
            // CorsairAFSLIMMEDs: CorsairAFSLIMMEDs, setCorsairAFSLIMMEDs: setCorsairAFSLIMMEDs,
            // CorsairICUELINKQXMEDs: CorsairICUELINKQXMEDs, setCorsairICUELINKQXMEDs: setCorsairICUELINKQXMEDs,
            // CorsairAFELITEMEDs: CorsairAFELITEMEDs, setCorsairAFELITEMEDs: setCorsairAFELITEMEDs,
            // CorsairAFSLIMSMLs: CorsairAFSLIMSMLs, setCorsairAFSLIMSMLs: setCorsairAFSLIMSMLs,
            // CorsairICUELINKQXSMLs: CorsairICUELINKQXSMLs, setCorsairICUELINKQXSMLs: setCorsairICUELINKQXSMLs,
            // CorsairAFELITESMLs: CorsairAFELITESMLs, setCorsairAFELITESMLs: setCorsairAFELITESMLs,
          }}>
          <MainView />
        </AnimationContext.Provider>
      </div>
      <div className={cases === "" ? 'hidden' : 'show'}>
        <AnimationContext.Provider
          value={{
            reset: reset, setReset: setReset,
            cases: cases, setCases: setCases,
            mb: mb, setMB: setMB,
            lCaseBigMBSlide: lCaseBigMBSlide, setLCaseBigMBSlide: setLCaseBigMBSlide,
            lCaseMedMBSlide: lCaseMedMBSlide, setLCaseMedMBSlide: setLCaseMedMBSlide,
            lCaseSmlMBSlide: lCaseSmlMBSlide, setLCaseSmlMBSlide: setLCaseSmlMBSlide,
            amdRyzen5BIGMB: amdRyzen5BIGMB, setAMDRyzen5BIGMB: setAMDRyzen5BIGMB,
            amdRyzen7BIGMB: amdRyzen7BIGMB, setAMDRyzen7BIGMB: setAMDRyzen7BIGMB,
            amdRyzen9BIGMB: amdRyzen9BIGMB, setAMDRyzen9BIGMB: setAMDRyzen95BIGMB,
            amdRyzen5MEDMB: amdRyzen5MEDMB, setAMDRyzen5MEDMB: setAMDRyzen5MEDMB,
            amdRyzen7MEDMB: amdRyzen7MEDMB, setAMDRyzen7MEDMB: setAMDRyzen7MEDMB,
            amdRyzen9MEDMB: amdRyzen9MEDMB, setAMDRyzen9MEDMB: setAMDRyzen9MEDMB,
            amdRyzen5SMLMB: amdRyzen5SMLMB, setAMDRyzen5SMLMB: setAMDRyzen5SMLMB,
            amdRyzen7SMLMB: amdRyzen7SMLMB, setAMDRyzen7SMLMB: setAMDRyzen7SMLMB,
            amdRyzen9SMLMB: amdRyzen9SMLMB, setAMDRyzen9SMLMB: setAMDRyzen9SMLMB,
            RTX3070BIGMBtop: RTX3070BIGMBtop, setRTX3070BIGMBtop: setRTX3070BIGMBtop,
            RTX3070BIGMBbot: RTX3070BIGMBbot, setRTX3070BIGMBbot: setRTX3070BIGMBbot,
            RTX3080BIGMBtop: RTX3080BIGMBtop, setRTX3080BIGMBtop: setRTX3080BIGMBtop,
            RTX3080BIGMBbot: RTX3080BIGMBbot, setRTX3080BIGMBbot: setRTX3080BIGMBbot,
            RTX3090BIGMBtop: RTX3090BIGMBtop, setRTX3090BIGMBtop: setRTX3090BIGMBtop,
            RTX3090BIGMBbot: RTX3090BIGMBbot, setRTX3090BIGMBbot: setRTX3090BIGMBbot,
            RTX3070MEDMB: RTX3070MEDMB, setRTX3070MEDMB: setRTX3070MEDMB,
            RTX3080MEDMB: RTX3080MEDMB, setRTX3080MEDMB: setRTX3080MEDMB,
            RTX3090MEDMB: RTX3090MEDMB, setRTX3090MEDMB: setRTX3090MEDMB,
            RTX3070SMLMB: RTX3070SMLMB, setRTX3070SMLMB: setRTX3070SMLMB,
            RTX3080SMLMB: RTX3080SMLMB, setRTX3080SMLMB: setRTX3080SMLMB,
            RTX3090SMLMB: RTX3090SMLMB, setRTX3090SMLMB: setRTX3090SMLMB,
            HPV8GBRAMBIGMBslot1: HPV8GBRAMBIGMBslot1, setHPV8GBRAMBIGMBslot1: setHPV8GBRAMBIGMBslot1,
            HPV8GBRAMBIGMBslot2: HPV8GBRAMBIGMBslot2, setHPV8GBRAMBIGMBslot2: setHPV8GBRAMBIGMBslot2,
            HPV8GBRAMBIGMBslot3: HPV8GBRAMBIGMBslot3, setHPV8GBRAMBIGMBslot3: setHPV8GBRAMBIGMBslot3,
            HPV8GBRAMBIGMBslot4: HPV8GBRAMBIGMBslot4, setHPV8GBRAMBIGMBslot4: setHPV8GBRAMBIGMBslot4,
            KFBeast16BGRAMBIGMBslot1: KFBeast16BGRAMBIGMBslot1, setKFBeast16BGRAMBIGMBslot1: setKFBeast16BGRAMBIGMBslot1,
            KFBeast16BGRAMBIGMBslot2: KFBeast16BGRAMBIGMBslot2, setKFBeast16BGRAMBIGMBslot2: setKFBeast16BGRAMBIGMBslot2,
            KFBeast16BGRAMBIGMBslot3: KFBeast16BGRAMBIGMBslot3, setKFBeast16BGRAMBIGMBslot3: setKFBeast16BGRAMBIGMBslot3,
            KFBeast16BGRAMBIGMBslot4: KFBeast16BGRAMBIGMBslot4, setKFBeast16BGRAMBIGMBslot4: setKFBeast16BGRAMBIGMBslot4,
            HPV8GBRAMMEDMBslot1: HPV8GBRAMMEDMBslot1, setHPV8GBRAMMEDMBslot1: setHPV8GBRAMMEDMBslot1,
            HPV8GBRAMMEDMBslot2: HPV8GBRAMMEDMBslot2, setHPV8GBRAMMEDMBslot2: setHPV8GBRAMMEDMBslot2,
            HPV8GBRAMMEDMBslot3: HPV8GBRAMMEDMBslot3, setHPV8GBRAMMEDMBslot3: setHPV8GBRAMMEDMBslot3,
            HPV8GBRAMMEDMBslot4: HPV8GBRAMMEDMBslot4, setHPV8GBRAMMEDMBslot4: setHPV8GBRAMMEDMBslot4,
            KFBeast16BGRAMMEDMBslot1: KFBeast16BGRAMMEDMBslot1, setKFBeast16BGRAMMEDMBslot1: setKFBeast16BGRAMMEDMBslot1,
            KFBeast16BGRAMMEDMBslot2: KFBeast16BGRAMMEDMBslot2, setKFBeast16BGRAMMEDMBslot2: setKFBeast16BGRAMMEDMBslot2,
            KFBeast16BGRAMMEDMBslot3: KFBeast16BGRAMMEDMBslot3, setKFBeast16BGRAMMEDMBslot3: setKFBeast16BGRAMMEDMBslot3,
            KFBeast16BGRAMMEDMBslot4: KFBeast16BGRAMMEDMBslot4, setKFBeast16BGRAMMEDMBslot4: setKFBeast16BGRAMMEDMBslot4,
            HPV8GBRAMSMLMBslot1: HPV8GBRAMSMLMBslot1, setHPV8GBRAMSMLMBslot1: setHPV8GBRAMSMLMBslot1,
            HPV8GBRAMSMLMBslot2: HPV8GBRAMSMLMBslot2, setHPV8GBRAMSMLMBslot2: setHPV8GBRAMSMLMBslot2,
            KFBeast16BGRAMSMLMBslot1: KFBeast16BGRAMSMLMBslot1, setKFBeast16BGRAMSMLMBslot1: setKFBeast16BGRAMSMLMBslot1,
            KFBeast16BGRAMSMLMBslot2: KFBeast16BGRAMSMLMBslot2, setKFBeast16BGRAMSMLMBslot2: setKFBeast16BGRAMSMLMBslot2,
            beast8GBRam: beast8GBRam, setbeast8GBRam: setbeast8GBRam,
            HP16BGRam: HP16BGRam, setHP16BGRam: setHP16BGRam,
            CX550PowerunitBIG: CX550PowerunitBIG, setCX550PowerunitBIG: setCX550PowerunitBIG,
            HX850PowerunitBIG: HX850PowerunitBIG, setHX850PowerunitBIG: setHX850PowerunitBIG,
            HX1200PowerunitBIG: HX1200PowerunitBIG, setHX1200PowerunitBIG: setHX1200PowerunitBIG,
            HX850PowerunitMID: HX850PowerunitMID, setHX850PowerunitMID: setHX850PowerunitMID,
            HX1200PowerunitMID: HX1200PowerunitMID, setHX1200PowerunitMID: setHX1200PowerunitMID,
            Samsung870EVOBIGs: Samsung870EVOBIGs, setSamsung870EVOBIGs: setSamsung870EVOBIGs,
            Samsung970SlotsBIGSlot1: Samsung970SlotsBIGSlot1, setSamsung970SlotsBIGSlot1: setSamsung970SlotsBIGSlot1,
            Samsung970SlotsBIGSlot2: Samsung970SlotsBIGSlot2, setSamsung970SlotsBIGSlot2: setSamsung970SlotsBIGSlot2,
            Samsung970SlotsMED: Samsung970SlotsMED, setSamsung970SlotsMED: setSamsung970SlotsMED,
            SeagateBarraCuda2TBBIGs: SeagateBarraCuda2TBBIGs, setSeagateBarraCuda2TBBIGs: setSeagateBarraCuda2TBBIGs,
            CorsairAFSLIMBIGs: CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs: setCorsairAFSLIMBIGs,
            CorsairICUELINKQXBIGs: CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs: setCorsairICUELINKQXBIGs,
            CorsairAFELITEBIGs: CorsairAFELITEBIGs, setCorsairAFELITEBIGs: setCorsairAFELITEBIGs,
            // CorsairAFSLIMMEDs: CorsairAFSLIMMEDs, setCorsairAFSLIMMEDs: setCorsairAFSLIMMEDs,
            // CorsairICUELINKQXMEDs: CorsairICUELINKQXMEDs, setCorsairICUELINKQXMEDs: setCorsairICUELINKQXMEDs,
            // CorsairAFELITEMEDs: CorsairAFELITEMEDs, setCorsairAFELITEMEDs: setCorsairAFELITEMEDs,
            // CorsairAFSLIMSMLs: CorsairAFSLIMSMLs, setCorsairAFSLIMSMLs: setCorsairAFSLIMSMLs,
            // CorsairICUELINKQXSMLs: CorsairICUELINKQXSMLs, setCorsairICUELINKQXSMLs: setCorsairICUELINKQXSMLs,
            // CorsairAFELITESMLs: CorsairAFELITESMLs, setCorsairAFELITESMLs: setCorsairAFELITESMLs,
          }}>
          <Collection />
        </AnimationContext.Provider>
      </div>
    </div>
  )
}

export default App
