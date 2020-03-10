import React from 'react';
import MainMiddleFourBlock from './MainMiddleFourBlocks';
import { connect } from 'react-redux';
import * as mainSelectors from '../main.selectors';

const mapState = state => {
  return {
    firstFourBlocks: mainSelectors.firstFourBlocks(state),
    secondFourBlocks: mainSelectors.secondFourBlocks(state),
  }
};

export default connect(mapState)(MainMiddleFourBlock);

