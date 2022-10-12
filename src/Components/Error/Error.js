import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Error = () => {
    return (
        <div className='h-full'>
            <div className='pt-40 px-8 text-6xl font-bold text-red-600'>Opps Sorry! This URL is not valid.</div>
            <div>
                <Link to='/'><button className='mt-5 text-lime-600'>
                    <div className='flex items-center'>
                        <div>Go to home page</div>
                        <div className='ml-1'><ArrowRightIcon className="w-4 text-lime-600" /></div>
                    </div>
                </button></Link>
            </div>
        </div>
    );
};

export default Error;