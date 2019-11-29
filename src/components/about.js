import React, {useContext} from "react";
import {ThemeContext} from "../contexts/theme";
import {Container, Hero, HeroBody, Title} from "bloomer";

const About = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <Hero id="about" isColor={theme}>
            <Title className="has-text-centered" style={{fontWeight: '900'}}>About</Title>
            <HeroBody>
                <Container>
                    <div className="row m-0 has-text-centered-mobile">
                        <div className="col-sm-6 pt-4">
                            <img src="https://raw.githubusercontent.com/amfoss/website/master/src/images/logo_light.png" style={{width: '45vh'}} />
                        </div>
                        <div className="col-sm-6 pt-4">
                            <p style={{fontSize: '2.7vh'}}>
                                Amrita Season of code is a 5-week long online programme for students who are new to open source software development. The programme not only helps students to get involved in open source, but also prepares them for many open source summer programmes; Google Summer of Code being one of them.
                            </p>
                        </div>
                    </div>
                </Container>
            </HeroBody>
        </Hero>
    )
}

export default About