import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Skills from '../components/stateless/Skills'
import Hobbies from '../components/Hobbies'
import Projects from '../components/Projects'
import { frontend, backend } from '../api/skills.object'

const Home = () => {
    return (
        <>
          <main className='container'>
              <article className='main-content'>
                <section className='profile global-pd'>
                    <Profile />
                </section>
                <section className='skills-frontend skills-containers'>
                    <Skills object={ frontend } />
                </section>
                <section className='skills-backend skills-containers'>
                <Skills object={ backend } />
                </section>
                <section className="hobbies-container global-pd">
                    <Hobbies />
                </section>
                <section className="projects global-pd">
                    <Projects />
                </section>
              </article>
          </main>
          <Footer/>
        </>
    )
}

export default Home;
