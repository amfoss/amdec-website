const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve(`./src/templates/projectTemplate.js`);
  return graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
          sort: { fields: [frontmatter___title], order: DESC }
          filter: { frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const projects = result.data.allMarkdownRemark.edges;

    projects.forEach((project) => {
      createPage({
        path: project.node.fields.slug,
        component: projectTemplate,
        context: {
          slug: project.node.fields.slug,
        }
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
