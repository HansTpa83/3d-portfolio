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
import Cv from './components/Cv'
import Hobbies from './components/Hobbies'
import Educations from './components/Educations'

function App() {
  const [snackbar, setSnackbar] = useState(false)

  return (
    <div className='App' >
      <Canvas camera={{ position: [2, 2, 2] }}>
        <CameraScene />

        <Environment preset='city' />
        <color args={['#241a1a']} attach='background' />

        <Phone snackbar={setSnackbar} />
        <Office />
        <Computer />
        <Cv />
        <Hobbies />
        <Educations />
      </Canvas>

      <Navbar />
      <Snackbar open={snackbar} autoHideDuration={3000} onClose={() => setSnackbar(false)}>
        <Alert onClose={() => setSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          copier dans le presse papier
        </Alert>
      </Snackbar>
    </div >
  )
}

export default App
