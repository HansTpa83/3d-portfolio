import React from 'react'
import { useProgress, Html } from '@react-three/drei'

export default function Loading() {
    const { active, progress, errors, item, loaded, total } = useProgress()
    const progressBarStyles = {
        backgroundColor: 'gray',
        width: '60%',
        height: '10px',
        position: 'relative',
        border: '1px solid white',
        textAlign: "center",
        marginLeft: "20%",
        marginTop: "10px"
    };

    const fillBarStyles = {
        height: '100%',
        width: '60%',
        backgroundColor: 'white',
        transition: 'width 0.3s ease-in-out',
    };

    return (
        <Html center>
            <div style={{ width: "100vw", heigth: "100vh" }}>
                <div style={{ textAlign: "center", color: "white" }}>🚧 Portfolio en cours de construction. 🚧</div>
                <div style={progressBarStyles}>
                    <div style={fillBarStyles}></div>
                </div>

            </div>
        </Html>
    )
}
