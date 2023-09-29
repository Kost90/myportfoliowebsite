import React, {forwardRef} from "react";
import { motion } from "framer-motion";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import GridItem from "../griditem/GridItem";
import {projects_section, grid_list_container, grid_container, border_title_container, title_section, border_div} from './Gridlist.module.css'

function Gridlist(props,ref) {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { key: { eq: "card" } } }) {
        nodes {
          frontmatter {
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            key
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <section ref={ref} className={projects_section}>
      <div className={grid_list_container}>
      <div className={border_title_container}>
        <motion.h1 
         initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.2, once: true }}
        className={title_section}>my projects</motion.h1>
        <div className={border_div}></div>
        </div>
      <div className={grid_container}>
        {data.allMdx.nodes.map((node) => (
          <GridItem
            key={node.id}
            title={node.frontmatter.title}
            text={node.excerpt}
            image={getImage(node.frontmatter.hero_image)}
            alt={node.frontmatter.hero_image_alt}
            slug={node.frontmatter.slug}
          />
        ))}
      </div>
      </div>
    </section>
  );
}

export default forwardRef(Gridlist);
