import React from 'react'
import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"

export default function Educations() {
    const { scene } = useGLTF("/models/educations.gltf")

    const handleClick = () => {
        window.open('https://www.webacademie.org/', '_blank');
    }

    return (
        <primitive object={scene} position={[0, 0, .54]} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={handleClick} />
    )
}
