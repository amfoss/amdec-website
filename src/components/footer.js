import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import {Button, Columns, Column, Container, Footer as BloomerFooter, Icon, Level, LevelItem, LevelLeft, LevelRight, Media, MediaContent} from 'bloomer';
import { ThemeContext, getOppositeTheme } from '../contexts/theme';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StaticQuery
      query={footerQuery}
      render={data => (
        <BloomerFooter className={`is-dark`}>
          <Container>
            <Level className="has-text-centered-mobile">
              <LevelLeft>
                <LevelItem>
                  <Media style={{ alignItems: 'center' }}>
                    <MediaContent>
                      <p>
                        <strong>
                          <a
                            href="https://amfoss.in/"
                            className={`has-text-light`}
                          >
                            amFOSS
                          </a>
                        </strong>
                        <br />
                          A student-run community with over 50+ members from Amrita Vishwa Vidyapeetham, Amritapuri.
                      </p>
                    </MediaContent>
                  </Media>
                </LevelItem>
              </LevelLeft>
              <LevelRight className="is-inline-flex-mobile">
                <LevelItem>
                  <Columns isMobile>
                    <Column>
                      <Button
                        isInverted={theme === 'light'}
                        isColor="info"
                        href={`https://twitter.com/${
                          data.site.siteMetadata.social.twitter
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <Icon className="fab fa-twitter fa-lg" />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        isInverted={theme === 'light'}
                        isColor="danger"
                        href={`https://instagram.com/${
                          data.site.siteMetadata.social.instagram
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <Icon
                          className="fab fa-instagram fa-lg"
                          alt="Instagram"
                        />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        isInverted={theme === 'light'}
                        isColor="info"
                        href={`https://linkedin.com/company/${
                          data.site.siteMetadata.social.linkedin
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <Icon className="fab fa-linkedin fa-lg" />
                      </Button>
                    </Column>
                      <Column>
                          <Button
                              isInverted={theme === 'light'}
                              isColor="light"
                              href={`https://github.com/${
                                  data.site.siteMetadata.social.github
                              }`}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="Github"
                          >
                              <Icon className="fab fa-github fa-lg" />
                          </Button>
                      </Column>
                  </Columns>
                </LevelItem>
              </LevelRight>
            </Level>
          </Container>
        </BloomerFooter>
      )}
    />
  );
};

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          instagram
          linkedin
          twitter
          github
        }
      }
    }
  }
`;

export default Footer;
