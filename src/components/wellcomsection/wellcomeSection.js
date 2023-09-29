import React, {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import GitHub from '../../images/assets/icons8-github-60.svg'
import LinkeDin from '../../images/assets/icons8-linkedin-48.svg'
import Braine from '../../images/assets/cranium-2099084.svg'
import {container_center, wellcomesec_textcontainer, name_color, btn_wellcomesec, svg_container, svg, svg_rocket,btns_container} from './wellcomesection.module.css'

function WellcomeSection({onClickContact, onClickProjects}) {
  const screenWidth = typeof window !== 'undefined' ? window.screen.width : null;
  const [isShow, setIsShow] = useState(false);
  
useEffect(() =>{
  if (screenWidth >= 768) {
    return;
  } else {
    setIsShow(!isShow);
  }
},[])
    
  return (
    <motion.section 
    initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className={container_center}>
        <div className={wellcomesec_textcontainer}>
            <h1>Hello, I'm <span className={name_color}>Kostiantyn Dontsov.</span></h1>
            <h1>I'm a junior full-stack web developer.</h1>
            <div className={svg_container}>
              <a href='https://github.com/Kost90?tab=repositories' target='blanc'><GitHub className={svg}/></a>
              <a href='https://www.linkedin.com/in/kostiantyn-dontsov-ba1a09249/' target='blanc'><LinkeDin className={svg}/></a>
            </div>
            <div className={btns_container}>
            <button className={btn_wellcomesec} onClick={onClickProjects}>View my projects</button>
            <button className={btn_wellcomesec} onClick={onClickContact}>Contact me</button>
            </div>
        </div>
        {/* {isShow?null:<Braine className={svg_rocket}/>} */}
        <Braine className={svg_rocket}/>
    </motion.section>
  )
}

export default WellcomeSection