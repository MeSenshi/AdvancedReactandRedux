import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';

export default (ChildComponent) => {

    class ComposedComponent extends React.Component {
        render() {
            switch (this.props.auth) {
                case false:
                case "":
                    return <Redirect to="/"/>;
                case null:
                    return <div>Loading...</div>;
                default:
                    return <ChildComponent {...this.props}/>;
            }
        }
    }


    function mapStateToProps(state) {
        return {auth: state.auth.authenticated}
    }

    return connect(mapStateToProps)(ComposedComponent);

};