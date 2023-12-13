import Link from "next/link"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPen } from "@fortawesome/free-solid-svg-icons/faPen";

import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { LogoWhite } from "@/shared/assets";

type TopbarProps = {
    isContactPage?: boolean
}

const rightLinks = [
    {
        name: 'LOGIN',
        link: '#',
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        name: "REGISTRATION",
        link: "#",
        icon: <FontAwesomeIcon icon={faPen} />
    }
]
const Topbar = ({ isContactPage }: TopbarProps) => {
    return (
        <div className="h-[80px] p-3 bg-[#2db199] flex items-center justify-between">
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
    )
}

export default Topbar