/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const slugify = require('slugify');

exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter
}) => {
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            html
            timeToRead
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('GraphQL error occured while creating pages');
    return;
  }

  const pages = result.data.allMarkdownRemark.edges.map(edge => edge.node);
  pages.forEach(page => {
    const { frontmatter, html, timeToRead, fields } = page;
    createPage({
      path: `/articles/${fields.slug}`,
      component: require.resolve(`${__dirname}/src/layouts/post.js`),
      context: {
        ...frontmatter,
        html,
        timeToRead
      }
    });
  });
};

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    createNodeField({
      node,
      name: 'slug',
      value: slugify(node.frontmatter.title.toLowerCase())
    });
  }
};
