import { createSelector } from 'reselect';

export const firstFourBlocks = state => 
  state.contentForFourBlocks.firstFourBlocks;

export const secondFourBlocks = state => 
  state.contentForFourBlocks.secondFourBlocks;


const onGetFlights = state => state.flightsData.flights;
export const flightsSelector = createSelector(
  [onGetFlights],
  (flights) => {
    if(!flights) return null;
    return flights.map(flight => {
      const { term, ID } = flight;
      const expectedTime  = flight.timeDepShedule || flight.timeArrShedule;
      const realTime = flight.timeDepFact || flight.timeLandFact;
      const airport = flight["airportToID.city_en"] || flight["airportFromID.city_en"];
      const flightNum = flight["planeTypeID.code"];
      const airline = flight.airline.en.name;
      return {
        ID,
        term,
        realTime,
        airport,
        expectedTime,
        airline,
        flightNum,
      };
    })
  }
    
);