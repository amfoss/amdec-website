import React, {useContext} from 'react';
import { graphql } from 'gatsby';
import { Hero, Title } from 'bloomer';

import Layout from '../components/layout';
import SEO from '../components/seo';
import {getOppositeTheme, ThemeContext} from "../contexts/theme";

const NotFoundPage = props => {
    const { theme } = useContext(ThemeContext);
    const { data, location } = props;
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="Guidelines" />
            <Hero isFullHeight isColor={theme} isSize="medium">
                <Title className="has-text-centered mt-4">Guidelines</Title>
                <div className="container p-4">
                    <h2 id="definitions">Definitions</h2>
                    <ol className={`pl-4 has-text-${getOppositeTheme(theme)}`}>
                        <li><strong>“Acceptance Date”</strong> means the date, accepted Project Proposals are announced on the Program Website, as set forth on the Program Timeline.    </li>

                        <li><strong>“Coding Period”</strong> means the period of time designated for Students to complete their projects.    </li>

                        <li><strong>“Community Bonding Period”</strong> means the period for accepted Students to get to know their Mentors and prepare to begin work on their Projects, as set forth on the Program Timeline.    </li>

                        <li><strong>“Evaluation”</strong> means an evaluation by the Mentor of his or her Student’s work or an evaluation by the Student of his or her Mentor, as applicable.    </li>

                        <li><strong>“Final Phase”</strong> means the final 2 weeks of the Coding Period (weeks 4-6).    </li>

                        <li><strong>“Final Project Materials"</strong> means a Student’s final source code and associated documentation for his or her Project.    </li>

                        <li><strong>“Final Results”</strong> means the list of Students who passed all of their Evaluations.    </li>

                        <li><strong>“Members”</strong> means the Administrators and Mentors for a project.    </li>

                        <li><strong>“Mentor”</strong> means the individual who registers for the Program as a mentor for a project.    </li>

                        <li><strong>“Mentor Participant Agreement”</strong> means the agreement between amFOSS and an Organization Administrator or Mentor, as applicable, that is presented during registration.    </li>

                        <li><strong>“Participants”</strong> means Administrators, Mentors, and Students.    </li>

                        <li><strong>“Program Administrators”</strong> means amFOSS’s administrators for the Program.    </li>

                        <li><strong>“Program Period”</strong> means the period of time between December 3, 2019 and February 28, 2020.    </li>

                        <li><strong>“Program Timeline”</strong> means the timeline for the Program on the Program Website.    </li>

                        <li><strong>“Program Website”</strong> means the website for the Program located.    </li>

                        <li><strong>“Project”</strong> means an open-source coding project to be worked on by a student as an individual. For the avoidance of doubt, Projects do not include projects for documentation only.    </li>

                        <li><strong>“Project Proposal”</strong> means a Student’s proposal for a Project.    </li>

                        <li><strong>“Project Submissions”</strong> means the work product that a Student submits for a Project, including the Project Proposal and any software and documentation, including Final Project Materials.    </li>

                        <li><strong>“Student”</strong> means the individual who registers for the Program as a student.    </li>

                        <li><strong>“Student Participant Agreement”</strong> means the agreement between amFOSS and a Student that is presented during registration.</li>
                    </ol>

        <h3 id="students">Students</h3>

        <h3 id="eligibility-1">Eligibility</h3>

        <p>Requirements. to participate in the Program, a Student must:</p>

        <ol className="pl-4">
            <li>Participant must be enrolled in or accepted into an accredited institution, including a school,University, Masters program, PhD program, and/or undergraduate program, as of the Acceptance Date. </li>

            <li>For the duration of the Program, be eligible to work in the country in which he or she resides. </li>

            <li>He/she must not be a mentor/admin </li>
        </ol>

        <h3 id="ineligibleindividuals">Ineligible Individuals </h3>

        <ol className="pl-4">
            <li>he or she is an immediate family member (including a parent, sibling) of a Mentor or Project Administrator with the same community or a member of the same household (whether related or not) as a Mentor or Project Administrator with the same community. </li>
        </ol>

        <h3 id="howtoapply">How to Apply. </h3>

        <p>Students who wish to apply for acceptance into the Program must: </p>

        <ol className="pl-4">
            <li>Accept the terms of the Student Participant Agreement, </li>

            <li>Submit a Project Proposal. </li>
        </ol>
                    <h3 id="mentors">Mentors</h3>

                    <h3 id="role">Role</h3>

                    <ol>
                        <li>Mentors must be designated by the primary mentor of the project. By default, we will consider the person who submits the project as the primary mentor. </li>

                        <li>Mentors must accept the terms of the Mentor Participant Agreement. </li>
                    </ol>

                    <h3 id="eligibility">Eligibility</h3>

                    <p>Requirements to participate in the Program, a Mentor must upon registration for the Program, be either:</p>

                    <ol>
                        <li>Be a contributor to an active and viable open source project. </li>

                        <li>Not be a Student in the Program. </li>
                    </ol>

                    <h3 id="responsibilities">Responsibilities</h3>

                    <p>Each Mentor accepted will:</p>
                    <ol>
                        <li>Participate in the Community Bonding period. </li>

                        <li>Provide guidance to his or her Student(s) on their projects:

                            <ul>
                                <li>Use best efforts to respond to Student requests within Twenty-four(24) hours. </li>

                                <li>Provide Evaluations of his or her student(s)’ work as described below in accordance with the community project evaluation criteria. </li>

                                <li>Review the “Roles and Responsibilities” document published on the program Website and be sure they are meeting the responsibilities outlined therein. </li></ul></li>

                        <li>Before program

                            <ul>
                                <li>Accept the invitation in the email sent by amFOSS to become an official mentor. </li>

                                <li>Talk to interested candidates. Share with them project details, goals and some ideas for implementation. </li>

                                <li>Point them to self-contained, easy and newcomer-friendly bugs to fix. </li>

                                <li>Allow all Potential candidates to submit Proposals for the project until the official deadline. </li>

                                <li>Review Proposals and give feedback. </li>

                                <li>Inform program administrator about your decision. </li></ul></li>

                        <li>During program

                            <ul>
                                <li>Set development and communication lans with your mentee. </li>

                                <li>Encourage them to articulate in the community bonding period following our guidelines. </li>

                                <li>Set aside time in your schedule for a weekly meeting with your mentee via video call.</li></ul>

                        </li>
                    </ol>
                    <h2 id="evaluationcriteria">Evaluation Criteria</h2>

        <h3 id=""> </h3>

        <b>Students</b>

        <ol className="pl-4">
            <li>Students will have 3 evaluations biweekly(once in two weeks), the 3rd evaluation will be the final evaluation.  </li>

            <li>Each evaluation requires the student to submit a blog post that covers the following:


                <ul>
                    <li>Work completed </li>

                    <li>Blockers </li>

                    <li>Work planned for the next evaluation phase </li></ul>
            </li>
        </ol>

        <b>Mentors</b>

        <ul className="pl-4">
            <li>Mentors will have to complete the 3 evaluations biweekly without fail. </li>

            <li>Things the mentor should keep track of the student:


                <ul>
                    <li>Communication with the mentor </li>

                    <li>Quality of the patches </li>

                    <li>Regularity in contributing to the project</li></ul>
            </li>
        </ul>
        <h2>Privacy Policy</h2>
                    <ul>
                        <li>amFOSS will process the personal information provided during registration and in any
                            subsequent communications to administer the program (including verifying eligibility to
                            participate in the program, running the program, sending notifications regarding the
                            program, and delivering promotional items).
                        </li>
                        <li>
                            The display name that participants create during registration will be displayed publicly on
                            the program website and any archives of the program website, and will be shared with
                            project mentors for the purpose of communicating with the students to answer their
                            questions and reviewing their proposals and work.

                        </li>
                        <li>
                            Student’s project submissions and contact information (email address and display name)
                            will be shared with the Program Administrator and Mentors to administer the program.

                        </li>
                        <li>
                            Participants can access, update, remove and restrict the processing of their personal
                            information in their program profile till coding period.

                        </li>
                    </ul>
        <h2>Licensing</h2>

        <p>All projects submitted to amDeC are licensed under <a href="https://choosealicense.com/licenses/gpl-3.0/">GNU GPLv3</a> license.</p>

        <p>For submitting projects under a different license please contact the amDeC admin at <a href="mailto:amritapurifoss@gmail.com">amritapurifoss@gmail.com</a>.</p>

</div>
</Hero>
        </Layout>
    );
};

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
