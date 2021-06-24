import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './skills.style.scss'

const Skills = ({object}) => {
    return (
        <section className='skills global-pd'>
            <h1 className="skills-title">
                {object.title}
            </h1>
            {
                object.skills.map((skill, index) => (
                    <section key={index} className="skills-container">
                    <label className='skills-label'>{skill.label}</label>
                    <ProgressBar height={10} isLabelVisible={false} bgColor={'var(--clr-blue)'} baseBgColor={'#C4C4C4'} completed={skill.process}/>
                    </section>
                ))
            }
        </section>
    )
}

export default Skills;
