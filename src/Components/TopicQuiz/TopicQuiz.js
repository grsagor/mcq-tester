import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicQuiz = () => {
    const topics = useLoaderData().data;
    const { questions} = topics;
    return (
            <div className='w-3/4 mx-auto'>
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