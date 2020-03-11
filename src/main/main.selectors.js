import { createSelector } from 'reselect';

export const firstFourBlocks = state => 
  state.contentForFourBlocks.firstFourBlocks;

export const secondFourBlocks = state => 
  state.contentForFourBlocks.secondFourBlocks;