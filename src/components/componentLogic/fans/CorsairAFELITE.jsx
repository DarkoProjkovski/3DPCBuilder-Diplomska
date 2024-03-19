import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../../../App'
import FanButton from './FanButton'
import FAN_SIZE from '../../const/FAN_SIZE'

const CorsairAFELITE = () => {

    const { CorsairAFELITEBIGs, setCorsairAFELITEBIGs } = useContext(AnimationContext)

    const [lite92mmbox, setLite92mmbox] = useState(false)
    const [lite120mmbox, setLite120mmbox] = useState(false)
    const [lite140mmbox, setLite140mmbox] = useState(false)

    const [disabledState, setDisabledState] = useState(false)

    useEffect(() => {

    }, [lite92mmbox, lite120mmbox, lite140mmbox, disabledState])

    const changeState = (id, next) => {
        setFan(fans.map(fan => {
            if (fan.key === id) {
                return { ...fan, slot: next }
            } else {
                return fan
            }
        }))
    }

    const onBoxClick = (event) => {
        if (event.currentTarget.id == "92mm")
            setLite92mmbox(!lite92mmbox)
        else if (event.currentTarget.id == "120mm")
            setLite120mmbox(!lite120mmbox)
        else if (event.currentTarget.id == "140mm")
            setLite140mmbox(!lite140mmbox)
    }
    const checkIfDisabled=()=>{
        if((lite92mmbox == true || lite120mmbox == true)){
            console.log("Only one kind of fan can be sellected at a time please deselect already selected fan")
            setDisabledState(true)
        }else setDisabledState(false)
    }


    return (
        <>
            <div className='width33'>
                <div id='92mm' onClick={onBoxClick} className={(lite92mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFELITE92mmCanvas /> */}
                    <div>CorsairAFELITE92mmCanvas</div>
                </div>
                <div className={(lite92mmbox) ? "visible" : "hidden"}>
                    <FanButton disabled = {()=>checkIfDisabled(FAN_SIZE.S)} fans={CorsairAFELITEBIGs} size={FAN_SIZE.S} setFan={setCorsairAFELITEBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='120mm' onClick={onBoxClick} className={(lite120mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFELITE120mmCanvas /> */}
                    <div>CorsairAFELITE120mmCanvas</div>
                </div>
                <div className={(lite120mmbox) ? "visible" : "hidden"}>
                    <FanButton disabled = {()=>checkIfDisabled(FAN_SIZE.M)} fans={CorsairAFELITEBIGs} size={FAN_SIZE.M} setFan={setCorsairAFELITEBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='140mm' onClick={(event)=>{onBoxClick(event), checkIfDisabled()}} className={(lite140mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFELITE140mmCanvas /> */}
                    <div>CorsairAFELITE140mmCanvas</div>
                </div>
                <div className={(lite140mmbox) ? "visible" : "hidden"}>
                    <FanButton disabled={disabledState} fans={CorsairAFELITEBIGs} size={FAN_SIZE.L} setFan={setCorsairAFELITEBIGs} />
                </div>
            </div>
        </>
    )
}

export default CorsairAFELITE
