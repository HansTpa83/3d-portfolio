import React, { useEffect } from 'react'
import jsonResume from "../../resume.json"
import { useCameraStore } from "../store/store"

import "../assets/style/project.scss"

export default function Projects() {
    const projects = jsonResume.projects

    return (
        <div className='Projects'>
            {
                projects.map((project, index) => {
                    const { imagePreview, technos } = jsonResume.meta.projects[project.name]

                    return index % 2 == 0 ? (
                        <div key={index} className='project'>
                            <div className='rightSide'>
                                <div style={{ fontSize: "3em" }}> {project.name} </div>
                                <div className='technos'>
                                    {
                                        technos.map(techno => {
                                            return (
                                                <span className='right'>{techno}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className='description'>{project.description}</div>
                            </div>
                            <div className='imageContainer' style={{ backgroundImage: `url(${imagePreview})` }}></div>
                        </div>
                    ) :
                        (
                            <div key={index} className='project'>
                                <div className='imageContainer' style={{ backgroundImage: `url(${imagePreview})`, marginRight: "20px" }}></div>
                                <div>
                                    <div style={{ fontSize: "3em" }}> {project.name} </div>
                                    <div className='technos'>
                                        {
                                            technos.map(techno => {
                                                return (
                                                    <span className='left'>{techno}</span>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className='description'>{project.description}</div>
                                </div>
                            </div>
                        )
                })
            }
        </div >
    )
}
