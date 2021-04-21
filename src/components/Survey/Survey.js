import React from 'react';
import './Survey.css';

const survey = {
    title: 'Questionário de Métodos de Programação',
    author: 'Luis Fernando'
}

class Survey extends React.Component {
    render() {
        return (
            <div className="Survey">
                <div className="container">
                    <div className="title">{survey.title}</div>
                    <div className="author">{survey.author}</div>
                </div>
            </div>
        );
    }
}

export default Survey;