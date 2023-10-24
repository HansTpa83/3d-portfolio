import React, { useRef, useState, useEffect } from 'react'
import { Environment, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"
import { useControls } from 'leva'
import { Snackbar, Alert } from '@mui/material'


import './style.scss'

//MODELS 
import Office from "./components/Office"
import Computer from "./components/Computer"
import Navbar from "./components/Navbar"
import Phone from './components/Phone'

function App() {
  const perspectiveCamRef = useRef()
  const [snackbar, setSnackbar] = useState(false)


  const handleClick = (infos) => {
    perspectiveCamRef.current.position.set(infos.positions.x, infos.positions.y, infos.positions.z);
    perspectiveCamRef.current.rotation.set(infos.rotations.x, infos.rotations.y, infos.rotations.z);

    perspectiveCamRef.current.updateMatrixWorld();
  }

  const { rotationY, rotationX, rotationZ, positions, distanceFactor } = useControls('Perspective cam', {
    distanceFactor: {
      value: -.1, min: -180, max: 180, step: 0.01
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
        x: -.15,
        y: 2.35,
        z: -1.95
      },
      max: 180,
      step: 0.01
    }
  })

  return (
    <div className='App'>
      <Canvas>
        <PerspectiveCamera ref={perspectiveCamRef} />
        <OrbitControls makeDefault position={[positions.x, positions.y, positions.z]} />
        <Environment preset='city' />
        <color args={['#241a1a']} attach='background' />
        {/* rotation={[rotationX, rotationY, rotationZ]}
          position={[positions.x, positions.y, positions.z]} */}
        <Phone snackbar={setSnackbar} />
        <Office />
        {/* <Computer /> */}
      </Canvas>
      {/* <Navbar cameraPosition={handleClick} /> */}
      <Snackbar open={snackbar} autoHideDuration={3000} onClose={() => setSnackbar(false)}>
        <Alert onClose={() => setSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          copier dans le presse papier
        </Alert>
      </Snackbar>
    </div>
  )
}

export default App
