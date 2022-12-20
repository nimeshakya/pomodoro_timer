import React from 'react';

const Display = ({
    runningMin,
    setRunningMin,
    runningSec,
    setRunningSec,
    currEvent,
    setCurrEvent,
    isPaused,
    breakLength,
    sessionLength,
}) => {
    setTimeout(() => {
        if (!isPaused) {
            setRunningSec(runningSec - 1);
            if (runningSec <= 0) {
                setRunningSec(59);
                setRunningMin(runningMin - 1);
            }

            if (runningMin <= 0 && runningSec <= 0) {
                console.log(
                    currEvent === 'SESSION'
                        ? 'break started'
                        : 'session started'
                );
                if (currEvent === 'SESSION') {
                    setCurrEvent('BREAK');
                    setRunningMin(breakLength);
                    setRunningSec(0);
                } else {
                    setCurrEvent('SESSION');
                    setRunningMin(sessionLength);
                    setRunningSec(0);
                }
            }
        }
    }, 125);

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
