import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const Topics = useLoaderData().data;
    return (
        <div className='flex justify-evenly'>
            {
                Topics.map(topic => <Topic
                    key={topic.id}
                    topic = {topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;