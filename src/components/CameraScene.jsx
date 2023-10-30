import gsap from 'gsap';
import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useCameraStore } from '../store/store';

export default function CameraScene() {
    const { camera, gl } = useThree();
    const cameraControlsRef = useRef();

    const cameraName = useCameraStore((state) => state.cameraName);

    const minPolarAngle = 0;
    const maxPolarAngle = Math.PI / 2 - 0.15;
    const minAzimuthAngle = Math.PI / 2;
    const maxAzimuthAngle = Math.PI;

    /**
     * To permit animations of the camera
     */
    const cameraMovementsOn = () => {
        cameraControlsRef.current.enabled = true;
        cameraControlsRef.current.minPolarAngle = 0;
        cameraControlsRef.current.maxPolarAngle = Math.PI;
        cameraControlsRef.current.minAzimuthAngle = Infinity;
        cameraControlsRef.current.maxAzimuthAngle = Infinity;
    };

    /**
     * User can control the camera
     */
    const cameraMovementsWithLimitations = () => {
        cameraControlsRef.current.enabled = true;
        cameraControlsRef.current.minPolarAngle = minPolarAngle;
        cameraControlsRef.current.maxPolarAngle = maxPolarAngle;
        cameraControlsRef.current.minAzimuthAngle = minAzimuthAngle;
        cameraControlsRef.current.maxAzimuthAngle = maxAzimuthAngle;
    };

    /**
        * User can not control the camera
         */
    const cameraMovementsOff = () => {
        cameraControlsRef.current.enabled = false;
    };


    const cameraSettings = {
        educations: {
            position: new THREE.Vector3(-1.9, 3.5, 1.9),
            target: new THREE.Vector3(-1.9, 2, 10)
        },
        hobbies: {
            position: new THREE.Vector3(1.5, 3.5, 1),
            target: new THREE.Vector3(1, -2, 10)
        },
        contact: {
            position: new THREE.Vector3(.82, 1.7, 1.45),
            target: new THREE.Vector3(0, 1.5, 1.45)
        },
        projects: {
            position: new THREE.Vector3(.4, 2.2, .05),
            target: new THREE.Vector3(0, 2.15, .05)
        },
        experiences: {
            position: new THREE.Vector3(.4, 2.2, .05),
            target: new THREE.Vector3(0, 2.15, .05)
        },
        home: {
            position: new THREE.Vector3(4, 3, -2.5),
            target: new THREE.Vector3(0, 2, 1.4)
        }
    }

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
        animateCamera(
            cameraSettings[cameraName].position,
            cameraSettings[cameraName].target,
            2,
            'sine'
        );
    }, [cameraName])

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
