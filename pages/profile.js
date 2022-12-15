import React from 'react';

const profile = () => {
    return (
        <div className='pb-[100px]'>
            <p className="text-20-24-600 w-full text-center mt-[100px]">Nguyen Van Bao Nguyen</p>
            <p className="text-16-20-400  w-full text-center mt-3">Ho Chi Minh</p>
            <div className="flex justify-center ">
                <div className="flex flex-col min-w-[500px] mt-[30px] px-10 py-10 border-2 bg-lime-100">
                    <p className="text-20-20-700">Information</p>
                    <div className="w-full flex border-b-2 mt-[30px]">
                        <p className="w-[200px]">Name:</p>
                        <p className="font-medium">Nguyen Van Bao Nguyen</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Gender:</p>
                        <p className="font-medium">Nam</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Birth of date:</p>
                        <p className="font-medium">29/2/2020</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Address:</p>
                        <p className="font-medium">KTX khu C</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Phone:</p>
                        <p className="font-medium">0905234262</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Social Media:</p>
                        <p className="font-medium">Sing and Song</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <div className="flex flex-col min-w-[500px] mt-[30px] px-10 py-10 border-2 bg-lime-100">
                    <p className="text-20-20-700">Work & Education</p>
                    <div className="w-full flex border-b-2 mt-[30px]">
                        <p className="w-[200px]">Work:</p>
                        <p className="font-medium">Back Officer</p>
                    </div>
                    <div className="w-full flex border-b-2 mt-[20px]">
                        <p className="w-[200px]">Education:</p>
                        <p className="font-medium">Gradutate</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default profile;
