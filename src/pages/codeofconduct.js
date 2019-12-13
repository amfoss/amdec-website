import React, { useContext } from "react";
import { graphql } from "gatsby";
import { Hero, Title } from "bloomer";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ThemeContext } from "../contexts/theme";

const Codeofconduct = props => {
  const { theme } = useContext(ThemeContext);
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Code of Conduct" />
      <Hero isFullHeight isColor={theme} isSize="medium">
        <Title className="has-text-centered mt-4">Code of conduct</Title>
        <div className="container py-4">
          <h2 id="communicationrules">Communication rules</h2>
          <div className="pl-3">
            <b>
              Whether we are participating as professionals or volunteers, we
              value professionalism in all interactions and take responsibility
              for our own speech. Be kind to others. Do not insult or put down
              other participants. Harassment and other exclusionary behavior are
              not acceptable. This includes, but is not limited to
            </b>

            <ul className="pl-4">
              <li>
                Violent threats or language directed against another person.{" "}
              </li>

              <li>
                Sexist, racist, or otherwise discriminatory jokes and language.{" "}
              </li>

              <li>Posting sexually explicit or violent material. </li>

              <li>
                Posting (or threatening to post) other people's personally
                identifying information ("doxing").{" "}
              </li>

              <li>
                Sharing private content, such as emails sent privately or
                non-publicly, or unlogged forums such as IRC channel history.{" "}
              </li>

              <li>
                Personal insults, especially those using racist or sexist terms.{" "}
              </li>

              <li>Unwelcome sexual attention. </li>

              <li>Excessive or unnecessary profanity. </li>

              <li>
                Repeated harassment of others. In general, if someone asks you
                to stop, then stop.{" "}
              </li>

              <li>
                Advocating for, or encouraging, any of the above behavior.
              </li>
            </ul>
          </div>

          <h2 id="ircchannel">IRC Channel</h2>
          <ol className="pl-4">
            <li>
              Do not quote messages that were sent to you by other people in
              private query, unless agreed beforehand.{" "}
            </li>

            <li>
              If you want to explain to someone how to use IRC, do it privately.{" "}
            </li>

            <li>
              Never send messages with colours (i.e. colour codes); use plain
              text instead.{" "}
            </li>

            <li>
              Do not send "test" messages to determine whether your IRC client
              is working. We have a #test channel for that.
            </li>
          </ol>

          <h2 id="coderepositoriesgithub">Code Repositories</h2>

          <ol className="pl-4">
            <li>No insult in commits or commit messages.</li>

            <li>
              Respect the{" "}
              <a href="http://chris.beams.io/posts/git-commit/">
                correct commit log style
              </a>
              .
            </li>

            <li>
              When you would like to have new changes to be in the project,
              please do a pull-request which can be reviewed by the mentors
              before being merged into the project.
            </li>
          </ol>
        </div>
      </Hero>
    </Layout>
  );
};

export default Codeofconduct;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
