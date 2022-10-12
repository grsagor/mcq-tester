import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const TopicQuiz = () => {
    const topics = useLoaderData().data;
    const { questions, name} = topics;
    return (
            <div className='w-3/4 mx-auto'>
                <div className='font-bold text-2xl my-8'>Let's start answering the mcq on <span className='text-lime-600'>{name}-</span></div>
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