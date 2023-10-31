import React, { useState, Suspense } from 'react'
import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Snackbar, Alert } from '@mui/material'
import './style.scss'

import Loading from './page/Loading'
import CameraScene from './components/CameraScene'

//MODELS 
import Office from "./components/Office"
import Computer from "./components/Computer"
import Navbar from "./components/Navbar"
import Phone from './components/Phone'
import Cv from './components/Cv'
import Hobbies from './components/Hobbies'
import Educations from './components/Educations'
import Notebook from './components/Notebook'
import Dashboard from './components/Dashboard'

function App() {
  const [snackbar, setSnackbar] = useState(false)

  return (
    <div className='App' >
      <Canvas camera={{ position: [2, 2, 2] }}>
        <Suspense fallback={<Loading />}>
          <CameraScene />

          <Environment preset='city' />
          <color args={['#241a1a']} attach='background' />

          <Phone snackbar={setSnackbar} />
          <Office />
          <Computer />
          <Cv />
          <Hobbies />
          <Educations />
          <Notebook />
          <Dashboard />
        </Suspense>
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
