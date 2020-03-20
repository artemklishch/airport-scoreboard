import { onGetDataAboutFlights } from './main.gateway';

export const DEPARTURED = 'FLIGHTS/DEPSRTURED';
export const ARRIVED = 'FLIGHTS/ARRIVED';
export const CERTAIN_DEPARTURED = 'FLIGHTS/CERTAIN_DEPARTURED';

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

export const onGetCertainDeparturedFlights = (flights) =>{
    return {
      type: CERTAIN_DEPARTURED,
      payload: { flights, } 
    } 
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

export const onGetDataForCertainDepatures = (flightNum) => {
  return function(dispatch){
    onGetDataAboutFlights()
      .then(flights => {
        const arr = flights.body.departure.filter(flight => flight["planeTypeID.code"] === flightNum);
        dispatch(onGetCertainDeparturedFlights(arr));
      }
        
      );
  }
};
