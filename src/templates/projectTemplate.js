import React, { useContext } from "react";
import { graphql } from "gatsby";
import LazyImage from "gatsby-image";
import { Container, Content, Section, Subtitle, Title } from "bloomer";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { ThemeContext, getOppositeTheme } from "../contexts/theme";

const ProjectTemplate = props => {
  const { theme } = useContext(ThemeContext);

  const project = props.data.markdownRemark;
  const cover = project.frontmatter.cover;
  const { title: siteTitle } = props.data.site.siteMetadata;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title={project.frontmatter.title} />
      <Section className={`has-background-${theme}`}>
        <Container>
          <Title hasTextColor={getOppositeTheme(theme)}>
            {project.frontmatter.title}
          </Title>
          {project.frontmatter.tags.map(tag => (
            <Subtitle
              className={`has-background-${getOppositeTheme(theme)} badge`}
              hasTextColor={theme}
            >
              {tag}
            </Subtitle>
          ))}
        </Container>
        {cover && (
          <div style={{ margin: `2rem -1.5rem` }}>
            <LazyImage
              fluid={cover.childImageSharp.fluid}
              alt={project.frontmatter.title}
              style={{
                maxWidth: cover.childImageSharp.fluid.presentationWidth,
                maxHeight:
                  cover.childImageSharp.fluid.presentationWidth /
                  cover.childImageSharp.fluid.aspectRatio,
                margin: `0 auto`,
                boxShadow: `0px 10px 30px -5px rgba(0, 0, 0, 0.3)`
              }}
            />
          </div>
        )}
        <Container>
          <Content
            hasTextColor={getOppositeTheme(theme)}
            dangerouslySetInnerHTML={{ __html: project.html }}
          />

          <hr />
          <Subtitle hasTextColor={getOppositeTheme(theme)}>
            {project.frontmatter.mentors.length > 1 ? "Mentors" : "Mentor"}
          </Subtitle>
          {project.frontmatter.mentors.map((mentor, index) => (
            <a href={`mailto: ${project.frontmatter.mentorsEmail[index]}`}>
              <Subtitle hasTextColor={getOppositeTheme(theme)}>
                {index + 1}. {mentor}
              </Subtitle>
            </a>
          ))}
          <hr />
        </Container>
      </Section>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        mentors
        mentorsEmail
        tags
        cover {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 600, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              originalImg
            }
          }
        }
      }
    }
  }
`;
