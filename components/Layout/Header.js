import Image from 'next/image';
import React from 'react';

const Header = () => {
    return (
        <div className="layout-page shadowHeader">
            <div className="h-[80px] flex justify-between items-center">
                <Image src="/icons/header_pageHome.svg" width={60} height={60} alt="" />
                <div className="flex w-[700px] justify-between text-16-20-500">
                    <p>Home</p>
                    <p>Communication</p>
                    <p>Tasks</p>
                    <p>Dashboard</p>
                    <p>Profile</p>
                </div>
                <button className="btn btn-sm btn-outline">Login</button>
            </div>
        </div>
    );
};

export default Header;
