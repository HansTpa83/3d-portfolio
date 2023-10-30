import React from 'react'
import { useGLTF } from '@react-three/drei'


export default function Office() {
    const { scene } = useGLTF("/models/desk-v1.glb")

    return (
        <primitive object={scene} />
    )
}
