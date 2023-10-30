import React from 'react'
import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"

export default function Educations() {
    const { scene } = useGLTF("/models/educations.gltf")
    const handleClick = () => {
        window.open('https://www.webacademie.org/', '_blank', "popup");
    }
    return (
        <primitive object={scene} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={handleClick} />
    )
}
