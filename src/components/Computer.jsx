import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, Html, TransformControls } from '@react-three/drei'
import * as THREE from 'three'


import Projects from '../page/Projects'


export default function Computer() {
    const { scene } = useGLTF("/models/computer.gltf")
    const html = useRef(null)

    const quaternion = new THREE.Quaternion()
    quaternion.setFromAxisAngle(new THREE.Vector3(-.1, 2, .1).normalize(), Math.PI / 2)

    return (
        <primitive object={scene} >

            <Html
                ref={html}
                transform
                wrapperClass="htmlScreen"
                distanceFactor={.27}
                position={[-.04, 2.205, .05]}
                quaternion={quaternion}
            >
                <Projects />
            </Html>
        </primitive>
    )
}
