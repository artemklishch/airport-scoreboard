import { createSelector } from 'reselect';

export const firstFourBlocks = state => 
  state.contentForFourBlocks.firstFourBlocks;

export const secondFourBlocks = state => 
  state.contentForFourBlocks.secondFourBlocks;


const flightsSelector = state => state.flightsData.flights;
export const onSelectProps = createSelector(
  [flightsSelector],
  (flights) => 
    flights.reduce((acc, flight) => {
      const { term, ID } = flight;
      const expectedTime  = flight.timeDepShedule || flight.timeArrShedule;
      const realTime = flight.timeDepFact || flight.timeLandFact;
      const airport = flight["airportToID.city_en"] || flight["airportFromID.city_en"];
      const flightNum = flight["planeTypeID.code"] || flight["planeTypeID.code"];
      const airline = flight.airline.en.name;
      const tempObj = {
        ID,
        term,
        realTime,
        airport,
        expectedTime,
        airline,
        flightNum,
      };
      return acc.concat(tempObj);
    }, [])
);