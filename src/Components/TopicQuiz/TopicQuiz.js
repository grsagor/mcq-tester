import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicQuiz = () => {
    const topics = useLoaderData().data;
    const { questions} = topics;
    console.log(topics);
    return (
        <div>
            {
                questions.map(question => <Question
                    key={question.id}
                    question = {question}
                ></Question>)
            }
        </div>
    );
};

export default TopicQuiz;