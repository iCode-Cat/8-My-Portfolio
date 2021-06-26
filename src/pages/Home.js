import React, { useState } from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Skills from '../components/stateless/Skills'
import Hobbies from '../components/Hobbies'
import Projects from '../components/Projects'
import { frontend, backend } from '../api/skills.object'

const Home = () => {

    const [projectName, setProject] = useState('Responsive');

    return (
        <>
          <main className='container'>
              <article className='main-content'>
                    <Profile />
                    <Skills object={ frontend } />
                    <Skills object={ backend } />
                    <Hobbies />
                    <Projects projectName={projectName} setProject={setProject}/>
              </article>
          </main>
          <Footer/>
        </>
    )
}

export default Home;
