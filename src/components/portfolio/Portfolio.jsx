import React from 'react'
import './portfolio.css'
import Me from '../../assects/aboutme.png' 
const data = [
     {
          id: 1,
          image: Me,
          title: 'Event Managment',
          github:'https://github.com/Anas-a1',
          demo:'https://github.com',
     },
     {
          id: 2,
          image: Me,
          title: 'Event Managment',
          github:'',
          demo:'',
     },
     {
          id: 3,
          image: Me,
          title: 'Event Managment',
          github:'',
          demo:'',
     },
     
   ]

const Portfolio = () => {
  return (
    
    <section id='portfolio'>
     {/* dinamically genrated portfolio is pending */}
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {
          data.map(({id,image,title,github,demo}) =>{
               return(
                    <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                     <img src={image} alt={title} />
                    </div>
                    <h3>{title}</h3>
                    <div className="portfolio__item-cta">
                    <a href={github} className='btn' target='_blank'>GitHub</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                    
               </article>
               )
          })
       
     }
      </div>
    
    </section>
  )
}

export default Portfolio