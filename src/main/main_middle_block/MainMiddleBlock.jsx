import React from 'react';
import MainMiddleFourBlock from './MainMiddleFourBlocks';
import MainMiddlePriorityLine from './MainMiddlePriorityLine'; 
import MainMiddleTwoBlocks from './MainMiddleTwoBlocks';
import { connect } from 'react-redux';
import * as mainSelectors from '../main.selectors';

const MainMiddleBlock = (props) => {
  return (
    <div className="main__middle">
      <MainMiddleFourBlock contentData={props.firstFourBlocks} />
      <MainMiddlePriorityLine />
      <MainMiddleFourBlock contentData={props.secondFourBlocks} />
      <MainMiddleTwoBlocks />
    </div>
  );
};

const mapState = state => {
  return {
    firstFourBlocks: mainSelectors.firstFourBlocks(state),
    secondFourBlocks: mainSelectors.secondFourBlocks(state),
  };
};

export default connect(mapState)(MainMiddleBlock);