import React from 'react'
import { Link } from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';
import {item_container, img_container} from './GridItem.module.css'

function GridItem({key, slug, title, image, alt}) {
  return (
    <div key={key} className={item_container}>
        <h1>{title}</h1>
        <GatsbyImage image={image} alt={alt} className={img_container}/>
        <button>
        <Link to={`/projects/${slug}`}>About project</Link>
        </button>
    </div>
  )
}

export default GridItem