import React from 'react';

const Display = ({ runningMin, runningSec, currEvent }) => {
    return (
        <div
            id='display'
            className='rounded-full border-2 border-sky-200 w-52 h-52 flex items-center justify-center flex-col my-5 text-sky-200 relative'
        >
            <p id='timer-label' className='text-xl mb-2 absolute top-10 '>
                {currEvent === 'SESSION' ? 'Session' : 'Break'}
            </p>
            <p id='time-left' className='text-5xl'>
                {`${runningMin < 10 ? '0' + runningMin : runningMin}:${
                    runningSec < 10 ? '0' + runningSec : runningSec
                }`}
            </p>
        </div>
    );
};

export default Display;
