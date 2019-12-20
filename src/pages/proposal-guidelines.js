import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { Hero, HeroBody, Icon, Title } from "bloomer";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Proposal = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <SEO title="Proposal Guidelines" />
            <Hero id="proposalGuidelines" isColor={theme}>
                <Title className="has-text-centered" style={{ fontWeight: "900" }}>
                   Proposal Guidelines
                </Title>
                <HeroBody>
                    <div className="p-4 has-text-justified">
                        <Title>What is a proposal?</Title>
                        <p>A proposal is a description of how you aim to complete your project. In the proposal, you describe how much of the project you understand and how do you plan to complete the tasks or improvements suggested will be taken up.</p>
                        <br />
                        <b>What should a proposal contain?</b>
                        <p>
                            A decent proposal should contain the following:
                            <br />
                            1. <b>Name and contact information:</b> This should include your full name, email address, postal address, chat channel usernames, and other necessary contact information. <br />
                            2. <b>About yourself:</b> Mention a few things about yourself, what is your prior experience if any, what motivated you to participate in amDeC, your coding skills and any other details about yourself that you want to share. <br />
                            3. <b>Title:</b>  Make a short, interesting title to make a reviewer want to read your proposal.<br />
                            4. <b>Abstract:</b> A brief description of what is the current state of the project in your own opinion.<br />
                            5. <b>Deliverables:</b> This is the most important part. Here you describe how you plan to complete the tasks you take up. To make it interesting and more understandable, you can attach code snippets here and even mockups of new features that you propose to add.<br />
                            6. <b>Timeline:</b> Here, make a detailed timeline of how you aim to complete your work. A good way is to split work week-by-week and describe in very concise ways what to aim to complete each week. It would be great if you mention how many hours a week you will be able to spend working on this program and also if you’ll be unavailable at a particular time during the program.<br />
                        </p>
                        <Title>Miscellaneous details</Title>
                        <p>
                            1. If you already contributed to the project before, do mention your prior contributions <br/>
                            2. Existing coding skills <br />
                            3. How will your proposal help improve the current state of the project <br/>
                            If you think of any other details that you feel like adding, feel free to do so.
                        </p>
                    </div>
                </HeroBody>
            </Hero>
        </Layout>
    );
};

export default Proposal;
