import React from 'react';
import MainMiddleFourBlock from './MainMiddleFourBlocks';
import MainMiddlePriorityLine from './MainMiddlePriorityLine'; 
import MainMiddleTwoBlocks from './MainMiddleTwoBlocks';

const MainMiddleBlock = () => {
  return (
    <div className="main__middle">
      <MainMiddleFourBlock />
      <MainMiddlePriorityLine />
      <MainMiddleTwoBlocks />
    </div>
  );
};
export default MainMiddleBlock;