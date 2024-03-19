import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../../../App'
import FanButton from './FanButton'
import FAN_SIZE from '../../const/FAN_SIZE'

const CorsairAFSLIM = () => {

    const { CorsairAFSLIMBIGs, setCorsairAFSLIMBIGs } = useContext(AnimationContext)

    const [slim92mmbox, setslim92mmbox] = useState(false)
    const [slim120mmbox, setslim120mmbox] = useState(false)
    const [slim140mmbox, setslim140mmbox] = useState(false)

    useEffect(() => {

    }, [slim92mmbox, slim120mmbox, slim140mmbox])

    const onBoxClick = (event) => {
        if (event.currentTarget.id == "92mm")
            setslim92mmbox(!slim92mmbox)
        else if (event.currentTarget.id == "120mm")
            setslim120mmbox(!slim120mmbox)
        else if (event.currentTarget.id == "140mm")
            setslim140mmbox(!slim140mmbox)
    }

    return (
        <>
            <div className='width33'>
                <div id='92mm' onClick={onBoxClick} className={(slim92mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFSLIM92mmCanvas /> */}
                    <div>CorsairAFSLIM92mmCanvas</div>
                </div>
                <div className={(slim92mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairAFSLIMBIGs} size={FAN_SIZE.S} setFan={setCorsairAFSLIMBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='120mm' onClick={onBoxClick} className={(slim120mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFSLIM120mmCanvas /> */}
                    <div>CorsairAFSLIM120mmCanvas</div>
                </div>
                <div className={(slim120mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairAFSLIMBIGs} size={FAN_SIZE.M} setFan={setCorsairAFSLIMBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='140mm' onClick={onBoxClick} className={(slim140mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairAFSLIM140mmCanvas /> */}
                    <div>CorsairAFSLIM140mmCanvas</div>
                </div>
                <div className={(slim140mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairAFSLIMBIGs} size={FAN_SIZE.L} setFan={setCorsairAFSLIMBIGs} />
                </div>
            </div>
        </>
    )
}

export default CorsairAFSLIM
