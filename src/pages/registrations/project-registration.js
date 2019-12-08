import React, {useContext, useState} from 'react';
import { graphql } from 'gatsby';
import { Container, Hero, HeroBody, Title } from 'bloomer';
import {Link} from "gatsby";
import dataFetch from '../../utils/dataFetch';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import  {ThemeContext} from "../../contexts/theme";

const ProjectRegistration = props => {
    const { theme } = useContext(ThemeContext);
    const { data, location } = props;
    const siteTitle = data.site.siteMetadata.title;
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [university, setUniversity] = useState("");
    const [community, setCommunity] = useState("");
    const [institution , setInstitution] = useState("");
    const [time, setTime] = useState(0);
    const [impact, setImpact] = useState("");
    const [about, setAbout] = useState("");
    const [resume, setResume] = useState("");
    const [project, setProject] = useState("");
    const [codeRepo , setCodeRepo] = useState("");
    const [description, setDescription] = useState("");
    const [techStack , setTechStack] = useState("");
    const [errorText, setErrorText] = useState("");
    const [successText, setSuccessText] = useState("");
    const [whySelect, setWhySelect] = useState("");
    const [currentState, setCurrentState] = useState("");
    const [expectation, setExpectations] = useState("");
    const [loading, setLoading] = useState(false);

    const query=`
      mutation submitApplication($name: String!, $email: String!, $phone: String!, $formData: JSONString!){
      submitApplication(
        name: $name,
        email: $email,
        phone: $phone,
        formID: 5,
        formData: $formData
      )
      {
        id
      }
    }
`;
    const submitForm = async variables =>
        dataFetch({ query, variables });

    const register = () => {
        const emailRegex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        const phoneRegex = /^\d{10}$/;
        if (name === '' || phone === '' || email === '' || gender === '', age === '', university === '', community === '', institution === '', time ==='', impact ==='', about ==='', project==='', codeRepo==='', description==='', techStack==='',whySelect ==='', currentState==='', expectation==='') {
            setLoading(false);
            setErrorText("Please Fill All the Fields");
        } else if (emailRegex.test(email) === false) {
            setLoading(false);
            setErrorText( "Enter Proper Email")
        } else if (phoneRegex.test(phone) === false) {
            setLoading(false);
            setErrorText( "Enter Proper Phone No")
        } else {
            const json = { gender, age, university, community,institution, time,impact,about,resume,project,codeRepo, description, techStack,whySelect, currentState,expectation};
            const variables = { name, email, phone, formData: JSON.stringify(json) };
            submitForm(variables).then(r=>{
                if (Object.prototype.hasOwnProperty.call(r, "errors")) {
                    setErrorText(r.errors[0].message)
                } else {
                    setSuccessText(r.data.id);
                    setErrorText("");
                }
            })
        }
    };

    return (
        <Layout location={location} title={siteTitle}>
            { !loading ?
                <form
                    onSubmit={e => {
                        setLoading(true);
                        register();
                        e.preventDefault();
                    }}>
                    <SEO title="Project Registation" />
                    <Hero isColor={theme} isFullHeight isSize="medium">
                            <Container>
                                <Title className="has-text-centered p-2 mt-4">Project Registration</Title>
                                <div className={`forms card`}>
                                    <Title className={`has-text-dark p-4`}>Mentor Info</Title>
                                    <div className="row m-0 px-4 pb-4">
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Name *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Full Name"
                                                    name="name"
                                                    className="form-control"
                                                    onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Phone *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Phone Number"
                                                    name="phone"
                                                    className="form-control"
                                                    onChange={e => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Email *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Email"
                                                    name="email"
                                                    className="form-control"
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 p-0">
                                            <div className="m-2">
                                                <label>Gender *</label>
                                                <select className="form-control text-dark" onChange={e => setGender(e.target.value)}>
                                                    <option value="" hidden disabled selected>Select Gender</option>
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
                                                    type="text"
                                                    placeholder="Enter Age"
                                                    name="age"
                                                    className="form-control"
                                                    onChange={e => setAge(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 p-0">
                                            <div className="m-2">
                                                <label>University *</label>
                                                <select className="form-control text-dark" onChange={e => setUniversity(e.target.value)}>
                                                    <option value="" hidden disabled selected>Select University/School</option>
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
                                                    onChange={e => setInstitution(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Resume Link</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Resume Link (Link to google drive)"
                                                    name="resume"
                                                    className="form-control"
                                                    onChange={e => setResume(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>About *</label>
                                                <textarea
                                                    rows="5" cols="50"
                                                    placeholder="Enter about you"
                                                    name="about"
                                                    className="form-control"
                                                    onChange={e => setAbout(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`forms card mt-4`}>
                                    <Title className={`has-text-dark p-4`}>Project Info</Title>
                                    <div className="row m-0 px-4 pb-4">
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Project Name *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Project Name"
                                                    name="projectname"
                                                    className="form-control"
                                                    onChange={e => setProject(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Repo Link *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Code Repo Link"
                                                    name="codelink"
                                                    className="form-control"
                                                    onChange={e => setCodeRepo(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>Repo Link *</label>
                                                <textarea
                                                    rows="5" cols="50"
                                                    placeholder="Describe your project"
                                                    name="describe about project"
                                                    className="form-control"
                                                    onChange={e => setDescription(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Tech Stack *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Tech Stack"
                                                    name="techstack"
                                                    className="form-control"
                                                    onChange={e => setTechStack(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <div className="m-2">
                                                <label>Approximate Time *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Approximate Time Required for the proposed projects by Milestones (Week-wise)"
                                                    name="time required"
                                                    className="form-control"
                                                    onChange={e => setTime(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>Community *</label>
                                                <textarea
                                                    rows="5" cols="50"
                                                    placeholder="Are there any current users?, Who would be the potential users of your project?, How is the project going to be useful for the community?"
                                                    name="community"
                                                    className="form-control"
                                                    onChange={e => setCommunity(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>Impact in Users *</label>
                                                <textarea
                                                    rows="5" cols="50"
                                                    placeholder="What are the current solutions available that solve the same problem?, How is your project different / better than the existing solutions?"
                                                    name="impact"
                                                    className="form-control"
                                                    onChange={e => setImpact(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>Current state of the project *</label>
                                                <textarea
                                                    placeholder="What is the current state of the project (implementation),
                                                         how much work is done?,
                                                         How often are you working on it?, Are there any other collaborators working on the project?"
                                                    rows="5" cols="50"
                                                    name="projectdoing"
                                                    className="form-control"
                                                    onChange={e => setCurrentState(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>Why should we select ? *</label>
                                                <textarea
                                                    placeholder="Why should we select the project for this program?"
                                                    rows="5" cols="50"
                                                    name="why"
                                                    className="form-control"
                                                    onChange={e => setWhySelect(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 p-0">
                                            <div className="m-2">
                                                <label>What do you expect from amFOSS? *</label>
                                                <textarea
                                                    placeholder="What do you expect from amFOSS?"
                                                    rows="5" cols="50"
                                                    name="why"
                                                    className="form-control"
                                                    onChange={e => setExpectations(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 form-check">
                                            <div className="m-2 text-dark text-center d-flex justify-content-center">
                                                <label className="form-check-label text-dark" htmlFor="undertaking">
                                                    By submitting this application, I agree to the <Link to="/codeofconduct" className="text-dark">Code of Conduct</Link> of the organizers.
                                                </label>
                                            </div>
                                        </div>
                                        {
                                            errorText !== '' ?
                                                <div className="w-100 w-100 text-center m-2 alert alert-danger" role="alert">
                                                    {errorText}
                                                </div> : null
                                        }
                                        <div className="col-md-2" />
                                        <div className="col-md-8 p-2 text-center text-md-right">
                                            <div className="m-2">
                                                <button
                                                    type="submit"
                                                    className="button btn btn-block px-4"
                                                    style={{backgroundColor: 'black', color: 'white'}}
                                                >
                                                    REGISTER
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                    </Hero>
                </form> : successText !== '' ? (<div className="alert alert-success">
                        Thank You! You have successfully signed up for the event.
                        We will get back to soon, meanwhile dont forget to bring your friends as well!
                    </div>) :
                    <div className="alert alert-warning">Submitting. Please Wait</div>
            }
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
