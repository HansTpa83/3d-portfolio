import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Notebook() {
    const { scene } = useGLTF("/models/noteBook.gltf")

    return (
        <primitive object={scene} scale={.8} position={[-.06, .3, .02]} />
    )
}
