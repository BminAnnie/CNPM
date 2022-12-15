import React from 'react';

const Detail = () => {
    return (
        <div className="flex-1 px-[50px] bg-lime-100 pb-[50px]">
            <div className="w-full flex border-b-2 mt-[30px] text-[20px]">
                <p className="w-[200px]">Name:</p>
                <p className="font-medium">Nguyen Van Bao Nguyen</p>
            </div>
            <div className="w-full flex border-b-2 mt-[30px] text-[20px]">
                <p className="w-[200px]">Excutive:</p>
                <p className="font-medium">Manage employee </p>
            </div>
            <div className="w-full flex border-b-2 mt-[30px] text-[20px]">
                <p className="w-[200px]">Description:</p>
                <p className="font-medium">Back Officer</p>
            </div>
            <div className="w-full grid grid-cols-2 gap-x-[100px] mt-[30px] text-[20px]">
                <div className="flex border-b-2">
                    <p className="w-[200px]">Task type:</p>
                    <p className="font-medium">Garbage collector</p>
                </div>
                <div className="flex border-b-2">
                    <p className="w-[200px]">Manager:</p>
                    <p className="font-medium">Back Officer</p>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-x-[100px] mt-[30px] text-[20px]">
                <div className="flex border-b-2">
                    <p className="w-[200px]">Begin date:</p>
                    <p className="font-medium">15/01/2022</p>
                </div>
                <div className="flex border-b-2">
                    <p className="w-[200px]">Start date:</p>
                    <p className="font-medium">24/05/2022</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
