import React from 'react';

import { HiOutlinePause, HiOutlinePlay } from 'react-icons/hi2';
import { BiReset } from 'react-icons/bi';

const Control = ({
    isPaused,
    setIsPaused,
    sessionLength,
    setRunningMin,
    setRunningSec,
    setCurrEvent,
    setBreakLength,
    setSessionLength,
    audioRef,
    timeout,
}) => {
    const handleReset = () => {
        clearTimeout(timeout);
        setCurrEvent('SESSION');
        setIsPaused(true);
        setRunningSec(0);
        setSessionLength(25);
        setBreakLength(5);
        setRunningMin(sessionLength);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    };

    const handlePausePlay = () => {
        clearTimeout(timeout);
        setIsPaused(!isPaused);
    };

    return (
        <div
            id='controller'
            className='w-20 flex items-center justify-around rounded-md text-3xl text-sky-200'
        >
            <div
                id='start_stop'
                className='cursor-pointer'
                onClick={handlePausePlay}
            >
                {isPaused ? <HiOutlinePlay /> : <HiOutlinePause />}
            </div>
            <div id='reset' className='cursor-pointer' onClick={handleReset}>
                <BiReset />
            </div>
        </div>
    );
};

export default Control;
