import React from 'react';
import Option from '../Option/Option';
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ question }) => {
    const { options, correctAnswer } = question;

    const clickedOnEyeButton = () => {
        toast('Correct answer of this question is: ' + correctAnswer);
    }
    console.log("Questions: ",question.question);
    return (
        <div className='border-2 my-2 bg-lime-200 rounded'>
            <div className='my-4 mx-2 border-2 border-lime-600 p-4 text-xl font-bold flex justify-between'>
                <div>{question.question}</div>
                <div onClick={clickedOnEyeButton}>
                    <EyeSlashIcon className="h-6 w-6 text-lime-600" />
                </div>
            </div>
            <form className='grid grid-col-1 md:grid-cols-2 items-center'>
                {
                    options.map(option => <Option
                        option={option}
                        correctAnswer={correctAnswer}
                    ></Option>)
                }
            </form>
            <ToastContainer />
        </div>
    );
};

export default Question;