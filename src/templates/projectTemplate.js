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
            fluid(maxWidth: 2400, maxHeight: 1000, quality: 80) {
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
