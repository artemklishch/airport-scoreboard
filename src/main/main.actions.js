export const DEPARTURED = 'FLIGHTS/DEPSRTURED';
export const ARRIVED = 'FLIGHTS/ARRIVED';

export const onGetDeparturedFlights = flightType => {
  return {
    type: DEPARTURED,
    payload: { flightType, } 
  };
};

export const onGetArrivedFlights = flightType => {
  return {
    type: ARRIVED,
    payload: { flightType, } 
  };
};

