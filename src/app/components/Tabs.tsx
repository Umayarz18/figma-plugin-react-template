import React, { ReactNode, useState } from 'react';

export interface TabsProps {
  label: ReactNode;
  onClick: any;
  index: number;
  isSelected: boolean;
}
export const Tab = ({ label, onClick, index, isSelected }: TabsProps) => {
  return (
    <button className={`tab ${isSelected ? 'selected' : ''}`} onClick={() => onClick(index)}>
      {label}
    </button>
  );
};

export interface TabsContainerProps {
  tabsList: ReactNode[];
  tabsContent: ReactNode[];
}

export const TabsContainer = ({ tabsList, tabsContent }: TabsContainerProps) => {
  const [SelectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        {tabsList.map((tabName, index) => (
          <Tab
            key={`tab-${index}`}
            label={tabName}
            onClick={handleClick}
            index={index}
            isSelected={index == SelectedTabIndex}
          />
        ))}
      </div>

      <div className="tabs-panel">{tabsContent[SelectedTabIndex]}</div>
    </div>
  );
};
