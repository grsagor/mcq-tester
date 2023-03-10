import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const Topic = ({topic}) => {
    const {name, logo, id } = topic;
    return (
        <div className='rounded drop-shadow-md border-2 my-2'>
            <div className='bg-slate-300'>
                <img className='w-64' src={logo} alt=''></img>
            </div>
            <div className='flex justify-between items-center my-2 px-2'>
                <div className='text-lg font-bold text-lime-600'>{name}</div>
                <div><Link to={`/topic/${id}`}><button className='bg-lime-500 rounded p-2'>
                    <div className='flex text-black px-4'>
                        <div>Test</div>
                        <div><ArrowSmallRightIcon className="h-6 w-6"/></div>
                    </div>
                </button></Link></div>
            </div>
        </div>
    );
};

export default Topic;