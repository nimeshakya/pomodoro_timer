import React from 'react';

import { HiPlus, HiMinus } from 'react-icons/hi';

const Setter = () => {
    return (
        <div className='flex justify-around items-center w-full mt-5'>
            <div className='break-setter w-2/6 flex justify-center items-center setter-controller bg-sky-200 rounded-md h-20 flex-col'>
                <div id='break-label'>Break Length</div>
                <div className='w-full flex justify-around items-center '>
                    <button id='break-increment' className='set-btn'>
                        <HiPlus />
                    </button>
                    <div id='break-length' className='set-time'>
                        5
                    </div>
                    <button id='break-decrement' className='set-btn'>
                        <HiMinus />
                    </button>
                </div>
            </div>
            <div className='session-setter w-2/6 flex justify-center items-center setter-controller bg-sky-200 rounded-md h-20 flex-col'>
                <div id='session-label'>Session Length</div>
                <div className='w-full flex justify-around items-center'>
                    <button id='session-increment ' className='set-btn'>
                        <HiPlus />
                    </button>
                    <div id='session-length' className='set-time'>
                        25
                    </div>
                    <button id='session-decrement' className='set-btn'>
                        <HiMinus />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Setter;
