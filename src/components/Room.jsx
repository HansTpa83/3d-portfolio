import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Room() {
    const { scene } = useGLTF("/models/room.gltf")

    return (
        <primitive object={scene} />
    )
}
