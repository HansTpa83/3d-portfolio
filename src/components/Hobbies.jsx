import React from 'react'
import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"

export default function Hobbies() {
    const { scene } = useGLTF("/models/hobbies.gltf")

    return (
        <primitive object={scene} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} />
    )
}
