import { onGetDataAboutFlights } from './main.gateway';

export const FLIGHTS_DATA = 'FLIGHTS_DATA' ;
const dataFromServer = flightsData => {
  return {
    type: FLIGHTS_DATA,
    payload: { flightsData }
  };
};
export const onGetDataFromServer = () => {
  return function(dispatch){
    onGetDataAboutFlights()
    .then(flights => console.log(flights));
      // .then(flights => dispatch(dataFromServer(flights)))
  };
};