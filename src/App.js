import React from 'react';

import Setter from './components/Setter';
import Display from './components/Display';
import Control from './components/Control';

const App = () => {
    return (
        <>
            <div className='app-container flex justify-center items-center flex-col'>
                <h1 className='text-5xl font-bold text-sky-200'>
                    25 + 5 Clock
                </h1>
                <Setter />
                <Display />
                <Control />
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
        </>
    );
};

export default App;
