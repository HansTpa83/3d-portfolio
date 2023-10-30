import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Experiences() {
    const { scene: dashboardScene } = useGLTF("/models/dashboard.gltf")
    const { scene: yellowPostIt } = useGLTF("/models/postItYellow.gltf");
    const { scene: bluePostIt } = useGLTF("/models/postItBlue.gltf");
    const { scene: pinkPostIt } = useGLTF("/models/postItPink.gltf");

    return (
        <>
            <primitive object={dashboardScene} position={[-.01, 0, 0]} />
            <primitive object={yellowPostIt} position={[0, .3, 1.1]} />
            <primitive object={bluePostIt} position={[0, .3, 1.4]} />
            <primitive object={pinkPostIt} />
        </>
    )
}
