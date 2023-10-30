import { create } from 'zustand';

export const useCameraStore = create((set) => ({
    cameraName: 'home',
    switchCamera(cam) {
        set((state) => {
            return {
                cameraName: cam
            }
        })
    }
    // explore: () => set({ cameraName: 'explore' }),

}))