import React from 'react';
import './Topic.css'

const Topic = ({topic}) => {
    const {name, logo } = topic;
    return (
        <div className='topic-container'>
            <div>
                <img src={logo} alt=''></img>
            </div>
            <div>
                <div>{name}</div>
                <div></div>
            </div>
        </div>
    );
};

export default Topic;