import React, { useState } from 'react';
import CheckIn from '../components/Tasks/CheckIn';
import Checkout from '../components/Tasks/Checkout';
import Detail from '../components/Tasks/Detail';
import History from '../components/Tasks/History';
const pages = [
    {
        name: 'Text Detail',
        component: Detail,
    },
    {
        name: 'History',
        component: History,
    },
    {
        name: 'Check In',
        component: CheckIn,
    },
    {
        name: 'Check Out',
        component: Checkout,
    },
];
const Task = () => {
    const [page, setPage] = useState(0);
    const Component = pages[page].component;
    return (
        <div>
            <div className="text-48-64-900 text-center my-[30px]">Task Calendar</div>
            <div className="flex">
                <div className="flex flex-col w-[300px] cursor-pointer">
                    {pages.map((pagez, index) => (
                        <>
                            <div
                                className={`text-center py-[20px] text-16-20-500 ${
                                    page == index && 'bg-lime-300'
                                } `}
                                onClick={() => setPage(index)}
                            >
                                {pagez.name}
                            </div>
                        </>
                    ))}
                </div>
                <Component />
            </div>
        </div>
    );
};
export default Task;
