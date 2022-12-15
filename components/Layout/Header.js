import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="layout-page shadowHeader">
            <div className="h-[80px] flex justify-between items-center">
                <Image src="/icons/header_pageHome.svg" width={60} height={60} alt="" />
                <div className="flex w-[700px] justify-between text-16-20-500">
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/comm">
                        <p>Communication</p>
                    </Link>
                    <Link href="/task">
                        <p>Tasks</p>
                    </Link>
                    <Link href="/mcps">
                        <p>MCPS</p>
                    </Link>
                    <Link href="/profile">
                        <p>Profile</p>
                    </Link>
                </div>
                <button className="btn btn-sm btn-outline">Login</button>
            </div>
        </div>
    );
};

export default Header;
