import React from 'react';
import requireAuth from './requierAuth';

class Feature extends React.Component{
    render() {
        return(
            <div>feature</div>
        )
    }
}


export default requireAuth(Feature);