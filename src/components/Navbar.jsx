import gsap from 'gsap';
import { useCameraStore } from "../store/store"
import React, { useState, useEffect } from 'react'
import { MdHome, MdOutlineHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

export default function Navbar() {
    const camera = useCameraStore(state => state.cameraName)
    const switchCamera = useCameraStore((state) => state.switchCamera)

    const steps = [
        'home',
        // 'presentation',
        'projects',
        'educations',
        'experiences',
        'hobbies',
        'contact'
    ]

    const [activeStep, setActiveStep] = useState(0);

    const stepTranslation = {
        'home': "Accueil",
        'projects': "Projets",
        'contact': "Contact",
        'hobbies': "Hobbies",
        'educations': "Educations",
        'education': "Formation",
        'experiences': "Expérience",
        'presentation': "Présentation"
    }

    const handleClick = (type) => {
        let index = steps.indexOf(camera)
        const name = type == "next" ? steps[index + 1] : steps[index - 1]
        const newIndex = type == "next" ? index + 1 : index - 1
        if (newIndex >= steps.length || newIndex < 0) return
        setActiveStep(newIndex)
        switchCamera(name)
    }

    return (
        <div className='interface-controls' style={{ backgroundColor: "orange", position: 'absolute', bottom: '10px', right: "50%", display: 'flex', width: "10rem", borderRadius: "10px", height: "4vh", alignItems: 'center' }}>
            <button onClick={() => handleClick("previous")}>
                <MdNavigateBefore />
            </button >
            <div style={{ width: '10rem', textAlign: "center" }}>
                {stepTranslation[steps[activeStep]]}
            </div>
            <button onClick={() => handleClick("next")} >
                <MdNavigateNext />
            </button>
        </div>

    )
}
