import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { mcps } from '../../database';
const MCP = () => {
    const router = useRouter();
    const [mcp, setMcp] = useState({});
    useEffect(() => {
        const { id } = router.query;
        setMcp(mcps[id]);
    }, [router]);
    return (
        <div className="">
            <div className="w-full text-48-64-900 text-center py-[30px]">MCPS</div>
            <div className="flex flex-col items-center -ml-[100px] mt-[30px]">
                <div className="">
                    <div className="flex">
                        <div className="w-[200px] text-16-20-700">Name</div>
                        <div className="text-16-20-400 ">{mcp?.name}</div>
                    </div>
                    <div className="flex mt-[20px]">
                        <div className="w-[200px] text-16-20-700">Location</div>
                        <div className="text-16-20-400 ">{mcp?.location}</div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-[200px] text-16-20-700">Capacity</div>
                        <div className="text-16-20-400 ">
                            {mcp?.now}/{mcp?.max} tons (72%)
                        </div>
                    </div>
                    <div className="flex mt-5">
                        <div className="w-[200px] text-16-20-700">Workers</div>
                        <div className="text-16-20-400 flex flex-col">
                            {mcp?.Workers?.map((Worker, index) => (
                                <p key={index} className="pb-2">
                                    {Worker}
                                </p>
                            ))}
                        </div>
                    </div>
                    <Link href="/mcps"><button className="btn btn-success mt-[30px]">Return</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MCP;
