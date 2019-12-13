import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { Hero, HeroBody, Icon, Title } from "bloomer";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Hero id="contact" isColor={theme}>
      <Title className="has-text-centered" style={{ fontWeight: "900" }}>
        Contact Us
      </Title>
      <HeroBody>
        <div className="row m-0">
          <div className="col-lg-8 p-4">
            <iframe
              id="location-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2555.517282504074!2d76.49219936127913!3d9.093913377090402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc224ac2f7bde6dd!2sFOSS%40Amrita!5e0!3m2!1sen!2sin!4v1569567196585!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen={false}
            />
          </div>
          <div className="col-lg-4 p-4">
            <div className="row m-4 p-4">
              <div className="has-text-centered">
                <a href="mailto:amritapurifoss@gmail.com">
                  <Icon className="fa fa-envelope fa-4x" />
                </a>
                <p className="pt-2">Mail us at amritapurifoss@gmail.com</p>
              </div>
            </div>
            <div className="row m-4 p-4">
              <div className="has-text-centered">
                <a href="https://webchat.freenode.net/#amfoss-amdec">
                  <Icon className="fa fa-comments fa-4x" />
                </a>
                <p className="pt-2">
                  Join us on the IRC channel #amfoss-amdec on Freenode! If you
                  don't have IRC set up you can easily connect from your web
                  browser too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </HeroBody>
    </Hero>
  );
};

export default Contact;
