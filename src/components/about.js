import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { Hero, HeroBody, Title } from "bloomer";
import BlackDesign from "../images/design_dark.png";
import LightDesign from "../images/design_light.png";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Hero id="about" isColor={theme}>
      <HeroBody>
        <div className="row m-0 has-text-centered-mobile has-text-centered">
          <div className="col-sm-4 pt-4">
            <a href="https://amfoss.in">
              {theme === "black" ? (
                <img alt="amFOSS" src={LightDesign} style={{ width: "50vh" }} />
              ) : (
                <img alt="amFOSS" src={BlackDesign} style={{ width: "50vh" }} />
              )}
            </a>
          </div>
          <div className="col-sm-8 pt-4">
            <Title className="has-text-left" style={{ fontWeight: "900" }}>
              About
            </Title>
            <p
              style={{ fontSize: "3vh", letterSpacing: "1.3px" }}
              className="has-text-justified"
            >
              amDeC is amFOSS Developer Challenge, a 6-week long coding program,
              brought to you by amFOSS. amFOSS is India's Leading FOSS &
              Computer Science Club, at Amrita Vishwa Vidyapeetham, Amritapuri,
              Kerala. With 50+ members, amFOSS has helped 100+ passionate
              students to transform into successful & innovative engineers. Our
              aim is to spread awareness about open-source and improve the
              culture of the open-source community. amDeC is a platform for
              student developers to get started with open source and hone their
              technical skills by working on real-world projects that interest
              them. We encourage people from all backgrounds, irrespective of
              their technical experience to participate and contribute to
              technical projects from diverse fields.
            </p>
          </div>
        </div>
      </HeroBody>
    </Hero>
  );
};

export default About;
