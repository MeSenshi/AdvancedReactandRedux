import React from 'react';
import {signout} from "../../actions";
import {connect} from "react-redux";


class Signout extends React.Component {

    componentDidMount() {
        this.props.signout();
    }

    render() {
        return (
            <div>
                sorry to see you go
            </div>
        )
    }
}

export default connect(null, {signout})(Signout);