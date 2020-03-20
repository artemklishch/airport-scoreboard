import moment from 'moment';

export const onGetDataAboutFlights = () => {
  const todayDate = new Date();
  return fetch(`https://api.iev.aero/api/flights/${moment(todayDate).format("DD-MM-YYYY")}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error();
    });
};