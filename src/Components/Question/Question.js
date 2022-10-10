import React from 'react';
import Option from '../Option/Option';

const Question = ({question}) => {
    const options = question.options;
    return (
        <div className='border-2 my-2 bg-slate-200'>
            <p className='my-4 mx-2 border-2 border-indigo-600 p-4'>{question.question}</p>
            <form className='grid grid-cols-2 items-center'>
            {
                options.map(option => <Option
                    option = {option}
                ></Option>)
            }
            </form>
        </div>
    );
};

export default Question;