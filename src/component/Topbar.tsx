import Link from "next/link"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

import Image from "next/image";
import { LogoWhite } from "@/shared/assets";
import { mobileLinks, rightLinks } from "@/shared/data";

type TopbarProps = {
    isContactPage?: boolean
}

const Topbar = ({ isContactPage }: TopbarProps) => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

    const handleToggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };
    return (
        <div className="h-[80px] p-3  bg-[#2db199] flex items-center">
            {/* Desktop View */}
            <div className="hidden md:flex md:items-center md:justify-between w-full">
                <div className="flex items-center gap-[1.8rem] text-[#fff] font-medium">
                    <FontAwesomeIcon icon={faBars} className="text-[28px]" />
                    <Link href="/">DASHBOARD</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>
                {
                    isContactPage && (<>
                        <Image src={LogoWhite} alt="logo" width={100} height={100} />
                    </>)
                }
                <div className="flex items-center gap-5">
                    {
                        rightLinks.map((item) => (
                            <Link href={item.link} key={item.name} className="flex items-center text-[#fff] gap-2 font-medium"> <span className='px-[8.5px] py-[4.5px] rounded-full bg-[#00c39e]'>{item?.icon}</span> {item.name}</Link>
                        ))
                    }
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden w-full">
                <div className="flex items-center justify-between">
                    <Image src={LogoWhite} alt="logo" width={90} height={90} />
                    <FontAwesomeIcon icon={faBars} className="text-[28px] text-[#fff] cursor-pointer" onClick={handleToggleSideMenu} />
                </div>
                <div className={`absolute top-[80px] right-0 left-0 flex items-center flex-col gap-[2rem] bg-black z-10 bg-opacity-90 shadow-secondary py-4 ${!isSideMenuOpen ? "-translate-y-[100vh]" : "translate-y-0"
                    } transition-all duration-700`}>
                    {mobileLinks.map((item) => (
                        <Link
                            onClick={handleToggleSideMenu}
                            href={item.link}
                            key={item.name}
                            className="flex items-center text-[#fff] gap-2 font-medium hover:text-[#00c39e]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Topbar