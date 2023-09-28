import React from 'react'
import Logo from '../../images/assets/Logo.svg'
import GitHub from '../../images/assets/icons8-github-60.svg'
import LinKedin from '../../images/assets/icons8-linkedin-48.svg'
import {footer_container, svg_container, svg, svg_size} from './Footer.module.css'

function Footer() {
  return (
    <div className={footer_container}>
        <Logo className={svg_size}/>
        <div className={svg_container}>
        <a href='https://github.com/Kost90?tab=repositories' target='blanc'><GitHub className={svg}/></a>
        <a href='https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/' target='blanc'><LinKedin className={svg}/></a>
        </div>
    </div>
  )
}

export default Footer