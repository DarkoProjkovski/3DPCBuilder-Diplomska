import React from 'react'

export const playAnimation = (anime) => {
    anime.loop = 0
    anime.repetitions = 0
    anime.play()
    anime.clampWhenFinished = true
}

export const stopAnimation = (anime) => {
    anime.stop()
}



