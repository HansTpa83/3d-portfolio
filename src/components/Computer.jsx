import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, Html, TransformControls } from '@react-three/drei'
import { useControls } from 'leva'
import * as THREE from 'three'


import Projects from '../page/Projects'


export default function Computer() {
    const { scene } = useGLTF("/models/computer.gltf")
    const html = useRef(null)

    const { rotationY, rotationX, rotationZ, positions, distanceFactor } = useControls('Computer', {
        distanceFactor: {
            value: .27, min: -180, max: 180, step: 0.01
        },
        rotationY: {
            value: 1.55, min: -180, max: 180, step: 0.01
        },
        rotationX: {
            value: 0, min: -180, max: 180, step: 0.01
        },
        rotationZ: {
            value: 0, min: -180, max: 180, step: 0.01
        },
        positions: {
            value: {
                x: -.04,
                y: 2.205,
                z: .05
            },
            max: 180,
            step: 0.01
        }
    })


    const quaternion = new THREE.Quaternion()
    quaternion.setFromAxisAngle(new THREE.Vector3(-.1, 2, .1).normalize(), Math.PI / 2)

    return (
        <primitive object={scene} >

            <Html
                ref={html}
                transform
                wrapperClass="htmlScreen"
                distanceFactor={distanceFactor}
                position={[positions.x, positions.y, positions.z]}
                quaternion={quaternion}
            >
                <Projects />
            </Html>
        </primitive>
    )
}
