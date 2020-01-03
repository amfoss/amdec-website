import React, { useContext, useState, useEffect } from "react";
import { Link, graphql } from "gatsby";
import {
  Card,
  CardContent,
  Column,
  Columns,
  Container,
  Hero,
  HeroBody,
  Title,
  Subtitle
} from "bloomer";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Animated from "../components/animated";
import { ThemeContext, getOppositeTheme } from "../contexts/theme";
import amDeCBanLight from "../images/amdec_banner.png";
import timelineData from "../components/Data";
import Particles from "react-particles-js";
import About from "../components/about";
import Why from "../components/Why";
import FAQ from "../components/faq";
import HttpsRedirect from "react-https-redirect";
import Contact from "./contact";
import RSVPForm from "../components/rsvpForm";

const ProjectsIndex = props => {
  const { theme } = useContext(ThemeContext);
  const { data, location } = props;
  const { title: siteTitle } = data.site.siteMetadata;
  const projects = data.allMarkdownRemark.edges;
  const [hash, setHash] = useState(undefined);
  const [queryLoaded, setQueryLoaded] = useState(false);

  useEffect(() => {
    if(!queryLoaded)
    {
      const query = window.location.search.substring(1);
      const queryHash = query.split("=");
      setHash(queryHash[1]);
      setQueryLoaded(true)
    }
  });


  return (
    <HttpsRedirect>
      { hash === undefined ? (
        <Layout location={location}>
          <SEO title={siteTitle} />
          <Hero isColor="black" className="is-fullheight-with-navbar">
            <Particles
              style={{ position: "absolute" }}
              canvasClassName="particleBg"
              params={{
                particles: {
                  number: {
                    value: 50,
                    density: {
                      enable: true,
                      value_area: 700
                    }
                  },
                  color: {
                    value: "#ffffff"
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 1,
                      color: "#ffffff"
                    },
                    polygon: {
                      nb_sides: 5
                    },
                    image: {
                      src: "",
                      width: 100,
                      height: 100
                    }
                  },
                  opacity: {
                    value: 0.7,
                    random: true
                  },
                  size: {
                    value: 10,
                    random: true
                  },
                  line_linked: {
                    enable: true,
                    distance: 200,
                    color: "#ffffff",
                    opacity: 0.5,
                    width: 2
                  },
                  move: {
                    enable: true,
                    speed: 2,
                    direction: "top",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                      enable: true,
                      rotateX: 600,
                      rotateY: 1200
                    }
                  }
                },
                interactivity: {
                  detect_on: "canvas",
                  events: {
                    onhover: {
                      enable: false,
                      mode: "repulse"
                    },
                    onclick: {
                      enable: false,
                      mode: "push"
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 800,
                      line_linked: {
                        opacity: 1
                      }
                    },
                    bubble: {
                      distance: 800,
                      size: 80,
                      duration: 2,
                      opacity: 0.8,
                      speed: 3
                    },
                    repulse: {
                      distance: 400,
                      duration: 0.4
                    },
                    push: {
                      particles_nb: 4
                    },
                    remove: {
                      particles_nb: 2
                    }
                  }
                },
                retina_detect: true
              }}
            />
            <HeroBody>
              <Container>
                <div className="row m-0">
                  <div className="col-md-6">
                    <img src={amDeCBanLight} alt="amDeC" />
                  </div>
                  <div className="col-md-6" />
                </div>
              </Container>
            </HeroBody>
          </Hero>
          {projects.length > 0 ? (
              <Hero id="selectedprojects" isColor={theme}>
                <HeroBody>
                  <Title
                      className="has-text-centered pb-4"
                      style={{ fontWeight: "900" }}
                  >
                    Accepted Students
                  </Title>
                  <Container>
                    <Columns isMultiline>
                      {projects.map(({ node }) => {
                        const title = node.frontmatter.title || node.fields.slug;
                        return node.frontmatter.selected ? (
                            <Column
                                isSize={{
                                  fullhd: 6,
                                  desktop: 6,
                                  tablet: 12
                                }}
                                key={node.fields.slug}
                            >
                              <Card
                                  className={`is-project has-background-${theme}`}
                                  hasTextColor={theme}
                              >
                                <div>
                                  <div className="has-background-black p-2">
                                    <Title className="has-text-white p-1" isSize={4}>{node.frontmatter.selectedStudent}</Title>
                                    <Subtitle
                                        className="has-text-white p-1"
                                        hasTextColor={getOppositeTheme(theme)}
                                    >
                                      <small className="has-text-white">{title}</small>
                                    </Subtitle>
                                  </div>
                                  <div className="has-text-justified p-4">
                                    <small className="has-text-grey-dark">{node.frontmatter.content}</small>
                                  </div>
                                </div>
                              </Card>
                            </Column>
                        ): null;
                      })}
                    </Columns>
                  </Container>
                </HeroBody>
              </Hero>
          ) : null}
          <About />
          <Why />
          <Hero id="timeline" isColor={theme}>
            <Title className="has-text-centered" style={{ fontWeight: "900" }}>
              Timeline
            </Title>
            <HeroBody>
              <div className={`timeline-container`}>
                {timelineData.map((data, idx) => (
                  <div key={idx} className="timeline-item">
                    <div
                      className={`timeline-item-content`}
                      style={{ border: "1.5px solid white" }}
                    >
                      <time>{data.date}</time>
                      <p
                        style={{
                          fontWeight: "730",
                          fontSize: "2.8vh",
                          letterSpacing: "0.2vh"
                        }}
                      >
                        {data.text}
                      </p>
                      <span
                        className={`circle has-text-centered has-background-${theme}`}
                        dangerouslySetInnerHTML={{ __html: data.img }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </HeroBody>
          </Hero>
          {projects.length > 0 ? (
            <Hero id="projects" isColor={theme}>
              <HeroBody>
                <Title
                  className="has-text-centered"
                  style={{ fontWeight: "900" }}
                >
                  Projects
                </Title>
                <Container>
                  <Columns isMultiline>
                    {projects.map(({ node }) => {
                      const title = node.frontmatter.title || node.fields.slug;
                      return (
                          <Column
                              isSize={{
                                fullhd: 4,
                                desktop: 4,
                                tablet: 6
                              }}
                              key={node.fields.slug}
                          >
                            <Animated className="animated-card">
                              <Link to={node.fields.slug}>
                                <Card
                                    className={`is-project has-background-${theme}`}
                                    hasTextColor={theme}
                                >
                                  <CardContent>
                                    <Title>{title}</Title>
                                    <Subtitle
                                        hasTextColor={getOppositeTheme(theme)}
                                    >
                                      <small>{node.frontmatter.topic}</small>
                                    </Subtitle>
                                  </CardContent>
                                </Card>
                              </Link>
                            </Animated>
                          </Column>
                      );
                    })}
                  </Columns>
                </Container>
              </HeroBody>
            </Hero>
          ) : null}
          <FAQ />
          <Contact />
        </Layout>
      ) : <RSVPForm hash={hash} />}
    </HttpsRedirect>
  );
};

export default ProjectsIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___title], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            selected
            content
            selectedStudent
            mentors
            topic
            title
            tags
            cover {
              childImageSharp {
                fluid(maxHeight: 100, quality: 80) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
