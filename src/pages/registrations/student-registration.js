import React, { useContext, useState } from "react";
import { graphql } from "gatsby";
import { Container, Hero, HeroBody, Title } from "bloomer";
import { Link } from "gatsby";
import { register, submitForm } from "../../helpers/formSubmission";

import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { ThemeContext } from "../../contexts/theme";
import useSubmitForm from "../../hooks/submit-form";

const ProjectRegistration = props => {
  const { theme } = useContext(ThemeContext);
  const { data, location } = props;
  const siteTitle = data.site.siteMetadata.title;
  const [errorText, setErrorText] = useState("");
  const [successText, setSuccessText] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleInputChange, inputs } = useSubmitForm();

  return (
    <Layout location={location} title={siteTitle}>
      {!loading ? (
        <form
          onSubmit={async e => {
            setLoading(true);
            await register(inputs, setErrorText, setSuccessText);
            e.preventDefault();
          }}
        >
          <SEO title="Student Registation" />
          <Hero isColor={theme} isFullHeight isSize="medium">
            <Container>
              <Title className="has-text-centered p-2 mt-4">
                Student Registration
              </Title>
              <div className={`forms card`}>
                <Title className={`has-text-dark p-4`}>Student Info</Title>
                <div className="row m-0 px-4 pb-4">
                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>Name *</label>
                      <input
                        type="text"
                        placeholder="Enter Full Name"
                        name="name"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>GitHub username *</label>
                      <input
                        type="text"
                        placeholder="Enter GitHub UserName"
                        name="githubusername"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        placeholder="Enter Phone Number"
                        name="phone"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>Email *</label>
                      <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 p-0">
                    <div className="m-2">
                      <label>Gender *</label>
                      <select
                        className="form-control text-dark"
                        name="gender"
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" hidden disabled selected>
                          Select Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>Age *</label>
                      <input
                        type="number"
                        placeholder="Enter Age"
                        name="age"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 p-0">
                    <div className="m-2">
                      <label>University *</label>
                      <select
                        className="form-control text-dark"
                        name="university"
                        onChange={handleInputChange}
                        required
                      >
                        <option value="" hidden disabled selected>
                          Select University/School
                        </option>
                        <option value="university">University</option>
                        <option value="school">School</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 p-0">
                    <div className="m-2">
                      <label>Institution Name *</label>
                      <input
                          type="text"
                          placeholder="Enter Institution Name"
                          name="institution"
                          className="form-control"
                          onChange={handleInputChange}
                          required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-0">
                    <div className="m-2">
                      <label>What do you expect from amFOSS? *</label>
                      <textarea
                        rows="5"
                        cols="50"
                        placeholder="What do you expect from amfoss"
                        name="expectation"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-12 p-0">
                    <div className="m-2">
                      <label>About *</label>
                      <textarea
                        rows="5"
                        cols="50"
                        placeholder="Enter about you"
                        name="about"
                        className="form-control"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="row m-0 px-4 pb-4">
                  <div className="col-md-12 form-check">
                    <div className="m-2 text-dark text-center d-flex justify-content-center">
                      <label
                        className="form-check-label text-dark"
                        htmlFor="undertaking"
                      >
                        By submitting this application, I agree to the{" "}
                        <Link to="/codeofconduct" className="text-dark">
                          Code of Conduct
                        </Link>{" "}
                        of the organizers.
                      </label>
                    </div>
                  </div>
                  {errorText !== "" ? (
                    <div
                      className="w-100 w-100 text-center m-2 alert alert-danger"
                      role="alert"
                    >
                      {errorText}
                    </div>
                  ) : null}
                  <div className="col-md-2" />
                  <div className="col-md-8 p-2 text-center text-md-right">
                    <div className="m-2">
                      <button
                        type="submit"
                        className="button btn btn-block px-4"
                        style={{ backgroundColor: "black", color: "white" }}
                      >
                        REGISTER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Hero>
        </form>
      ) : successText !== "" ? (
        <div className="alert alert-success">
          Thank You! You have successfully signed up for the event. We will get
          back to soon, meanwhile dont forget to bring your friends as well!
        </div>
      ) : (
        <div className="alert alert-warning">Submitting. Please Wait</div>
      )}
    </Layout>
  );
};

export default ProjectRegistration;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
