import { useGLTF } from '@react-three/drei'
import { pointerCursor, normalCursor } from "../utils.js"

export default function Phone({ snackbar }) {

    const { scene: phoneScene } = useGLTF("/models/phone.gltf");
    const { scene: phoneLdnKey } = useGLTF("/models/phoneLdnKey.gltf");
    const { scene: phoneGitKey } = useGLTF("/models/phoneGitKey.gltf");
    const { scene: phoneMailKeyScene } = useGLTF("/models/phoneMailKey.gltf");


    const handleClick = (type) => {
        if (type === "LinkedIn") window.open("https://www.linkedin.com/in/hans-tapia/", "_blank")
        else if (type === "Github") window.open("https://github.com/HansTpa83", "_blank")
        else {
            navigator.clipboard.writeText("hanstapia83@gmail.com")
            snackbar(true)
        }
    }

    return (
        <>
            <primitive object={phoneScene} />
            <primitive object={phoneMailKeyScene} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={() => handleClick("Mail")} />
            <primitive object={phoneLdnKey} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={() => handleClick("LinkedIn")} />
            <primitive object={phoneGitKey} onPointerEnter={pointerCursor} onPointerLeave={normalCursor} onClick={() => handleClick("Github")} />
        </>
    )
}
