import React from 'react';

import { HiPlus, HiMinus } from 'react-icons/hi';

const Setter = ({
    breakLength,
    setBreakLength,
    sessionLength,
    setSessionLength,
    isPaused,
    runningMin,
    setRunningMin,
    runningSec,
    setRunningSec,
}) => {
    const increaseBreak = () => {
        if (breakLength < 60 && isPaused) {
            setBreakLength(breakLength + 1);
        }
    };

    const decreaseBreak = () => {
        if (breakLength > 1 && isPaused) {
            setBreakLength(breakLength - 1);
        }
    };

    const increaseSession = () => {
        if (sessionLength < 60 && isPaused) {
            setSessionLength(sessionLength + 1);
        }
    };

    const decreaseSession = () => {
        if (sessionLength > 1 && isPaused) {
            setSessionLength(sessionLength - 1);
        }
    };

    return (
        <div className='flex justify-around items-center w-full mt-5'>
            <div className='break-setter w-2/6 flex justify-center items-center setter-controller bg-sky-200 rounded-md h-20 flex-col'>
                <div id='break-label'>Break Length</div>
                <div className='w-full flex justify-between px-8 items-center '>
                    <button
                        id='break-increment'
                        className='set-btn'
                        onClick={increaseBreak}
                    >
                        <HiPlus />
                    </button>
                    <div id='break-length' className='set-time'>
                        {breakLength}
                    </div>
                    <button
                        id='break-decrement'
                        className='set-btn'
                        onClick={decreaseBreak}
                    >
                        <HiMinus />
                    </button>
                </div>
            </div>
            <div className='session-setter w-2/6 flex justify-center items-center setter-controller bg-sky-200 rounded-md h-20 flex-col'>
                <div id='session-label'>Session Length</div>
                <div className='w-full flex justify-between px-8 items-center'>
                    <button
                        id='session-increment '
                        className='set-btn'
                        onClick={increaseSession}
                    >
                        <HiPlus />
                    </button>
                    <div id='session-length' className='set-time'>
                        {sessionLength}
                    </div>
                    <button
                        id='session-decrement'
                        className='set-btn'
                        onClick={decreaseSession}
                    >
                        <HiMinus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setter;
