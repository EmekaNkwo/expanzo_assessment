"use client"

import Footer from "@/component/Footer";
import Topbar from "@/component/Topbar";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";


interface IChildren {
    children: React.ReactNode;
};
const Template = ({ children }: IChildren) => {
    const path = usePathname();
    return (
        <>
            <div className="flex flex-col w-full ">
                {
                    path === "/contact" ? <Topbar isContactPage /> : <Topbar />
                }
                <div className="p-2 bg-[#fff] w-full  min-h-[50vh]">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Template;
