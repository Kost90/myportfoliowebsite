import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout/layout";
import Seo from "../../components/seo/seo";
import ProgressBar from "../../components/progressbar/ProgressBar";
import {
  container_page,
  container_flex,
  img_container,
  title_project,
  progbars_container,
  description_container,
  btn_container,
  btn
} from "./projects.module.css";

const Projects = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const js = data.mdx.frontmatter?.js;
  const css = data.mdx.frontmatter?.css;
  const scss = data.mdx.frontmatter?.scss;
  const html = data.mdx.frontmatter?.html;

  return (
    <Layout>
      <div className={container_page}>
        <h1 className={title_project}>{data.mdx.frontmatter.title}</h1>
        <div className={container_flex}>
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            className={img_container}
          />
          <div className={progbars_container}>
            <h2>Used programming languages:</h2>
            <h2>JavaScript</h2>
            {js !== undefined ? <ProgressBar data={js} /> : null}
            <h2>CSS</h2>
            {css !== undefined ? <ProgressBar data={css} /> : null}
            <h2>SCSS</h2>
            {scss !== undefined ? <ProgressBar data={scss} /> : null}
            <h2>HTML</h2>
            {html !== undefined ? <ProgressBar data={html} /> : null}
          </div>
        </div>
        <p className={description_container}>{data.mdx.excerpt}</p>
        <div className={btn_container}>
        <button className={btn}>
          <a href={data.mdx.frontmatter.web} target="blanc">
            project webpage
          </a>
        </button>
        <button className={btn}>
          <a href={data.mdx.frontmatter.code} target="blanc">
            project code
          </a>
        </button>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      excerpt(pruneLength: 10000)
      frontmatter {
        css
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        html
        js
        scss
        title
        web
        code
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default Projects;
