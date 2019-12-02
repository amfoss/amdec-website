import React, {useContext} from 'react';
import { Link, graphql } from 'gatsby';
import LazyImage from 'gatsby-image';
import {
  Card,
  CardContent,
  CardImage,
  Column,
  Columns,
  Container,
  Hero,
  HeroBody,
  Title,
  Subtitle,
  Level,
  Button,
} from 'bloomer';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Animated from '../components/animated';
import { ThemeContext, getOppositeTheme } from '../contexts/theme';
import ASoCDark from '../images/ASoCLogo.png';
import ASoCWhite from '../images/ASoC-White.png';
import timelineData from "../components/Data";
import Particles from "react-particles-js"
import About from "../components/about";
import Why from "../components/Why";

const ProjectsIndex = props => {
  const { theme } = useContext(ThemeContext);
  const { data, location } = props;
  const { title: siteTitle } = data.site.siteMetadata;
  const projects = data.allMarkdownRemark.edges;

  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Hero isColor={theme} className="is-fullheight-with-navbar">
        {theme === 'dark' ?
            <Particles
                style={{position: 'absolute'}}
                canvasClassName="particleBg"
                params={{
                  "particles": {
                    "number": {
                      "value": 150,
                      "density": {
                        "enable": false
                      }
                    },
                    "color":{
                      "value": '#fff'
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "speed": 10,
                        "size_min": 0.3
                      }
                    },
                    "line_linked": {
                      "enable": false
                    },
                    "move": {
                      "random": true,
                      "speed": 3,
                      "direction": "down",
                      "out_mode": "out"
                    }
                  },
                  "interactivity": {
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      }
                    },
                    "modes": {
                      "bubble": {
                        "distance": 50,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                      },
                      "repulse": {
                        "distance": 40,
                        "duration": 4
                      }
                    }
                  }
                }}
            />:
            <Particles
                style={{position: 'absolute'}}
                canvasClassName="particleBg"
                params={{
                  "particles": {
                    "number": {
                      "value": 150,
                      "density": {
                        "enable": false
                      }
                    },
                    "color":{
                      "value": '#363636'
                    },
                    "size": {
                      "value": 3,
                      "random": true,
                      "anim": {
                        "speed": 10,
                        "size_min": 0.3
                      }
                    },
                    "line_linked": {
                      "enable": false
                    },
                    "move": {
                      "random": true,
                      "speed": 3,
                      "direction": "down",
                      "out_mode": "out"
                    }
                  },
                  "interactivity": {
                    "events": {
                      "onhover": {
                        "enable": true,
                        "mode": "bubble"
                      },
                      "onclick": {
                        "enable": true,
                        "mode": "repulse"
                      }
                    },
                    "modes": {
                      "bubble": {
                        "distance": 50,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                      },
                      "repulse": {
                        "distance": 40,
                        "duration": 4
                      }
                    }
                  }
                }}
            />
        }
        <HeroBody>
          <Container>
            <Level className="has-text-centered-mobile">
              <React.Fragment>
                <Fade left>
                  {theme === 'dark' ? <img src={ASoCWhite} alt="ASoC Logo" style={{height: '50vh'}} />: <img src={ASoCDark} alt="ASoC Logo" style={{height: '50vh'}} />}
                </Fade>
                <Fade right>
                  <Title style={{fontSize: '10vh', margin: '1rem', fontWeight: '900'}} className="has-text-centered">
                    <Title style={{fontSize: '8vh', margin: '1rem', fontWeight: '900'}}>amFOSS Developer Challenge</Title>
                    <Title style={{fontSize: '5vh', margin: '1rem', fontWeight: '900'}}>
                      2019
                    </Title>
                    <Subtitle style={{marginTop: '2rem', marginBottom: '2rem'}}>
                      <Typist startDelay={1000}>
                        amFOSS Developer Challenge is a 5-week long online programme for the students.
                      </Typist>
                      <Link to="#">
                        <Button isColor={getOppositeTheme(theme)} className="register" style={{marginTop: '1.2rem', width: '15vw'}} isOutlined>Register</Button>
                      </Link>
                    </Subtitle>
                  </Title>
                </Fade>
              </React.Fragment>
            </Level>
          </Container>
        </HeroBody>
      </Hero>
      <About/>
      <Why/>
      <Hero id="timeline" isColor={theme}>
        <Title className="has-text-centered" style={{fontWeight: '900'}}>Timeline</Title>
        <HeroBody>
          <Container>
            <Fade down>
              <div className={`timeline-container`} style={{backgroundColor: getOppositeTheme(theme)}}>
                {timelineData.map((data, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className={`timeline-item-content`}>
                        <time>{data.date}</time>
                        <p style={{fontWeight: '900', fontSize: '3vh'}}>{data.text}</p>
                        <span className={`circle has-text-centered has-background-${theme}`} dangerouslySetInnerHTML={{__html: data.img}}/>
                      </div>
                    </div>
                ))}
              </div>
            </Fade>
          </Container>
        </HeroBody>
      </Hero>
      {
        projects.length > 0 ?
            <Hero id="projects" isColor={theme}>
              <HeroBody>
                <Title className="has-text-centered" style={{fontWeight: '900'}}>Projects</Title>
                <Container>
                  <Fade>
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
                                    {node.frontmatter.cover && (
                                        <CardImage>
                                          <LazyImage
                                              fluid={
                                                node.frontmatter.cover.childImageSharp.fluid
                                              }
                                              alt={title}
                                              className="image"
                                          />
                                        </CardImage>
                                    )}
                                    <CardContent>
                                      <Title>{title}</Title>
                                      <Subtitle hasTextColor={getOppositeTheme(theme)}>
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
                  </Fade>
                </Container>
              </HeroBody>
            </Hero>
        : null
      }
    </Layout>
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
