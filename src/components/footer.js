import React, { useContext } from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Button,
  Columns,
  Column,
  Container,
  Footer as BloomerFooter,
  Icon,
  Level,
  LevelItem,
  LevelLeft,
  LevelRight,
  Media,
  MediaContent
} from "bloomer";
import { ThemeContext } from "../contexts/theme";
import { Link } from "gatsby";
import amFOSSLogo from "../images/logo_light.png";
import Github from "../images/github.png";

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
                  <Media style={{ alignItems: "center" }}>
                    <MediaContent>
                      <p>
                        <strong>
                          <a
                            href="https://amfoss.in/"
                            className={`has-text-light`}
                          >
                            <img
                              src={amFOSSLogo}
                              className="p-1"
                              alt="amFOSS Logo"
                              style={{ height: "6vh" }}
                            />
                          </a>
                        </strong>
                        <br />
                        <span className="has-text-centered">
                          A student-run community with over 50+ members from
                          Amrita Vishwa Vidyapeetham, Amritapuri.
                        </span>
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
                        href="mailto:amritapurifoss@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="gmail"
                      >
                        <img
                          src="https://img.icons8.com/color/48/000000/gmail.png"
                          alt="gmail icon"
                        />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        isInverted={theme === "light"}
                        isColor="info"
                        href={`https://twitter.com/${data.site.siteMetadata.social.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <Icon className="fab fa-twitter fa-lg" />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        isInverted={theme === "light"}
                        isColor="danger"
                        href={`https://instagram.com/${data.site.siteMetadata.social.instagram}`}
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
                        isInverted={theme === "light"}
                        isColor="info"
                        href={`https://linkedin.com/company/${data.site.siteMetadata.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <Icon className="fab fa-linkedin fa-lg" />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        href={`https://github.com/${data.site.siteMetadata.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                      >
                        <Icon className="fab fa-github fa-lg" />
                      </Button>
                    </Column>
                    <Column>
                      <Button
                        href={`https://webchat.freenode.net/${data.site.siteMetadata.social.irc}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="IRC"
                      >
                        <Icon className="fa fa-comments fa-lg" />
                      </Button>
                    </Column>
                  </Columns>
                </LevelItem>
              </LevelRight>
            </Level>
            <div className="row">
              <div className="col-sm-4">
                <p className="codeofconduct">
                  <Link to="/codeofconduct" style={{ color: "white" }}>
                    Code of Conduct
                  </Link>
                </p>
              </div>
            </div>
            <div className="has-text-centered" style={{ marginTop: "10px" }}>
              Thank You
            </div>
            <div className="has-text-centered footer-logo" style={{ marginTop: "10px" }}>
              <a href="https://github.com/">
                <img className="px-2" src={Github} alt="Github" />
              </a>
            </div>
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
          irc
        }
      }
    }
  }
`;

export default Footer;
