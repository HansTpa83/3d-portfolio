import React, { useState } from 'react'
import jsonResume from "../../resume.json"

export default function Projects() {
    const [projects, setProjects] = useState(jsonResume.projects)
    return (

        <div style={{
            backgroundColor: "red",
            width: "945px",
            height: "755px",
            overflow: "auto"
        }}>
            {
                projects.map((project, index) => {
                    const { imagePreview } = jsonResume.meta.projects[project.name]
                    console.log("IMG : ", imagePreview);
                    return (
                        <div key={index}>
                            <div style={{ width: "450px", height: "450px", backgroundImage: `url(${imagePreview})` }}></div>
                            <div> {project.name} </div>
                        </div>
                    )
                })
            }


        </div>
    )
}
