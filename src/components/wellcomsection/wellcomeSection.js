import React from 'react'
import GitHub from '../../images/assets/icons8-github-60.svg'
import LinkeDin from '../../images/assets/icons8-linkedin-48.svg'
import Picture from '../../images/assets/rocket.svg'
import {container_center, wellcomesec_textcontainer, name_color, btn_wellcomesec, svg_container, svg, svg_rocket} from './wellcomesection.module.css'

function WellcomeSection() {
  return (
    <section className={container_center}>
        <div className={wellcomesec_textcontainer}>
            <h1>Hello, I'm <span className={name_color}>Kostiantyn Dontsov.</span></h1>
            <h1>I'm a junior full-stack web developer.</h1>
            <div className={svg_container}>
              <a href='https://github.com/Kost90?tab=repositories' target='blanc'><GitHub className={svg}/></a>
              <a href='https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/' target='blanc'><LinkeDin className={svg}/></a>
            </div>
            <button className={btn_wellcomesec}>View my projects</button>
        </div>
        <Picture className={svg_rocket}/>
    </section>
  )
}

export default WellcomeSection