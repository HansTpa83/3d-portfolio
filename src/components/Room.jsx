import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Room() {
    const { scene: roomScene } = useGLTF("/models/room.gltf")
    const { scene: chairScene } = useGLTF("/models/chair.gltf")

    return (
        <>
            <primitive object={roomScene} />
            <primitive object={chairScene} />
        </>
    )
}
