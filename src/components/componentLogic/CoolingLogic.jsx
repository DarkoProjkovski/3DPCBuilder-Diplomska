import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../../App'
import Button from './fans/Button'
import FAN_SIZE from '../const/FAN_SIZE'
import CASE_SIZE from '../const/CASE_SIZE'
import f92b from '/img/CorsairBlackFan92mm.png'
import f120b from '/img/CorsairBlackFan120mm.png'
import f140b from '/img/CorsairBlackFan140mm.png'
import f92g from '/img/CorsairGBlackFan92mm.png'
import f120g from '/img/CorsairGBlackFan120mm.png'
import f140g from '/img/CorsairGBlackFan140mm.png'
import f92w from '/img/CorsairWhiteFan92mm.png'
import f120w from '/img/CorsairWhiteFan120mm.png'
import f140w from '/img/CorsairWhiteFan140mm.png'

const CoolingLogic = () => {

    const { reset, setReset,
        cases, setCases,
        CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs,
        CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs,
        CorsairAFELITEBIGs, setCorsairAFELITEBIGs } = useContext(AnimationContext)

    const [slim92mmbox, setslim92mmbox] = useState(false)
    const [slim120mmbox, setslim120mmbox] = useState(false)
    const [slim140mmbox, setslim140mmbox] = useState(false)

    const [icu92mmbox, seticu92mmbox] = useState(false)
    const [icu120mmbox, seticu120mmbox] = useState(false)
    const [icu140mmbox, seticu140mmbox] = useState(false)

    const [lite92mmbox, setLite92mmbox] = useState(false)
    const [lite120mmbox, setLite120mmbox] = useState(false)
    const [lite140mmbox, setLite140mmbox] = useState(false)

    const [CorsairAFSLIM, setCorsairAFSLIM] = useState({})
    const [CorsairICUELINKQX, setCorsairICUELINKQX] = useState({})
    const [CorsairAFELITE, setCorsairAFELITE] = useState({})

    const resetBox = (obj, setObj, size) => {
        setObj(obj.map(fan => {
            if (fan.slot == true && fan.key.includes(size)) {
                return { ...fan, slot: false }
            } else {
                return fan
            }
        }))
    }

    const onBoxClick = (event) => {
        if (event.currentTarget.id == "92mmA") {
            setslim92mmbox(!slim92mmbox)
        }
        if (event.currentTarget.id == "120mmA") {
            setslim120mmbox(!slim120mmbox)
        }
        if (event.currentTarget.id == "140mmA") {
            setslim140mmbox(!slim140mmbox)
        }
        if (event.currentTarget.id == "92mmB") {
            seticu92mmbox(!icu92mmbox)
        }
        if (event.currentTarget.id == "120mmB") {
            seticu120mmbox(!icu120mmbox)
        }
        if (event.currentTarget.id == "140mmB") {
            seticu140mmbox(!icu140mmbox)
        }
        if (event.currentTarget.id == "92mmC") {
            setLite92mmbox(!lite92mmbox)
        }
        if (event.currentTarget.id == "120mmC") {
            setLite120mmbox(!lite120mmbox)
        }
        if (event.currentTarget.id == "140mmC") {
            setLite140mmbox(!lite140mmbox)
        }
    }


    useEffect(() => {
        // if (cases == CASE_SIZE.L) {
        //     setNumFans(2)
        // } else if (cases == CASE_SIZE.M) {
        //     setNumFans(3)
        // } else if (cases == CASE_SIZE.S) {
        //     setNumFans(6)
        // }
        if (reset > 1) {
            setslim92mmbox(false)
            setslim120mmbox(false)
            setslim140mmbox(false)
            seticu92mmbox(false)
            seticu120mmbox(false)
            seticu140mmbox(false)
            setLite92mmbox(false)
            setLite120mmbox(false)
            setLite140mmbox(false)
            if (slim92mmbox) {
                resetBox(CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs, FAN_SIZE.S)
            }
            if (slim120mmbox == false) {
                resetBox(CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs, FAN_SIZE.M)
            }
            if (slim140mmbox) {
                resetBox(CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs, FAN_SIZE.L)
            }
            if (icu92mmbox) {
                resetBox(CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs, FAN_SIZE.S)
            }
            if (icu120mmbox) {
                resetBox(CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs, FAN_SIZE.M)
            }
            if (icu140mmbox) {
                resetBox(CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs, FAN_SIZE.L)
            }
            if (lite92mmbox) {
                resetBox(CorsairAFELITEBIGs, setCorsairAFELITEBIGs, FAN_SIZE.S)
            }
            if (lite120mmbox) {
                resetBox(CorsairAFELITEBIGs, setCorsairAFELITEBIGs, FAN_SIZE.M)
            }
            if (lite140mmbox) {
                resetBox(CorsairAFELITEBIGs, setCorsairAFELITEBIGs, FAN_SIZE.L)
            }
        }

    }, [slim92mmbox, slim120mmbox, slim140mmbox,
        icu92mmbox, icu120mmbox, icu140mmbox,
        lite92mmbox, lite120mmbox, lite140mmbox,
        CorsairAFSLIMBIGs, reset])



    return (
        <>
            <div className='width33'>
                <div style={{
                    backgroundImage: `url(${f92b})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='92mmA' onClick={onBoxClick} className={(slim92mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFSLIM92mmCanvas /> */}
                        <div>CorsairAFSLIM92mmCanvas</div>
                    </div>
                    <div className={(slim92mmbox) ? "visible" : "hidden"}>
                        <Button reset={slim92mmbox} objects={CorsairAFSLIMBIGs} size={FAN_SIZE.S} setObjects={setCorsairAFSLIMBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f92g})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='92mmB' onClick={onBoxClick} className={(icu92mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairICUELINKQX92mmCanvas /> */}
                        <div>CorsairICUELINKQX92mmCanvas</div>
                    </div>
                    <div className={(icu92mmbox) ? "visible" : "hidden"}>
                        <Button reset={icu92mmbox} objects={CorsairICUELINKQXBIGs} size={FAN_SIZE.S} setObjects={setCorsairICUELINKQXBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f92w})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='92mmC' onClick={onBoxClick} className={(lite92mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFELITE92mmCanvas /> */}
                        <div>CorsairAFELITE92mmCanvas</div>
                    </div>
                    <div className={(lite92mmbox) ? "visible" : "hidden"}>
                        <Button reset={lite92mmbox} objects={CorsairAFELITEBIGs} size={FAN_SIZE.S} setObjects={setCorsairAFELITEBIGs} />
                    </div>
                </div>
            </div>
            <div className='width33'>
                <div style={{
                    backgroundImage: `url(${f120b})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='120mmA' onClick={onBoxClick} className={(slim120mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFSLIM120mmCanvas /> */}
                        <div>CorsairAFSLIM120mmCanvas</div>
                    </div>
                    <div className={(slim120mmbox) ? "visible" : "hidden"}>
                        <Button reset={slim120mmbox} objects={CorsairAFSLIMBIGs} size={FAN_SIZE.M} setObjects={setCorsairAFSLIMBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f120g})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='120mmB' onClick={onBoxClick} className={(icu120mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairICUELINKQX120mmCanvas /> */}
                        <div>CorsairICUELINKQX120mmCanvas</div>
                    </div>
                    <div className={(icu120mmbox) ? "visible" : "hidden"}>
                        <Button reset={icu120mmbox} objects={CorsairICUELINKQXBIGs} size={FAN_SIZE.M} setObjects={setCorsairICUELINKQXBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f120w})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='120mmC' onClick={onBoxClick} className={(lite120mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFELITE120mmCanvas /> */}
                        <div>CorsairAFELITE120mmCanvas</div>
                    </div>
                    <div className={(lite120mmbox) ? "visible" : "hidden"}>
                        <Button reset={lite120mmbox} objects={CorsairAFELITEBIGs} size={FAN_SIZE.M} setObjects={setCorsairAFELITEBIGs} />
                    </div>
                </div>
            </div>
            <div className='width33'>
                <div style={{
                    backgroundImage: `url(${f140b})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='140mmA' onClick={onBoxClick} className={(slim140mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFSLIM140mmCanvas /> */}
                        <div>CorsairAFSLIM140mmCanvas</div>
                    </div>
                    <div className={(slim140mmbox) ? "visible" : "hidden"}>
                        <Button reset={slim140mmbox} objects={CorsairAFSLIMBIGs} size={FAN_SIZE.L} setObjects={setCorsairAFSLIMBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f140g})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='140mmB' onClick={onBoxClick} className={(icu140mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairICUELINKQX140mmCanvas /> */}
                        <div>CorsairICUELINKQX140mmCanvas</div>
                    </div>
                    <div className={(icu140mmbox) ? "visible" : "hidden"}>
                        <Button reset={icu140mmbox} objects={CorsairICUELINKQXBIGs} size={FAN_SIZE.L} setObjects={setCorsairICUELINKQXBIGs} />
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url(${f140w})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center"
                }}>
                    <div id='140mmC' onClick={onBoxClick} className={(lite140mmbox) ? "box-active" : "box-not-active"}>
                        {/* <CorsairAFELITE140mmCanvas /> */}
                        <div>CorsairAFELITE140mmCanvas</div>
                    </div>
                    <div className={(lite140mmbox) ? "visible" : "hidden"}>
                        <Button reset={lite140mmbox} objects={CorsairAFELITEBIGs} size={FAN_SIZE.L} setObjects={setCorsairAFELITEBIGs} />
                    </div>
                </div>
            </div>


        </>
    )
}

export default CoolingLogic
