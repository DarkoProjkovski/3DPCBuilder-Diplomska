import React, { useContext } from 'react'
import { AnimationContext } from '../../App'
import Ryzen5 from '/img/AMDRyzen5-5600X.png'
import Ryzen7 from '/img/AMDRyzen7-5700X.png'
import Ryzen9 from '/img/AMDRyzen9-5950X.png'

const CASE_SIZE = {L: "bigCase", M: "mediumCase", S: "smallCase"}
const MB_SIZE = {L: 'bigMB', M: "mediumMB", S: "smallMB"}

const CPULogic=()=> {

    const { cases, setCases, mb, setMB, 
        amdRyzen5BIGMB, setAMDRyzen5BIGMB, 
        amdRyzen7BIGMB, setAMDRyzen7BIGMB, 
        amdRyzen9BIGMB, setAMDRyzen9BIGMB, 
        amdRyzen5MEDMB, setAMDRyzen5MEDMB, 
        amdRyzen7MEDMB, setAMDRyzen7MEDMB, 
        amdRyzen9MEDMB, setAMDRyzen9MEDMB, 
        amdRyzen5SMLMB, setAMDRyzen5SMLMB, 
        amdRyzen7SMLMB, setAMDRyzen7SMLMB, 
        amdRyzen9SMLMB, setAMDRyzen9SMLMB 
      } = useContext(AnimationContext);

    const onCaseR5=()=>{
        if(cases !== "" && mb == MB_SIZE.L){
            if(amdRyzen7BIGMB == false && amdRyzen9BIGMB == false){
                setAMDRyzen5BIGMB(!amdRyzen5BIGMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
        if(cases !== "" && mb == MB_SIZE.M){
            if(amdRyzen7MEDMB == false && amdRyzen9MEDMB == false){
                setAMDRyzen5MEDMB(!amdRyzen5MEDMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
        if(cases !== "" && mb == MB_SIZE.S){
            if(amdRyzen7SMLMB == false && amdRyzen9SMLMB == false){
                setAMDRyzen5SMLMB(!amdRyzen5SMLMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
    }
    const onCaseR7=()=>{
        if(cases !== "" && mb == MB_SIZE.L){
            if(amdRyzen5BIGMB == false && amdRyzen9BIGMB == false){
                setAMDRyzen7BIGMB(!amdRyzen7BIGMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
        if(cases !== "" && mb == MB_SIZE.M){
            if(amdRyzen5MEDMB == false && amdRyzen9MEDMB == false){
                setAMDRyzen7MEDMB(!amdRyzen7MEDMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
        if(cases !== "" && mb == MB_SIZE.S){
            if(amdRyzen5SMLMB == false && amdRyzen9SMLMB == false){
                setAMDRyzen7SMLMB(!amdRyzen7SMLMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
    }
    const onCaseR9=()=>{
        if(cases !== "" && mb == MB_SIZE.L){
            if(amdRyzen5BIGMB == false && amdRyzen7BIGMB == false){
                setAMDRyzen9BIGMB(!amdRyzen9BIGMB)
            }else{
                console.log("Please deselect already selected CPU")
            }   
        }
        if(cases !== "" && mb == MB_SIZE.M){
            if(amdRyzen5MEDMB == false && amdRyzen7MEDMB == false){
                setAMDRyzen9MEDMB(!amdRyzen9MEDMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
        if(cases !== "" && mb == MB_SIZE.S){
            if(amdRyzen5SMLMB == false && amdRyzen7SMLMB == false){
                setAMDRyzen9SMLMB(!amdRyzen9SMLMB)
            }else{
                console.log("Please deselect already selected CPU")
            }
        }
    }

  return (
    <>
        <div style={{
        backgroundImage: `url(${Ryzen5})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className={(amdRyzen5BIGMB == true || amdRyzen5MEDMB == true ||amdRyzen5SMLMB == true ) ? 'box-active' : 'box-not-active'} onClick={onCaseR5}>
            {/* <AMDRyzen5Canvas/> */}
            <div>Ryzen5</div>
        </div>
        <div style={{
        backgroundImage: `url(${Ryzen7})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className={(amdRyzen7BIGMB == true || amdRyzen7MEDMB == true || amdRyzen7SMLMB == true) ? 'box-active' : 'box-not-active'} onClick={onCaseR7}>
            {/* <AMDRyzen7Canvas/> */}
            <div>Ryzen7</div>
        </div>
        <div style={{
        backgroundImage: `url(${Ryzen9})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center"
      }} className={(amdRyzen9BIGMB == true || amdRyzen9MEDMB == true || amdRyzen9SMLMB == true) ? 'box-active' : 'box-not-active'} onClick={onCaseR9}>
            {/* <AMDRyzen9Canvas/> */}
            <div>Ryzen9</div>
        </div>
    </>
  )
}

export default CPULogic
