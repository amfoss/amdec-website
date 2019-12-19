import React from 'react';
import dataFetch from "../utils/dataFetch";

const query = `
mutation($formID: Int!, $hash: String!,$phone: String!, $response: Boolean!, $details: String!)
{
  submitRSVP(formID:$formID, hash: $hash, phone: $phone, response: $response, details:$details)
  {
    status
  }
}
`;

class RSVPForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            phone: '',
            response: true,
            details: '',
            loading: false,
            successText: '',
            errorText: ''
        }
    }
    submit = async() =>
    {
        const variables = {
            'formID': 6,
            'hash': this.props.hash,
            'phone': this.state.phone,
            'response': this.state.response,
            'details': this.state.details,
        };
        const response = await dataFetch({ query, variables });
        if (Object.prototype.hasOwnProperty.call(response, 'errors')) {
            this.setState({ loading: false, errorText: response.errors[0].message});
        } else {
            this.setState({
                successText: response.data.submitRSVP.status,
                errorText: ''
            })
        }
    }

    render() {
        return(
            <div className="d-flex m-0 text-light align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#000'}}>
                <div className="p-4">
                    <h1 className="text-center">amDeC 2019</h1>
                    <p className="p-2 text-center">
                        Thank you so much for showing interest in amDeC 2019, organized by amFOSS
                    </p>
                    <div className="alert alert-warning">
                        If you are facing any technical issues, or if your friend didn't recieve
                        a confirmation email yet, please ping +91 6303207870 on Telegram/WhatsApp.
                        We are sorry for any inconvenience caused.
                    </div>
                    {!this.state.loading ?
                        <form
                            onSubmit={e => {
                                this.setState({ loading: true });
                                this.submit();
                            }}
                            className="form-group">
                            <div className="row">
                                <div className="col-12 col-md-6 p-2">
                                    <label>Enter your proposal link</label>
                                    <input
                                        type="text"
                                        placeholder="Enter proposal link"
                                        name="proposal"
                                        className="form-control"
                                        onChange={(e) => this.setState({ details: e.currentTarget.value })}
                                    />
                                </div>
                                <div className="col-12 col-md-6 p-2">
                                    <label>Enter your registered phone number</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Phone"
                                        name="phoneno"
                                        className="form-control"
                                        onChange={(e) => this.setState({ phone: e.currentTarget.value })}
                                    />
                                </div>
                                <div className="col-12 p-2">
                                    <button
                                        type="submit"
                                        className="button btn-block px-4"
                                    >
                                        Submit RSVP
                                    </button>
                                </div>
                            </div>
                        </form> : this.state.successText !== '' ?
                            <div className="alert alert-success">Thank you! Please inform your friends too about submitting their RSVP.</div>
                            : <div className="alert alert-warning">Submitting. Please Wait</div>
                    }
                    {
                        this.state.errorText !== '' ?
                            <div className="w-100 w-100 text-center m-2 alert alert-danger" role="alert">
                                {this.state.errorText}
                            </div> : null
                    }
                </div>
            </div>
        )
    }
}

export default RSVPForm;