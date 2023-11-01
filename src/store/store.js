import { create } from 'zustand';

export const useCameraStore = create((set) => ({
    cameraName: 'home',
    isCameraMoving: false,
    switchCamera: (cam) => {
        set((state) => {
            return {
                isCameraMoving: true,
                cameraName: cam
            }
        })
    },
    cameraNotMoving: () => { // Utilisez une fonction pour cameraNotMoving
        set((state) => {
            return {
                isCameraMoving: false,
            }
        })
    }
    // explore: () => set({ cameraName: 'explore' }),

}))