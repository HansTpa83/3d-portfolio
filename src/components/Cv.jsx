import React from 'react'
import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"



export default function Cv() {
    const { scene } = useGLTF("/models/cv.gltf")

    const handleDownload = () => {
        const link = document.createElement('a');
        link.download = 'cv_hans_tapia.pdf';
        link.href = '../../cv_hans_tapia.pdf';
        link.click();
    }

    return (
        <primitive object={scene} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={handleDownload} />
    )
}
