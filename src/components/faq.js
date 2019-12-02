import React, {useContext, useState} from "react";
import {getOppositeTheme, ThemeContext} from "../contexts/theme";
import {Container, Hero, HeroBody, Title} from "bloomer";

const FAQData = [
    {
        question: 'Why should I participate in amDeC?',
        answer: 'amDeC is a place where you not only get to learn to apply your current skills but you get a bunch of new ones. Moreover the learning is not only limited to technical skills, amDeC will introduce you to a new standard about collaborating on a project. Not only that, amDeC is a platform which lets you build on your current skills and hone them. There is a project for all skill level at amDeC. Furthermore, you interact and share ideas with some great people. At the end of it, you’ve made some great friends from all over the world with whom you can discuss fun projects, get feedback on your code, and just about anything.',
    },
    {
        question: 'Who can participate in amDeC?',
        answer: 'Any school / university student is eligible to participate in amDeC.',
    },
    {
        question: 'Are there any age restrictions for amDeC?',
        answer: 'There are no age restrictions but one should be enrolled in a school / university.',
    },
    {
        question: 'Which programming languages do I need to be fluent in ?',
        answer: 'amDeC offers various projects in a plethora of languages / frameworks. The choice of project / programming language rests with the student.',
    },
    {
        question: 'On what basis will I be evaluated?',
        answer: 'Student performance is judged on various parameters. A detailed list  of the judgement criteria will be announced later.'
    }
];


const FAQ = () => {
    const { theme } = useContext(ThemeContext);
    const [show , setShow] = useState(false);
    const [showId, setShowId] = useState(-1);
    const setIds = (show, index) => {
        setShow(!show);
        if(showId === index)
            setShowId(-1);
        else
            setShowId(index)
    };
    console.log(show);
    return(
        <Hero id="about" isColor={theme}>
            <Title className="has-text-centered" style={{fontWeight: '900'}}>FAQ</Title>
            <HeroBody>
                <Container>
                    <div className="row m-0 has-text-centered">
                        {FAQData.map((faq, index) => (
                            <div className={`faq col-md-6`} style={{cursor: 'pointer'}}>
                                <div className={`py-3 m-2 card  has-background-${getOppositeTheme(theme)} has-text-${theme}`} key={index} onClick={e => setIds(show, index)}>
                                    <b>{faq.question}</b>
                                </div>
                                {showId === index ?
                                    <div className={`answer card p-2 m-2 has-background-${getOppositeTheme(theme)} has-text-${theme}`}>
                                        <p>{faq.answer}</p>
                                    </div>
                                : null}
                            </div>
                        ))}
                        <div className="col-md-6">
                            <a href="https://amfoss.in">
                                <div className={`py-3 m-2 card  has-background-${getOppositeTheme(theme)} has-text-${theme}`}>
                                    <b>Want to see More ?</b>
                                </div>
                            </a>
                        </div>
                    </div>
                </Container>
            </HeroBody>
        </Hero>
    )
};

export default FAQ