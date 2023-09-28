import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import {container_skillssec, container_content, img_container, border_title_container, title_section, text_container, skills_img_flex, border_div, ul_container} from './Skillssection.module.css'

const skills = ['JavaScript', 'CSS', 'SCSS', 'HTML', 'React', 'Node.js', 'PosrtgreSQL', 'TypeScript'];

function SkillsSection () {
    const liVariants = {
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          ease: "easeOut",
        },
      };

    const data = useStaticQuery(graphql`
    query{
        mdx(frontmatter: {key: {eq: "about"}}) {
          excerpt(pruneLength: 10000)
          frontmatter {
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            hero_image_alt
            title
          }
        }
      }`)

    const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <div className={container_skillssec}>
        <div className={border_title_container}>
        <h1 className={title_section}>ABOUT ME</h1>
        <div className={border_div}></div>
        </div>
        <div className={container_content}>
        <div className={skills_img_flex}>
        <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className={img_container}
          />
          <h2>MY SKILLS:</h2>
          <ul className={ul_container}>
           {skills.map((node,i) => (
            <motion.li
            initial={'hidden'}
            whileInView={'visible'}
            transition={{
              duration: 1,
              delay: i * 0.5}}
            viewport={{ amount: 0.2, once: true }}
            variants={liVariants}
            >{node}</motion.li>
           ))}
        </ul> 
        </div>
        <p className={text_container}>{data.mdx.excerpt}</p>
        </div>
       
    </div>
  )
}

export default SkillsSection