import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assects/Mee.png'
import HeeaderSocials from './HeeaderSocial'


const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Muhammad Anas</h1>
          <h5 className="text-light">FrontEnd Developer</h5>
          
          
          <CTA/>
          <HeeaderSocials/>



          <div className="ME">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__Down">Scroll Down</a>
        </div>
      </header>
  )
}

export default Header