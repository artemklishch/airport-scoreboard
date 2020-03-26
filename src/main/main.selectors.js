import { createSelector } from 'reselect';

export const firstFourBlocks = state => 
  state.contentForFourBlocks.firstFourBlocks;

export const secondFourBlocks = state => 
  state.contentForFourBlocks.secondFourBlocks;


export const onGetFlights = state => {
  if(!state.flightsData.flights) return;
  return state.flightsData.flights.body;
} 

export const flightsSelectorOnDepature = createSelector(
  [onGetFlights],
  (flights) => {
    if(!flights) return null;
    return flights.departure.map(flight => {
      const { term, ID } = flight;
      const expectedTime  = flight.timeDepShedule;
      const realTime = flight.timeDepFact;
      const airport = flight["airportToID.city_en"];
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


export const flightsSelectorOnArrival = createSelector(
  [onGetFlights],
  (flights) => {
    if(!flights) return null;
    return flights.arrival.map(flight => {
      const { term, ID } = flight;
      const expectedTime  = flight.timeDepShedule || flight.timeArrShedule;
      const realTime = flight.timeLandFact;
      const airport = flight["airportFromID.city_en"];
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