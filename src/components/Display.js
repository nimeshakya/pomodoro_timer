import React from 'react';

import Control from './Control';

const Display = () => {
    return (
        <div
            id='display'
            className='rounded-full border-2 border-sky-200 w-52 h-52 flex items-center justify-center flex-col my-5 text-sky-200 relative'
        >
            <p id='session-break' className='text-xl mb-2 absolute top-10 '>
                Session
            </p>
            <p id='time-left' className='text-5xl'>
                25:00
            </p>
        </div>
    );
};

export default Display;
