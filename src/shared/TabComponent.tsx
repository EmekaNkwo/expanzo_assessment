"use client"
import React, { useState, ReactNode } from 'react';

interface TabProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

interface TabContentProps {
    activeTab: number;
    tabNumber: number;
    children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => (
    <div
        onClick={onClick}
        data-cy={`tab-${label.toLowerCase().replace(' ', '-')}`}
        className={`cursor-pointer py-[10px] px-[20px] font-semibold ${active ? 'border-b-[#00c39e] border-b-[3px] text-[#00c39e]' : 'none'}`}
    >
        {label}
    </div>
);

const TabContent: React.FC<TabContentProps> = ({ activeTab, tabNumber, children }) => (
    <div data-cy={`tab-content-${tabNumber}`} className={`${activeTab === tabNumber ? 'block' : 'hidden'}`}>{children}</div>
);

interface TabComponentProps {
    tabs: { label: string; content: ReactNode }[];
}

const TabComponent: React.FC<TabComponentProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber: number) => {
        setActiveTab(tabNumber);
    };

    return (
        <div>
            <div className='flex md:gap-[4rem] gap-[2rem]'>
                {tabs.map((tab, index) => (
                    <Tab
                        key={index}
                        label={tab.label}
                        active={activeTab === index + 1}
                        onClick={() => handleTabClick(index + 1)}
                    />
                ))}
            </div>

            {tabs.map((tab, index) => (
                <TabContent key={index} activeTab={activeTab} tabNumber={index + 1}>
                    <div className="mt-5">
                        {tab.content}
                    </div>
                </TabContent>
            ))}
        </div>
    );
};

export default TabComponent;
