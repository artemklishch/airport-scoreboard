import { DEPARTURED, ARRIVED } from './main.actions';
import { onGetDataAboutFlights } from './main.gateway';

const initialContentState = {
  firstFourBlocks: {
    first: {
      header: 'directions to airport',
      text: '2 Medova str., Kyiv Terminals A, B, and D',
      message: 'Get directions',
    },
    second: {
      header: 'Airline tickets',
      text: 'Any destination. Best fares.',
      message: 'Search',
    },
    third: {
      header: 'Parking',
      text: 'Fees and guide to parking',
      message: 'Find out more',
    },
    fourth: {
      header: 'Info centre',
      text: '24/7 Information at +38 (044) 364-45-14',
      message: 'Contact now',
    },
  },
  secondFourBlocks: {
    first: {
      header: 'iev sevices',
      text: 'Online booking of Kyiv airport',
      message: 'Find out more',
    },
    second: {
      header: 'help iev get better',
      text: 'A short questionnaire on airport services',
      message: 'Take part',
    },
    third: {
      header: 'Airlines & destinations',
      text: 'Discover your flight and destination options',
      message: 'View',
    },
    fourth: {
      header: 'Vip terminal',
      text: 'Exclusive services for VIP clients',
      message: 'Terminal B',
    },
  },
  flights: [],
};
export const contentReducer = (state = initialContentState, action) => {
  switch(action.type){
    case DEPARTURED: {
      const depaturedFlights = [];
      onGetDataAboutFlights()
        .then(flightsData => {
          depaturedFlights = flightsData.departure;
        })
      return {
        ...state,
        flights: 
      };
    }
    default: return state;
  };
};