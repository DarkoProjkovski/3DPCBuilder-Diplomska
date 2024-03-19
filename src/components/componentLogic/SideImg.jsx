import React from 'react'

const SideImg = (image) => {
    console.log(image.cla)
    const myStyle = {
        backgroundImage: `url(${image.image})`,
        width: `100%`,
        height: `100%`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain"
    }
    

    return (
        <img style={myStyle} className={image.className} />
    )
}

export default SideImg
