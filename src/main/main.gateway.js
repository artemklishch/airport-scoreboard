export const onGetDataAboutFlights = () => {
  const todayDate = new Date().toLocaleDateString().split('.').join('-');
  return fetch(`https://api.iev.aero/api/flights/${todayDate}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error();
    });
};


export const onChangeAnswer = flights => {
  return flights.reduce((acc, flight) => {
     const { term, ID } = flight;
     const expectedTime  = flight.timeDepShedule || flight.timeArrShedule;
     const realTime = flight.timeTakeofFact || flight.timeLandFact;
     const airport = flight["airportToID.city_en"] || flight["airportFromID.city_en"];
     const flightNum = flight.codeShareData[0].codeShare;
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
 };