import React from 'react'
import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"

export default function Hobbies() {
    const { scene } = useGLTF("/models/hobbies-v1.glb")

    return (
        <primitive object={scene} position={[0, 0, .54]} />
    )
}
