import React from 'react'
import { useCameraStore } from "../store/store"
import { useGLTF, Html } from '@react-three/drei'
import { companyName, position, date } from "../page/Experiences"

import resume from "../../resume.json"
import "../assets/style/experiences.scss"

export default function Dashboard() {
    const { scene: dashboardScene } = useGLTF("/models/dashboard.gltf")
    const { scene: yellowPostIt } = useGLTF("/models/postItYellow.gltf");
    const { scene: bluePostIt } = useGLTF("/models/postItBlue.gltf");
    const { scene: pinkPostIt } = useGLTF("/models/postItPink.gltf");
    const camera = useCameraStore(state => state.cameraName)
    console.log(camera);

    return (
        <>
            <primitive object={dashboardScene} />
            {camera === "experiences" && (
                <>
                    <primitive object={yellowPostIt} position={[0.02, 0.3, 1.1]}>
                        <Html distanceFactor={14} transform position={[-20, 12.9, -0.3]} rotation={[0, 1.5, 0]}>
                            <h1 className='experiencesContent'>Expériences</h1>
                        </Html>
                    </primitive>
                    {resume.work.map((work, index) => {
                        const bluePostItClone = bluePostIt.clone();
                        const pinkPostItClone1 = pinkPostIt.clone();

                        return (
                            <React.Fragment key={index}>
                                <primitive object={bluePostItClone} position={[0.01, 0.25, 2.4]}>
                                    <Html distanceFactor={9} transform position={[-8.7, 5.8, 0.9]} rotation={[0, 1.57, 0]}>
                                        {companyName(work.name)}
                                    </Html>
                                </primitive>
                                <primitive object={bluePostIt} position={[0.01, 0.25, 1.8]}>
                                    <Html distanceFactor={3.8} transform position={[-5.5, 4.6, -1.2]} rotation={[0, 1.57, 0]}>
                                        {position(work.position)}
                                    </Html>
                                </primitive>
                                <primitive object={pinkPostIt} position={[0.01, 0.55, 1.48]}>
                                    <Html distanceFactor={4.5} transform position={[-5.9, 4.4, -1.8]} rotation={[0, 1.57, 0]}>
                                        {date(work.startDate)}
                                    </Html>
                                </primitive>
                                <primitive object={pinkPostItClone1} position={[0.01, 0.55, 1.1]}>
                                    <Html distanceFactor={4.5} transform position={[-5.9, 4.4, -2.13]} rotation={[0, 1.57, 0]}>
                                        {date(work.endDate)}
                                    </Html>
                                </primitive>
                            </React.Fragment>
                        );
                    })}
                </>
            )}
        </>
    )
}
