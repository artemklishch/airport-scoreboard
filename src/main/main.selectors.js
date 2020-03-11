import { createSelector } from 'reselect';

export const firstFourBlocks = state => 
  state.contentForFourBlocks.firstFourBlocks;

export const secondFourBlocks = state => 
  state.contentForFourBlocks.secondFourBlocks;



const depaturedFlightsSelector = state => state.flightsData.flights;
export const onSelectProps = state => {

};