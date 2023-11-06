import * as THREE from 'three'
import React, { useRef } from 'react'
import { useCameraStore } from "../store/store"
import { useGLTF, Html } from '@react-three/drei'

import Projects from '../page/Projects'

export default function Computer() {
    const { scene } = useGLTF("/models/computer.gltf")
    const html = useRef(null)

    const camera = useCameraStore(state => state.cameraName)
    const cameraMoving = useCameraStore(state => state.isCameraMoving)

    const quaternion = new THREE.Quaternion()
    quaternion.setFromAxisAngle(new THREE.Vector3(-.1, 2.2, .1).normalize(), Math.PI / 2)

    return (
        <primitive object={scene} >
            <Html
                ref={html}
                transform
                wrapperClass="htmlScreen"
                distanceFactor={.27}
                position={[-.04, 2.197, .052]}
                quaternion={quaternion}
            >
                <Projects />
            </Html>

        </primitive>
    )
}
