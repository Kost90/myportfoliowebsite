import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import GridItem from "../griditem/GridItem";
import {project_section, grid_container, title} from './Gridlist.module.css'

function Gridlist() {
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
    <section className={project_section}>
      <h1 className={title}>My projects:</h1>
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
    </section>
  );
}

export default Gridlist;
