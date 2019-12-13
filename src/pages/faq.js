import React, { useContext } from "react";
import { graphql } from "gatsby";
import { Hero, Title } from "bloomer";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ThemeContext } from "../contexts/theme";

const FAQ = props => {
  const { theme } = useContext(ThemeContext);
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="FAQs" />
      <Hero isFullHeight isColor={theme} isSize="medium">
        <Title className="has-text-centered mt-4">FAQs</Title>
        <div className="container p-4">
          <h2 id="studentfaqs">Student FAQs</h2>

          <ol className="pl-4">
            <li>
              <p>
                <strong>Why should I participate in amDeC?</strong>
                <p>
                  amDeC provides a platform for students to apply their skills
                  on real-world projects and learn along the way. You learn to
                  collaborate effectively and write code according to preset
                  standards. Whether you already know how to code, or have no
                  prior experience, amDeC is a perfect opportunity for you.
                  There are projects for people with any kind of skill set here.
                  You get to interact and share ideas with some great people. At
                  the end of it, you will have made some great friends from all
                  over the world with whom you can discuss fun projects, get
                  feedback on your code, and just about anything.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>Who can participate in amDeC?</strong>
                <p>
                  Any school / university student is eligible to participate in
                  amDeC.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>How do I participate in amDeC?</strong>
                <p>
                  Students can participate by registering on the amDeC website.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Is there a selection criteria for participation?
                </strong>
                <p>
                  Students are selected on the basis of the final project
                  proposal sent by them before the deadline.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Do I have to know how to code in order to participate?
                </strong>
                <p>
                  Having prior coding knowledge is beneficial but not necessary.
                  You should just have the drive to keep learning new stuff as
                  you progress.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>Are there any age restrictions for amDeC?</strong>
                <p>
                  There are no age restrictions but one should be enrolled in a
                  school/university.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>How many proposals can I submit?</strong>
                <p>
                  Students can submit any number of proposals for the projects
                  available but there will only be one student per project.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>Will I get any gifts/rewards?</strong>
                <p>
                  Participants who clear all three evaluations get an
                  e-certificate along with a T-shirt and some cool swag.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Can I be a mentor and a student at the same time?
                </strong>
                <p>
                  A participant can be either a student or a mentor, but not
                  both.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Where does amDeC occur? Do I have to travel somewhere?
                </strong>
                <p>
                  It’s an online contest where students have to work remotely by
                  collaborating with their project mentor over the project chat
                  channel and platforms like GitHub.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Which programming languages do I need to be fluent in?
                </strong>
                <p>
                  amDeC offers various projects in a plethora of
                  languages/frameworks. The choice of project/programming
                  language rests with the student.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Who is responsible for organizing the event and making
                  relevant decisions?
                </strong>{" "}
                <br />
                <p>
                  amDeC is organized by <a href="https://amfoss.in/">amFOSS</a>,
                  Leading Open Source club in India.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>On what basis will I be evaluated?</strong>
                <p>
                  Student performance is judged on various parameters. A
                  detailed list of the judgment criteria will be announced
                  later.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  Can a group submit a proposal together to work on one project?
                </strong>
                <p>No, one student will be mentored per project.</p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  What is the last date for applying/submission of proposal?
                </strong>
                <p>
                  The last date for applying would be on the 31st of December by
                  11:59 pm.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  What should I do if my mentor is not responding to my
                  questions?
                </strong>
                <p>
                  If the mentor is not replying within 24 hours, send us an
                  email at{" "}
                  <a href="mailto:amritapurifoss@gmail.com">
                    amritapurifoss@gmail.com
                  </a>
                  . We will look into the matter for you.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  What if I have a question not answered in this FAQ?
                </strong>
                <p>
                  No issues, just send an email to{" "}
                  <a href="mailto:amritapurifoss@gmail.com">
                    amritapurifoss@gmail.com
                  </a>{" "}
                  with the request in question. We will reply to your query as
                  quickly as possible.
                </p>
              </p>
            </li>
          </ol>

          <h2 id="mentorfaqs">Mentor FAQs</h2>

          <ol className="pl-3">
            <li>
              <strong>
                What are the eligibility criteria for becoming a mentor?
              </strong>
            </li>
            <ul className="pl-3">
              <li>Have a project on GitHub.</li>

              <li>
                Have a dedicated public communication channel for the project,
                where all the conversations regarding the project will take
                place.
              </li>
            </ul>
            <li>
              <p>
                <strong>Why should I participate as a mentor?</strong>
                Having difficulty implementing a feature in your project? Want
                to spread the word about your project to the world? If so, amDeC
                is the right place for you! The program provides an opportunity
                for developers to get help in their projects and collaborate
                with fellow developers who share the same vision as them.
              </p>
            </li>

            <li>
              <p>
                <strong>
                  What is a good project to be brought under the program?
                </strong>{" "}
                <br />A good Open Source project to propose for amDec
              </p>
            </li>
            <ul className="pl-3">
              <li>
                is established enough to allow collaboration (beyond the set-up
                phase){" "}
              </li>

              <li>has a dedicated contact person/maintainer </li>

              <li>
                is beginner/junior-friendly (open to newcomers; maintains an
                inviting, helpful and understanding communication and a
                non-discriminating environment, good documentation, etc.){" "}
              </li>

              <li>abides by our code of conduct </li>

              <li>
                ideally also has a Code of Conduct or similar guidelines for the
                contributors{" "}
              </li>
            </ul>
            <li>
              <p>
                <strong>Can I mentor multiple projects at a time?</strong>
                <p>
                  As a mentor, you can mentor multiple projects provided that
                  they have officially been accepted as amDeC projects.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>What is expected of a mentor?</strong>
              </p>
            </li>
            <ul className="pl-3">
              <li>
                Provide ample documentation for your proposed project, including
                a getting started guide.{" "}
              </li>

              <li>Verify all patches submitted by your mentee </li>

              <li>
                Ensure that you have sufficient knowledge to meet with your
                mentee and respond to any questions that may arise.{" "}
              </li>

              <li>
                Set expectations and milestones for each week and discuss the
                outcome of expectations during evaluations.
                <ul>
                  <li>
                    Keep track of milestone progress to share as evaluations.
                  </li>
                </ul>
              </li>

              <li>
                Notify Program Leader of any issues (Lack of participation,
                communication or vacations).{" "}
              </li>

              <li>Provide evaluation reports.</li>
            </ul>
            <li>
              <p>
                <strong>
                  I'd like to submit my project, but what if I have no time to
                  be a mentor?
                </strong>
                <p>
                  For a project to be considered for the program, the students
                  must have someone they can rely on to answer their
                  project-specific questions. Hence, only projects with a mentor
                  will be considered.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>How do I submit my project for the program?</strong>
                <p>
                  Projects can be submitted by registering as a mentor on the
                  amDeC website.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>
                  The final project by the end of this program belongs to who?
                </strong>
                <p>
                  The final product legally belongs to the mentor. amDeC is just
                  a platform that allows collaboration between a student and a
                  mentor to work on a project.
                </p>
              </p>
            </li>

            <li>
              <p>
                <strong>Got more questions?</strong>
                <p>
                  Feel free to drop a mail at{" "}
                  <a href="mailto:amritapurifoss@gmail.com">
                    amritapurifoss@gmail.com
                  </a>
                </p>
              </p>
            </li>
          </ol>
        </div>
      </Hero>
    </Layout>
  );
};

export default FAQ;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
