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
                    return (
                        <div key={index} style={{ margin: "90px auto", width: "450px", height: "auto", borderRadius: "20px", textAlign: "center", backgroundColor: "white" }}>
                            <div style={{
                                width: "450px", height: "450px", backgroundImage: `url(${imagePreview})`, borderTopRightRadius: "20px", borderTopLeftRadius: "20px"
                            }}></div>
                            < div style={{ fontSize: "3em" }}> {project.name} </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
