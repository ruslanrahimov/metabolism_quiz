import React from 'react';
import "./QuizHeader.css";

function QuizHeader({ text }) {
    return (
        <div className="quiz-header-wrapper">
            <h1 className="quiz-question-header">{text}</h1>
        </div>
    );
}

export default QuizHeader;