import React from 'react'
import { useCameraStore } from "../store/store"

export default function Navbar(props) {
    const camera = useCameraStore(state => state.cameraName)
    const switchCamera = useCameraStore((state) => state.switchCamera)

    console.log(camera);

    return (
        <nav style={{ backgroundColor: "orange", position: 'absolute', bottom: '10px', right: "50%" }}>
            <ul>
                <li onClick={() => switchCamera("home")}>Accueil</li>
                {/* <li onClick={() => switchCamera()}>Formations</li> */}
                <li onClick={() => switchCamera("experiences")}>Expériences</li>
                <li onClick={() => switchCamera("skills")}>Skills</li>
                <li onClick={() => switchCamera("contact")}>Contact</li>
            </ul>
        </nav>
    )
}
