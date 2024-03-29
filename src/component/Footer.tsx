import { LogoBlack } from '@/shared/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#F9FAFB] p-[1.5rem] h-[420px]'>
            <div className="flex items-center md:justify-evenly flex-col md:flex-row  my-[6rem] gap-[1rem] ">
                <Image src={LogoBlack} alt="logo" width={200} height={200} />
                <div className="flex items-center gap-5 md:mt-0 mt-[1rem]" >
                    {["CONTACTS", "PHONES", "TOP SEARCH"].map((item) =>
                        <span key={item} className='text-[#000] cursor-pointer font-medium'>{item}</span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Footer