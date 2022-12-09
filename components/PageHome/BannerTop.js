import React from 'react';

const BannerTop = () => {
    return (
        <div className="relative w-full min-h-[calc(100vh-100px)]">
            <div
                className="w-full h-full  top-0 bg-no-repeat bg-[length:100%_100%] absolute -z-10 hidden laptop:block"
                style={{
                    backgroundImage: 'url(/images/banner1_pageHome.png)',
                }}
            ></div>
        </div>
    );
};

export default BannerTop;
