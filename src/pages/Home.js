import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import Skills from '../components/stateless/Skills'
import { frontend, backend } from '../api/skills.object'

const Home = () => {
    return (
        <>
          <main className='container'>
              <article className='main-content'>
                <section className='profile global-pd'>
                    <Profile />
                </section>
                <section className='skills-frontend'>
                    <Skills title={'FRONTEND'} object={ frontend } />
                </section>
                <section className='skills-backend'>
                <Skills title={'BACKEND'} object={ backend } />
                </section>
              </article>
          </main>
          <Footer/>
        </>
    )
}

export default Home;
