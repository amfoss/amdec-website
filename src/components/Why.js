import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { Hero, HeroBody, Title } from "bloomer";
import why from "../images/why.svg";

const Why = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Hero id="why" isColor={theme}>
      <HeroBody>
        <div className="row m-0 has-text-centered-mobile">
          <div className="col-md-7">
            <Title className="has-text-left" style={{ fontWeight: "900" }}>
              Why amDeC ?
            </Title>
            <p
              style={{ fontSize: "3vh", letterSpacing: "1.3px" }}
              className="has-text-justified"
            >
              Do you want to hone your technical skills and gain knowledge that
              won’t be given in a classroom? Do you want to contribute to some
              real-world projects with a large impact? Or are you a beginner who
              wants to contribute to open source but is not sure how to take the
              first step? If your answer to any of the above questions is yes,
              then you’re in the right place! amDeC is the perfect opportunity
              for you whether you’re just starting out or you’re a seasoned
              developer. So what are you waiting for? Go ahead, register and
              have a great experience!
            </p>
          </div>
          <div className="col-md-5 has-text-centered">
            <img src={why} alt="why amDeC ?" style={{ height: "55vh" }} />
          </div>
        </div>
      </HeroBody>
    </Hero>
  );
};

export default Why;
