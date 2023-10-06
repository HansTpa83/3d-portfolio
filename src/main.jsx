import './style.scss'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Leva } from 'leva'
import { StrictMode } from 'react'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <StrictMode>
    <Leva collapsed />
    <App />
  </StrictMode>
)