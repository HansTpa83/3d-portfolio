import gsap from 'gsap';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function CameraScene() {
    const { camera, gl } = useThree();
    const cameraControlsRef = useRef();

    const contact = {
        position: new THREE.Vector3(.82, 1.7, 1.45),
        target: new THREE.Vector3(0, 1.5, 1.45)
    };
    const project = {
        position: new THREE.Vector3(.4, 2.2, .05),
        target: new THREE.Vector3(0, 2.15, .05)
    };

    const experiences = {
        position: new THREE.Vector3(.4, 2.2, .05),
        target: new THREE.Vector3(0, 2.15, .05)
    };


    const animateCamera = (positionSettings, targetSettings, duration, ease) => {
        /**
         * Stop the animation if is going
         */
        gsap.killTweensOf(camera.position);
        gsap.killTweensOf(cameraControlsRef.current.target);

        /**
         * Move the camera
         */
        gsap.to(camera.position, {
            x: positionSettings.x,
            y: positionSettings.y,
            z: positionSettings.z,
            duration: duration,
            ease: ease,
            onStart: () => {
                cameraMovementsOn();
            },
            onComplete: () => {
                cameraMovementsOff();
            }
        });

        /**
         * Set the target of the camera
         */
        gsap.to(cameraControlsRef.current.target, {
            x: targetSettings.x,
            y: targetSettings.y,
            z: targetSettings.z,
            duration: duration,
            ease: ease
        });
    };

    useEffect(() => {
        // switch() {
        //     case:
        animateCamera(
            project.position,
            project.target,
            2,
            'sine'
        );
        // break;
        // }
    }, [])

    return (
        <OrbitControls
            makeDefault
            ref={cameraControlsRef}
            args={[camera, gl]}
            rotateSpeed={0.2}
            zoomSpeed={2}
            enablePan={false}
            enableZoom={false}
        // maxDistance={isBrowser ? 7.3 : 15}
        />
    );
}
