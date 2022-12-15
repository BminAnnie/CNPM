import React from 'react';
import { GrLinkNext } from 'react-icons/gr';
const BannerTop = () => {
    return (
        <div className="relative w-full min-h-[calc(100vh-80px)]">
            <div
                className="w-full h-full  top-0 bg-no-repeat bg-[length:100%_100%] absolute -z-10 hidden laptop:block"
                style={{
                    backgroundImage: 'url(/images/banner1_pageHome.png)',
                }}
            ></div>
            <div
                className="w-full h-full  top-0 bg-no-repeat bg-[length:100%_100%] absolute -z-10 hidden laptop:block bg-black opacity-40"
            ></div>
            <div className="pt-[220px] layout-page ">
                <div className="w-[700px] text-white">
                    <p className="text-48-64-900 ">Urban waste management</p>
                    <p className="text-20-24-500  mt-[30px]">
                        We should protect our environment to create a better lifestyle for
                        ourselves. Otherwise we would be consciously participating in the calamities
                        of destroying our planet, and humans, as well as all other living things on
                        Earth would face a great loss.
                    </p>
                    <button className="btn  glass mt-[20px] ">
                        Learn More <GrLinkNext className="ml-3 text-[16px]" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BannerTop;
