import React from 'react'
import './portfolio.css'
import Me from '../../assects/aboutme.png' 
const Portfolio = () => {
  return (
    
    <section id='portfolio'>
     {/* dinamically genrated portfolio is pending */}
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
        <article className='portfolio__item'>
             <div className="portfolio__item-image">
              <img src={Me} alt="" />
             </div>
             <h3>Portfolio item title</h3>
             <div className="portfolio__item-cta">
             <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
             </div>
             
        </article>
      </div>
    
    </section>
  )
}

export default Portfolio