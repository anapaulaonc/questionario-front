import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Survey from '../../components/Survey/Survey';


class ForYou extends React.Component {
    render() {
        return (
            <div className="ForYou">
                <NavBar/>
                <Survey/>
            </div>
        );
    }
}

export default ForYou;