import React, { useRef, useState, useEffect } from 'react'
import { Environment, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useControls } from 'leva'
import { Snackbar, Alert } from '@mui/material'
import * as THREE from 'three'

import './style.scss'

import CameraScene from './components/CameraScene'
//MODELS 
import Office from "./components/Office"
import Computer from "./components/Computer"
import Navbar from "./components/Navbar"
import Phone from './components/Phone'

function App() {
  const perspectiveCamRef = useRef(null)
  const [snackbar, setSnackbar] = useState(false)


  const handleClick = (infos) => {
    perspectiveCamRef.current.position.set(infos.positions.x, infos.positions.y, infos.positions.z)

    useFrame(() => {
      const target = new THREE.Vector3(infos.rotations.x, infos.rotations.y, infos.rotations.z);
      perspectiveCamRef.camera.lookAt(target)
      perspectiveCamRef.camera.updateProjectionMatrix()
    })
    // perspectiveCamRef.current.rotation.set(0, 2.5, 0);

    // perspectiveCamRef.current.updateMatrixWorld();
    // perspectiveCamRef.current.updateProjectionMatrix();

    console.log("perspectiveCamRef : ", perspectiveCamRef.current);
  }

  const { rotationY, rotationX, rotationZ, positions, distanceFactor } = useControls('Perspective cam', {
    distanceFactor: {
      value: 75, min: -180, max: 180, step: 0.01
    },
    rotationY: {
      value: 1.5, min: -180, max: 180, step: 0.01
    },
    rotationX: {
      value: 0.15, min: -180, max: 180, step: 0.01
    },
    rotationZ: {
      value: 1.08, min: -180, max: 180, step: 0.01
    },
    positions: {
      value: {
        x: 4,
        y: 1.3,
        z: -3
      },
      max: 180,
      step: 0.01
    }
  })
  return (
    <div className='App' >
      <Canvas camera={{ position: [2, 2, 2] }}>
        <CameraScene />

        <Environment preset='city' />
        <color args={['#241a1a']} attach='background' />

        <Phone snackbar={setSnackbar} />
        <Office />
        <Computer />

      </Canvas>

      <Navbar cameraPosition={handleClick} />
      <Snackbar open={snackbar} autoHideDuration={3000} onClose={() => setSnackbar(false)}>
        <Alert onClose={() => setSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          copier dans le presse papier
        </Alert>
      </Snackbar>
    </div >
  )
}

export default App
