import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience' >
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
       <div className='container experience__container'> 
         <div className='experience__Frontend'>
                  <h3>Frontend Developer</h3>
          <div className='experience__content'>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>HTML</h4>
                        <samll className="text-light"> Experienced</samll> 
                       </div>
                   </article>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>CSS</h4>
                        <samll className="text-light"> InterMediate</samll> 
                       </div>
                   </article>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>JavaScript</h4>
                        <samll className="text-light"> Basic</samll> 
                       </div>
                   </article>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                        <h4>BootStrap</h4>
                        <samll className="text-light"> Experienced</samll> 
                        </div>
                   </article>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>Talwind</h4>
                        <samll className="text-light"> Basic</samll> 
                       </div>
                   </article>
                   <article className='experience__details'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                       <div>
                       <h4>React</h4>
                        <samll className="text-light"> InterMediate</samll> 
                       </div>
                   </article>
            </div>        
         </div>
       </div>

    </section>
  )
}

export default Experience