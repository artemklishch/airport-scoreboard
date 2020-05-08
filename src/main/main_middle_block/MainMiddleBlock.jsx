import React from 'react';
import FourBlocks from './FourBlocks';
import PriorityLine from './PriorityLine'; 
import TwoBlocks from './TwoBlocks';
import { connect } from 'react-redux';
import * as mainSelectors from '../main.selectors';

const MainMiddleBlock = (props) => {
  return (
    <div className="main__middle">
      <FourBlocks contentData={props.firstFourBlocks} />
      <PriorityLine />
      <FourBlocks contentData={props.secondFourBlocks} />
      <TwoBlocks />
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