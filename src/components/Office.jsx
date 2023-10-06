import React, { forwardRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'


export default function Office() {
    const { scene } = useGLTF("/models/room.gltf")

    return (
        <primitive object={scene} />
    )
}
