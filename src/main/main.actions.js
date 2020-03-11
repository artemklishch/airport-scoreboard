import { onGetDataAboutFlights } from './main.gateway';

export const DEPARTURED = 'FLIGHTS/DEPSRTURED';
export const ARRIVED = 'FLIGHTS/ARRIVED';

export const onGetDeparturedFlights = flights => {
  return {
    type: DEPARTURED,
    payload: { flights, } 
  };
};

export const onGetArrivedFlights = flights => {
  return {
    type: ARRIVED,
    payload: { flights, } 
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

export const onGetDataForArrivals = () => {
  return function(dispatch){
    onGetDataAboutFlights()
      .then(flights => 
        dispatch(onGetArrivedFlights(flights.body.arrival))
      );
  }
};
