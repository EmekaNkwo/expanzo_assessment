import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const page = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[2rem] p-[5rem]'>
            <h3 className='font-medium text-[20px]'>Contact</h3>
            <div className="flex items-start justify-around gap-[10rem] mt-[1rem]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faLocationDot} className="text-[#00c39e]" />
                        <span>Headquarters</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-[2rem]">
                        <span>DHO s.r.o</span>
                        <span>Borivojova 878/35</span>
                        <span>130 00 Praha 3</span>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} className="text-[#00c39e]" />
                        <span>Email</span>
                    </div>
                    <div className="flex flex-col gap-2 mt-[2rem]">
                        <span>info@expanzo.com</span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page