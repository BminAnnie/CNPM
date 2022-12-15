import Link from 'next/link';
import React from 'react';
import { mcps } from '../../database';
const Mcps = () => {
    const colors = ['progress-info', 'progress-success', 'progress-error'];
    console.log(mcps);
    return (
        <div className="flex flex-col items-center">
            <div className="w-full text-48-64-900 text-center py-[30px]">MCPS</div>
            <div className="overflow-x-auto px-[50px] w-[1200px]">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Capacity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mcps.map((mcp, index) => (
                            <tr className="" key={index}>
                                <th>{index}</th>
                                <td>{mcp.name}</td>
                                <td className="">
                                    <progress
                                        className={`progress ${
                                            colors[Math.floor((mcp.now / mcp.max) * 3)]
                                        } w-auto max-w-[200px]`}
                                        value={mcp.now}
                                        max={mcp.max}
                                    ></progress>
                                </td>
                                <td className="flex items-center justify-center">
                                    <Link href={`mcp/${index}`}>
                                        <button className="btn btn-success btn-sm ">
                                            Chi tiết
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mcps;
