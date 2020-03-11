import { onGetDataAboutFlights } from './main.gateway';

export const DEPARTURED = 'FLIGHTS/DEPSRTURED';
export const ARRIVED = 'FLIGHTS/ARRIVED';

export const onGetDeparturedFlights = flights => {
  return {
    type: DEPARTURED,
    payload: { flights, } 
  };
};

export const onGetArrivedFlights = flightType => {
  return {
    type: ARRIVED,
    payload: { flightType, } 
  };
};


export const onGetDataForDepatures = () => {
  return function(dispatch){
    onGetDataAboutFlights()
      .then(flights => 
        dispatch(onGetDeparturedFlights(flights.body.departure))
      );
  }
};
