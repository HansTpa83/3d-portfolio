import React, { useState } from 'react'
import jsonResume from "../../resume.json"
import "../assets/style/project.scss"

export default function Projects() {
    const [projects, setProjects] = useState(jsonResume.projects)
    return (

        <div style={{
            width: "945px",
            height: "755px",
            overflow: "auto"
        }}>
            {
                projects.map((project, index) => {
                    const { imagePreview } = jsonResume.meta.projects[project.name]
                    return index % 2 == 0 ? (
                        <div key={index} style={{ display: "flex", justifyContent: "space-around", margin: "90px auto", width: "90%", height: "auto", borderRadius: "20px", textAlign: "center" }}>
                            <div style={{ color: "white" }}>
                                <div style={{ fontSize: "3em" }}> {project.name} </div>
                                <div>{project.description}</div>
                            </div>
                            <div style={{
                                width: "450px", height: "450px", backgroundImage: `url(${imagePreview})`, borderTopRightRadius: "20px", borderTopLeftRadius: "20px"
                            }}></div>
                        </div>
                    ) :
                        (
                            <div key={index} style={{ display: "flex", justifyContent: "space-around", margin: "90px auto", width: "90%", height: "auto", borderRadius: "20px", textAlign: "center" }}>
                                <div style={{
                                    width: "450px", height: "450px", backgroundImage: `url(${imagePreview})`, borderTopRightRadius: "20px", borderTopLeftRadius: "20px"
                                }}></div>
                                <div style={{ color: "white" }}>
                                    <div style={{ fontSize: "3em" }}> {project.name} </div>
                                    <div>{project.description}</div>
                                </div>
                            </div>
                        )
                })
            }
        </div >
    )
}
