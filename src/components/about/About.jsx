import React from 'react'
import './about.css'
import Me from '../../assects/aboutme.png'
import { FaAward } from 'react-icons/fa'
import { FiUser } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
      
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small> 1+ Years </small>
              </article>

              <article className='about__card'>
                <FiUser className='about__icon' />
                <h5>Clients</h5>
                <small> 50+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Projects</h5>
                <small> 10+ Completed</small>
              </article>

              
    
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis mollitia id suscipit ab reprehenderit esse unde nam assumenda perferendis vitae dignissimos, corporis similique eveniet hic libero! Accusantium eos reiciendis officia.</p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About