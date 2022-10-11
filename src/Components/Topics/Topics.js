import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const Topics = useLoaderData().data;
    return (
        <div className='flex justify-center md:flex-col z-0'>

            <div className='flex flex-col md:flex-row md:justify-evenly'>
            {
                Topics.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                ></Topic>)
            }
        </div>
        </div>
    );
};

export default Topics;