const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const reportTemplate = path.resolve('./src/templates/report.js')
  const res = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        slug
                    }
                }
            }
            allContentfulReport {
              edges {
                  node {
                      country
                  }
              }
          }
        }
    `)

  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allContentfulReport.edges.forEach((edge) => {
    createPage({
      component: reportTemplate,
      path: `/results/${edge.node.country}`,
      context: {
        country: edge.node.country
      }
    })
  })
}

