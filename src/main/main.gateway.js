export const onGetDataAboutFlights = () => {
  const todayDate = new Date().toLocaleDateString();
  return fetch(`http://api.iev.aero/api/flights/${todayDate}`)
    .then(response => {
      if(response.ok) return response.json();
      throw new Error();
    });
};