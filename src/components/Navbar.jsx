import gsap from 'gsap';
import { useCameraStore } from "../store/store"
import React, { useState, useEffect } from 'react'
import { MdHome, MdOutlineHome, MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import "../assets/style/navbar.scss"

export default function Navbar() {
    const camera = useCameraStore(state => state.cameraName)
    const switchCamera = useCameraStore((state) => state.switchCamera)

    const steps = [
        'home',
        'presentation',
        'projects',
        'experiences',
        'educations',
        'hobbies',
        'contact'
    ]

    const [activeStep, setActiveStep] = useState(0);

    const stepTranslation = {
        'home': "Accueil",
        'projects': "Projets",
        'contact': "Contact",
        'hobbies': "Hobbies",
        'educations': "Formations",
        'experiences': "Expériences",
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
        <div id="interface" className="fonted">
            <div className="controls-wrapper">
                <div className='interface-controls'>
                    <button style={{ borderRight: "1px solid black" }} onClick={() => handleClick("previous")}>
                        <MdNavigateBefore />
                    </button >

                    <div className='step'>
                        {stepTranslation[steps[activeStep]]}
                    </div>
                    <button style={{ borderLeft: "1px solid black" }} onClick={() => handleClick("next")} >
                        <MdNavigateNext />
                    </button>
                </div>
            </div>
        </div>
    )
}
