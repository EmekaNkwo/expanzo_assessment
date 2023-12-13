import TabComponent from '@/shared/TabComponent'
import { LogoBlack } from '@/shared/assets'
import Image from 'next/image'
import React from 'react'

const tabs = [
    { label: 'All', content: <div>Content for Tab 1</div> },
    { label: 'Companies', content: <div>Content for Tab 2</div> },
    { label: 'Phones', content: <div>Content for Tab 2</div> },
    // Add more tabs as needed
];
const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-[2rem] p-[2rem]'>
            <Image src={LogoBlack} alt="logo" width={200} height={200} />
            <div className="mt-3">
                <TabComponent tabs={tabs} />
            </div>
        </div>
    )
}

export default HomePage