import React from 'react'
import './skills.style.scss'

const Skills = ({title, object}) => {
    return (
        <section className='skills global-pd'>
            <h1 className="skills-title">
                {title}
            </h1>
            {
                object.map((skill, index) => (
                    <section key={index} className="skills-container">
                    <label className='skills-label'>{skill.label}</label>
                    <progress className='skills-progress' max='100' value={skill.process}/>
                    </section>
                ))
            }
        </section>
    )
}

export default Skills;
