import React from 'react'

const Skills = ({title, object}) => {
    return (
        <section className='skills'>
            <h1 className="skills-title">
                {title}
            </h1>
            {
                object.map((skill, index) => (
                    <section key={index} className="skill">
                    <label>{skill.label}</label>
                    <progress max='100' value={skill.process}/>
                    </section>
                ))
            }
        </section>
    )
}

export default Skills;
