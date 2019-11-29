import React, {useContext} from "react";
import {ThemeContext} from "../contexts/theme";
import {Container, Hero, HeroBody, Title} from "bloomer";

const Why = () => {
    const { theme } = useContext(ThemeContext);
    return(
        <Hero id="why" isColor={theme}>
            <Title className="has-text-centered" style={{fontWeight: '900'}}>Why ASoC ?</Title>
            <HeroBody>
                <Container>
                    <div className="row m-0 has-text-centered-mobile">
                        <div className="col-sm-4 pt-4">
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-3x fa-question" />
                                </div>
                                <div className="col-sm-10">
                                    <p>
                                        Amrita Season of code is a 5-week long online programme for students who are new to open source software development. The programme not only helps students to get involved in open source, but also prepares them for many open source summer programmes; Google Summer of Code being one of them.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 pt-4">
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-3x fa-question" />
                                </div>
                                <div className="col-sm-10">
                                    <p>
                                        Amrita Season of code is a 5-week long online programme for students who are new to open source software development. The programme not only helps students to get involved in open source, but also prepares them for many open source summer programmes; Google Summer of Code being one of them.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 pt-4">
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fas fa-3x fa-question" />
                                </div>
                                <div className="col-sm-10">
                                    <p>
                                        Amrita Season of code is a 5-week long online programme for students who are new to open source software development. The programme not only helps students to get involved in open source, but also prepares them for many open source summer programmes; Google Summer of Code being one of them.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </HeroBody>
        </Hero>
    )
}

export default Why;