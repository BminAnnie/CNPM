import React from 'react';
import { GrLinkNext } from 'react-icons/gr';

const BannerBottom = () => {
    return (
        <div className="relative w-full min-h-[calc(100vh)]">
            <div
                className="w-full h-full  top-0 bg-no-repeat bg-[length:100%_100%] absolute -z-10 hidden laptop:block"
                style={{
                    backgroundImage: 'url(/images/banner2_pageHome.png)',
                }}
            ></div>
            <div className="pt-[300px] layout-page ">
                <div className="w-[700px] text-white">
                    <p className="text-48-64-900 ">HOW TO SYSTEM WORKS </p>
                    <p className="text-20-24-500  mt-[30px]">
                        Waste collection is often designated to an organization that provides
                        professional waste management services
                    </p>
                    <button className="flex text-black items-center text-20-24-500  px-[15px] py-[8px] rounded-md mt-[40px] bg-white ">
                        Learn More <GrLinkNext className="mx-3 text-[16px]" />
                        Learn More <GrLinkNext className="mx-3 text-[16px]" />
                        Learn More <GrLinkNext className="mx-3 text-[16px]" />
                        Learn More <GrLinkNext className="mx-3 text-[16px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;
