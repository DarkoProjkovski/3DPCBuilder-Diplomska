import React, { useContext, useEffect, useState } from 'react'
import { AnimationContext } from '../../../App'
import FanButton from './FanButton'
import FAN_SIZE from '../../const/FAN_SIZE'

const CorsairICUELINKQX = () => {

    const { CorsairICUELINKQXBIGs, setCorsairICUELINKQXBIGs } = useContext(AnimationContext)

    const [icu92mmbox, seticu92mmbox] = useState(false)
    const [icu120mmbox, seticu120mmbox] = useState(false)
    const [icu140mmbox, seticu140mmbox] = useState(false)

    useEffect(() => {

    }, [icu92mmbox, icu120mmbox, icu140mmbox])

    const onBoxClick = (event) => {
        if (event.currentTarget.id == "92mm")
            seticu92mmbox(!icu92mmbox)
        else if (event.currentTarget.id == "120mm")
            seticu120mmbox(!icu120mmbox)
        else if (event.currentTarget.id == "140mm")
            seticu140mmbox(!icu140mmbox)
    }

    return (
        <>
            <div className='width33'>
                <div id='92mm' onClick={onBoxClick} className={(icu92mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairICUELINKQX92mmCanvas /> */}
                    <div>CorsairICUELINKQX92mmCanvas</div>
                </div>
                <div className={(icu92mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairICUELINKQXBIGs} size={FAN_SIZE.S} setFan={setCorsairICUELINKQXBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='120mm' onClick={onBoxClick} className={(icu120mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairICUELINKQX120mmCanvas /> */}
                    <div>CorsairICUELINKQX120mmCanvas</div>
                </div>
                <div className={(icu120mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairICUELINKQXBIGs} size={FAN_SIZE.M} setFan={setCorsairICUELINKQXBIGs} />
                </div>
            </div>
            <div className='width33'>
                <div id='140mm' onClick={onBoxClick} className={(icu140mmbox) ? "box-active" : "box-not-active"}>
                    {/* <CorsairICUELINKQX140mmCanvas /> */}
                    <div>CorsairICUELINKQX140mmCanvas</div>
                </div>
                <div className={(icu140mmbox) ? "visible" : "hidden"}>
                    <FanButton fans={CorsairICUELINKQXBIGs} size={FAN_SIZE.L} setFan={setCorsairICUELINKQXBIGs} />
                </div>
            </div>
        </>
    )
}

export default CorsairICUELINKQX
