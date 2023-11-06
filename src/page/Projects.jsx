import React, { useEffect } from 'react'
import jsonResume from "../../resume.json"
import { useCameraStore } from "../store/store"

import "../assets/style/project.scss"

export default function Projects() {
    const projects = jsonResume.projects
    const regex = /[\s\.]/;
    const handleScroll = (type) => {
        const target = document.querySelector(`#${type}`)
        target.scrollIntoView({ block: 'center', behavior: "smooth" })
    }
    return (
        <div className='Projects'>
            <ul className='nav'>
                {
                    projects.map((project, index) => {
                        const str = project.name.replace(regex, "")
                        return <li key={index}><div className='divLink' onClick={() => { handleScroll(str) }}> {project.name} </div></li>
                    })
                }
            </ul>

            <div className='allProjects'>
                {
                    projects.map((project, index) => {
                        const { imagePreview, technos } = jsonResume.meta.projects[project.name]
                        const str = project.name.replace(regex, "")
                        return (
                            <div id={str} key={index} className={`project`}>
                                <div style={{ fontSize: "3em" }}> {project.name} </div>
                                <div className='technos'>
                                    {
                                        technos.map((techno, index) => {
                                            return (
                                                <span key={index} className='right'>{techno}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className='description'>{project.description}</div>
                                <a target="_blank" href={project.url}>{project.url}</a>
                                <div className='imageContainer' style={{ backgroundImage: `url(${imagePreview})` }}></div>
                            </div>
                        )
                    })
                }

            </div>
        </div >
    )
}
