import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from './stateless/Button';
import ProjectsLabel from '../components/ProjectsLabel';
import './scss/projects.style.scss';

const Projects = ({ projectName, setProject }) => {
  const [projects, setProjects] = useState(false);
  const findHandler = (project) => {
    const find = project.tags.find((tag) => {
      if (tag.toUpperCase() === projectName.toUpperCase()) {
        return true;
      }
      return false;
    });
    return find;
  };

  const projectJson = async () => {
    try {
      const res = await axios(
        'https://weather-api-33323.herokuapp.com/cdn.contentful.com/spaces/sys7v84vi1ts/entries?content_type=myPortfolioProjects',
        {
          method: 'GET',
          headers: {
            Authorization: 'Bearer 47VVsD-789bnvtODFjN-hYcnx7FRi6_w8mFtCPOa9s4',
          },
        }
      );
      setProjects(res.data.items);
    } catch (error) {
      console.log(error.response.data);
      alert(
        'Cannot Fetch The Projects At The Moment, Please Contact With Me For Details.'
      );
    }
  };

  useEffect(() => {
    projectJson();
  }, []);
  console.log(projects);

  return (
    <>
      <section style={{ position: 'relative' }} className='projects'>
        {projects ? (
          <>
            <ProjectsLabel projects={projects} setProject={setProject} />
            {projects.map((project, index) => (
              <>
                {findHandler(project.fields) ? (
                  <div key={index} className='projects-container global-pd'>
                    <div className='projects-img-container'>
                      <img
                        src={project.fields.img}
                        alt={project.fields.title}
                      />
                    </div>

                    <div className='projects-tags'>
                      {project.fields.tags.map((tag) => (
                        <span> {'#' + tag}</span>
                      ))}
                    </div>
                    <h1 className='projects-title'>{project.fields.title}</h1>
                    <p className='projects-describe'>
                      {project.fields.describe}
                    </p>
                    <div className='projects-buttons'>
                      <a target='_blank' href={project.fields.demo}>
                        <Button type='contained' size='md'>
                          Demo
                        </Button>
                      </a>
                      <a target='_blank' href={project.fields.code}>
                        <Button type='outlined' size='md'>
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  ''
                )}
              </>
            ))}
          </>
        ) : (
          <h3
            style={{
              position: 'absolute',
              margin: '0 auto',
              width: '100%',
              textAlign: 'center',
              top: '150px',
              color: '#333',
            }}
          >
            PROJECTS FETCHING...
          </h3>
        )}
      </section>
    </>
  );
};

export default Projects;
