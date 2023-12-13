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
        className={`cursor-pointer py-[10px] px-[20px]  ${active ? 'border-b-[#00c39e] border-b-[3px] text-[#00c39e]' : 'none'}`}
    >
        {label}
    </div>
);

const TabContent: React.FC<TabContentProps> = ({ activeTab, tabNumber, children }) => (
    <div className={`${activeTab === tabNumber ? 'block' : 'hidden'}`}>{children}</div>
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
            <div className='flex gap-[4rem]'>
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