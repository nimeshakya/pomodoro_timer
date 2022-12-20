import React, { useState, useEffect, useRef } from 'react';

import Setter from './components/Setter';
import Display from './components/Display';
import Control from './components/Control';

const App = () => {
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(1);
    const [currEvent, setCurrEvent] = useState('SESSION'); // current event SESSION or BREAK
    const [isPaused, setIsPaused] = useState(true); // is timer paused (default true)

    // minute and second displayed
    const [runningMin, setRunningMin] = useState(sessionLength);
    const [runningSec, setRunningSec] = useState(0);

    const audioRef = useRef(null);

    useEffect(() => {
        if (currEvent === 'SESSION') {
            setRunningMin(sessionLength);
            setRunningSec(0);
        }
    }, [sessionLength, currEvent]);

    useEffect(() => {
        if (currEvent === 'BREAK') {
            setRunningMin(breakLength);
            setRunningSec(0);
        }
    }, [breakLength, currEvent]);

    useEffect(() => {
        if (runningMin <= 0 && runningSec <= 0) {
            audioRef.current.play();
        }
    }, [runningMin, runningSec]);

    return (
        <>
            <div className='app-container flex justify-center items-center flex-col'>
                <h1 className='text-5xl font-bold text-sky-200'>
                    25 + 5 Clock
                </h1>
                <Setter
                    breakLength={breakLength}
                    setBreakLength={setBreakLength}
                    sessionLength={sessionLength}
                    setSessionLength={setSessionLength}
                    isPaused={isPaused}
                    runningMin={runningMin}
                    setRunningMin={setRunningMin}
                    runningSec={runningSec}
                    setRunningSec={setRunningSec}
                />
                <Display
                    runningMin={runningMin}
                    setRunningMin={setRunningMin}
                    runningSec={runningSec}
                    setRunningSec={setRunningSec}
                    currEvent={currEvent}
                    setCurrEvent={setCurrEvent}
                    isPaused={isPaused}
                    breakLength={breakLength}
                    sessionLength={sessionLength}
                />
                <Control isPaused={isPaused} setIsPaused={setIsPaused} />
            </div>
            <p className='mt-5 text-gray-600'>
                Created By:{' '}
                <a
                    href='https://www.instagram.com/saucy_mind/'
                    target='_blank'
                    rel='noreferrer noopener'
                    className='text-gray-400'
                >
                    thesaucymind
                </a>
            </p>
            <audio
                src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
                id='beep'
                ref={audioRef}
                preload='auto'
            ></audio>
        </>
    );
};

export default App;
