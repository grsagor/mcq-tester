import React, { useState } from 'react';
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from '@heroicons/react/24/solid'


const Blog = ({ question }) => {
    const [clas, setClass] = useState(false)
    let visibility;

    if (clas === false) {
        visibility = 'hidden';
    }
    if (clas === true) {
        visibility = 'block';
    }

    const clickedOnAns = () => {
        setClass(!clas);
    }



    return (
        <div onClick={clickedOnAns} className='my-4 border border-lime-600 hover:cursor-pointer'>
            <div className={`bg-lime-600 flex justify-between p-4`}>
                <div><span className='font-bold'>Question:</span> {question.question}</div>
                <div className="h-6 w-6">
                    {
                        clas ? <ArrowUpCircleIcon/> : <ArrowDownCircleIcon/>
                    }
                </div>
            </div>
            <div className={`${visibility} text-left p-4 bg-slate-200 text-justify`}>
                <span className='font-bold'>Answer:</span> {question.ans}
            </div>
        </div>
    );
};

export default Blog;