// import { data } from 'autoprefixer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const data = useLoaderData().data;
    console.log();
    return (
        <div>
            <div className='border-4 text-xl text-lime-600 font-bold border-lime-600 mb-4 p-6 w-3/4 mx-auto'>This Barchart is based on total number of questions of every topics.</div>
            <div className='flex justify-center'>
                <ResponsiveContainer width="75%" height={400}>
            <BarChart
            width={500}
            height= {400}
            data= {data}
        >
          <Bar type="monotone" dataKey='total' fill="#65A30D" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
        </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;