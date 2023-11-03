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
    const bluePostItClone = bluePostIt.clone();
    const pinkPostItClone1 = pinkPostIt.clone();
    const camera = useCameraStore(state => state.cameraName)
    const cameraMoving = useCameraStore(state => state.isCameraMoving)

    return (
        <>
            <primitive object={dashboardScene} />

            <primitive object={yellowPostIt} position={[0.02, 0.3, 1.1]}>
                {camera === "experiences" && !cameraMoving &&
                    <Html className='experiencesContent' position={[-20, 14.3, 2.2]}>
                        <h2 >Expériences</h2>
                    </Html>
                }
            </primitive>


            <primitive object={bluePostItClone} position={[0.01, 0.25, 2.4]}>
                {camera === "experiences" && !cameraMoving &&
                    <Html position={[-8.7, 6, 1.5]}>
                        {companyName(resume.work[0].name)}
                    </Html>
                }
            </primitive>

            <primitive object={bluePostIt} position={[0.01, 0.25, 1.8]}>
                {camera === "experiences" && !cameraMoving &&
                    <Html position={[-5.5, 4.77, -.73]}>
                        {position(resume.work[0].position)}
                    </Html>
                }
            </primitive>

            <primitive object={pinkPostIt} position={[0.01, 0.55, 1.48]}>
                {camera === "experiences" && !cameraMoving &&
                    <Html position={[-5.9, 4.6, -1.55]}>
                        {date(resume.work[0].startDate)}
                    </Html>
                }
            </primitive>

            <primitive object={pinkPostItClone1} position={[0.01, 0.55, 1.1]}>
                {camera === "experiences" && !cameraMoving &&
                    <Html position={[-5.9, 4.6, -1.88]}>
                        {date(resume.work[0].endDate)}
                    </Html>
                }
            </primitive>

        </>
    )
}
