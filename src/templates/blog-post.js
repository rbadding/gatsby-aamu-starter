import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import heroStyles from '../components/hero.module.css'
import { format } from 'date-fns'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.aamu.BlogPost')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={heroStyles.hero}>
            <Img className={heroStyles.heroImage} alt={post.title} fluid={post.heroImage.image.childImageSharp.fluid} />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {format(new Date(post.publishDate).valueOf(), 'MMMM Do, yyyy')}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body,
              }}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    aamu {
      BlogPost(slug: $slug) {
        title
        publishDate
        heroImage {
          url
          image {
            id
            childImageSharp {
              id
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
        body
        slug
      }
    }
  }
`
