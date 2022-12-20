import React from 'react';

import { HiOutlinePause, HiOutlinePlay } from 'react-icons/hi';
import { BiReset } from 'react-icons/bi';

const Control = ({ isPaused, setIsPaused }) => {
    return (
        <div
            id='controller'
            className='w-20 flex items-center justify-around rounded-md text-3xl text-sky-200'
        >
            <div
                id='start_stop'
                className='cursor-pointer'
                onClick={() => setIsPaused(!isPaused)}
            >
                {isPaused ? <HiOutlinePlay /> : <HiOutlinePause />}
            </div>
            <div id='reset' className='cursor-pointer'>
                <BiReset />
            </div>
        </div>
    );
};

export default Control;
