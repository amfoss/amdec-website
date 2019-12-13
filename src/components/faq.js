import React, { useContext, useState } from "react";
import { getOppositeTheme, ThemeContext } from "../contexts/theme";
import { Container, Hero, HeroBody, Title } from "bloomer";
import { Link } from "gatsby";

const FAQData = [
  {
    question: "Q: Why should I participate in amDeC?",
    answer:
      "amDeC provides a platform for students to apply their skills on real world projects and learn along the way. You learn to collaborate effectively and write code according to preset standards.  Whether you already know how to code, or have no prior experience, amDeC is a perfect opportunity for you. There are projects for people with any kind of skill set here. You get to interact and share ideas with some great people. At the end of it, you will have made some great friends from all over the world with whom you can discuss fun projects, get feedback on your code, and just about anything."
  },
  {
    question: "Q: Who can participate in amDeC?",
    answer:
      "Any school / university student is eligible to participate in amDeC."
  },
  {
    question: "Q: How do I participate in amDeC?",
    answer: "Students can participate by registering on the amDeC website."
  },
  {
    question: "Q: Do I have to know how to code in order to participate?",
    answer:
      "Having prior coding knowledge is beneficial but not necessary. You should just have the drive to keep learning new stuff as you progress."
  },
  {
    question: "Q: Is there a selection criteria for participation??",
    answer:
      "Students are selected on the basis of the final project proposal sent by them  before the deadline."
  },
  {
    question: "Q:  Will I get any gifts / rewards ?",
    answer:
      "Participants who clear all three evaluations get a e-certificate along with a T-shirt and some cool swag."
  }
];

const FAQ = () => {
  const { theme } = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [showId, setShowId] = useState(-1);
  const setIds = (show, index) => {
    setShow(!show);
    if (showId === index) setShowId(-1);
    else setShowId(index);
  };
  console.log(show);
  return (
    <Hero id="about" isColor={theme}>
      <Title className="has-text-centered" style={{ fontWeight: "900" }}>
        FAQs
      </Title>
      <HeroBody>
        <Container>
          <div className="row m-0 has-text-left">
            {FAQData.map((faq, index) => (
              <div
                className={`faq col-md-6 col-sm-12`}
                style={{ cursor: "pointer" }}
              >
                <div
                  className={`p-3 my-2 mx-1 card  has-background-${getOppositeTheme(
                    theme
                  )} has-text-${theme}`}
                  key={index}
                  onClick={e => setIds(show, index)}
                >
                  <b>{faq.question}</b>
                  {showId === index ? (
                    <p className="py-3 has-text-justified">{faq.answer}</p>
                  ) : null}
                </div>
              </div>
            ))}
            <div className="col-md-4" />
            <div className="col-md-4">
              <Link to="/faq">
                <div
                  className={`py-3 m-2 card has-text-${getOppositeTheme(
                    theme
                  )}`}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid white"
                  }}
                >
                  <b className="has-text-centered">Know more ?</b>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default FAQ;
