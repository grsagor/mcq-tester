import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const questions = useLoaderData();
    return (
        <div>
            <div className='border-4 text-xl text-lime-600 font-bold border-lime-600 mb-4 p-6 w-3/4 mx-auto'>Here you can get all the answers of your questions which are knocking at your mind.
            <p><small className='font-thin	'>Please click on any question to see the answer.</small></p>
            </div>
            <div className='flex justify-center'>
            <div className='w-3/4'>
                {
                    questions.map(question => <Blog
                        key={question.id}
                        question = {question}
                    ></Blog>)
                }
            </div>
            </div>
        </div>
    );
};

export default Blogs;