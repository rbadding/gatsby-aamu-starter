const Promise = require('bluebird')
const path = require('path')
const remark = require('remark')
const remark_html = require('remark-html')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            aamu {
              BlogPostCollection {
                title
                slug
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.aamu.BlogPostCollection
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.slug}/`,
            component: blogPost,
            context: {
              slug: post.slug
            },
          })
        })
      })
    )
  })
}

exports.createResolvers = (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions;

  createResolvers({

    // Turn Aamu_BlogPost.body into html
    Aamu_BlogPost: {
      body: {
        type: 'String',
        resolve(source, args, context, info) {
          const file = remark()
            .use(remark_html)
            .processSync(source.body);

          return String(file);
        }
      }
    },

    // Handle images
    Aamu_GraphQLMediaItem: {
      image: {
        type: `File`,
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}
