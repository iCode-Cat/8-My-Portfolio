import React from 'react';
import Button from './stateless/Button';
import { projectsObject } from '../api/projects.object';
import ProjectsLabel from '../components/ProjectsLabel'
import './scss/projects.style.scss';

const Projects = ({ projectName, setProject }) => {

    
    const findHandler = (project) => {
        const find = project.tags.find((tag) => {
            if(tag.tagname.toUpperCase() === projectName.toUpperCase() ) {
                return true
            }
            return false
        })
        return find
    }
    
    
    return (
        <>
        
        <section className="projects">
        <ProjectsLabel setProject={setProject} />
           {
               
            projectsObject.map((project, index) => (
                <>
            {
                findHandler(project) ? <div key={index} className="projects-container global-pd">
                <div className="projects-img-container">
                    <img src={project.img} alt={project.title} />
                </div>

                <div className="projects-tags">
                    {
                        project.tags.map((tag) => (
                            <span> { '#' + tag.tagname }</span>
                        ))
                    }
                </div>
                <h1 className="projects-title">
                    {project.title}
                </h1>    
                <p className="projects-describe">
                    { project.describe }
                </p>
                <div className="projects-buttons">
                <a href={project.demo}>
                <Button type='contained' size='md'>
                    Demo
                </Button>
                </a>
                <a href={project.code}>
                <Button type='outlined' size='md'>
                    Code
                </Button>
                </a>
                </div>
                
           </div> : ''    

                }
           </>
           ))
           }
        </section>
        </>
    )
}

export default Projects
