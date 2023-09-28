import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'gatsby'
import { GatsbyImage} from 'gatsby-plugin-image'
import {item_container, img_container} from './GridItem.module.css'

function GridItem({key, slug, title, image, alt}) {

  const cardAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition:{duration: 0.3},
    }
  }

  return (
    <motion.div
    initial='hidden'
    whileInView='visible'
    viewport={{amount: 0.2, once: true}}
    variants={cardAnimation}
    key={key} className={item_container}>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={alt} className={img_container}/>
        <button>
        <Link to={`/projects/${slug}`}>About project</Link>
        </button>
    </motion.div>
  )
}

export default GridItem