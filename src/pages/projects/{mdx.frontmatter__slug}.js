import * as React from 'react';
import { graphql} from 'gatsby';
import { GatsbyImage} from 'gatsby-plugin-image';
import { getImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import Seo from '../../components/seo/seo';


const Projects = ({ data }) => {

  const image= getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt}/>
      <p>Some text about project</p>
      </div>
      </Layout> 
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
            hero_image {
              childImageSharp {
              gatsbyImageData
              }
            }
      }
    }
  }
`

export const Head = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export default Projects