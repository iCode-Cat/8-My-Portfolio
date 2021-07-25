import React, { useState } from 'react';
import './scss/projectLabel.style.scss';
import Button from './stateless/Button';
import { buttonObject } from '../api/button.object';

const ProjectsLabel = ({ projects, setProject }) => {
  const [sort, setSort] = useState(0);

  return (
    <section className='projects-label global-pd'>
      <header className='projects-sort'>
        <p>Projects ( {projects.length} )</p>
        <div className='projects-label-button-container'>
          {buttonObject.map((button, index) => (
            <Button
              setProject={setProject}
              key={index}
              id={index}
              setSort={setSort}
              type={`${sort === index ? 'contained' : button.type}`}
              size={button.size}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </header>
    </section>
  );
};

export default ProjectsLabel;
