import React, {useContext} from "react";
import {ThemeContext} from "../contexts/theme";
import {Container, Hero, HeroBody, Title} from "bloomer";
import BlackDesign from '../images/design_dark.png';
import LightDesign from '../images/design_light.png';

const About = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <Hero id="about" isColor={theme}>
            <Title className="has-text-centered" style={{fontWeight: '900'}}>About</Title>
            <HeroBody>
                <Container>
                    <div className="row m-0 has-text-centered-mobile">
                        <div className="col-sm-4 pt-4">
                            {theme === 'dark' ? <img alt="amFOSS" src={LightDesign} style={{width: '45vh'}}/>: <img alt="amFOSS" src={BlackDesign} style={{width: '45vh'}}/>}
                        </div>
                        <div className="col-sm-8 pt-4">
                            <p style={{fontSize: '2.7vh'}}>
                                Amrita Season of code is a 5-week long online programme for students who are new to open source software development. The programme not only helps students to get involved in open source, but also prepares them for many open source summer programmes; Google Summer of Code being one of them.
                            </p>
                        </div>
                    </div>
                </Container>
            </HeroBody>
        </Hero>
    )
};

export default About