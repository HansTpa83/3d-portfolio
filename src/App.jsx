import { Environment, PerspectiveCamera, OrbitControls } from "@react-three/drei"
import { Canvas, useThree } from "@react-three/fiber"

import './style.scss'

//MODELS 

import Office from "./components/office"
function App() {

  return (
    <div className='App'>
      <Canvas>
        <PerspectiveCamera />
        <OrbitControls />
        <Environment preset='city' />
        <Office />
      </Canvas>
    </div>
  )
}

export default App
