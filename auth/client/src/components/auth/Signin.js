import React from 'react';
import {reduxForm, Field} from "redux-form";
import {signin} from "../../actions";
import {connect} from "react-redux";
import {compose} from "redux";

class Signin extends React.Component {

    onSubmit = (formProps) => {
        this.props.signin(formProps, ()=>{
            this.props.history.push('/feature');
        });
    };


    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field
                        name="email"
                        type="text"
                        component="input"
                    />
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        component="input"
                    />
                </fieldset>
                <div>{this.props.errorMessage}</div>
                <button>Sign in</button>
            </form>
        )
    }
}


function mapStateToProps(state) {
    return {errorMessage: state.auth.errorMessage};
}

export default compose(
    connect(mapStateToProps, {signin}),
    reduxForm({form: 'signin'})
)(Signin);