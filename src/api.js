import superagent from 'superagent';
import jsonp from 'superagent-jsonp';

export function getWeatherData(units, coords) {
  return new Promise(function(resolve, reject) {
    var parsedUnits = units === 'C' ? 'metric' : 'imperial';

    superagent.get('http://api.openweathermap.org/data/2.5/weather')
      .query({
        units: parsedUnits,
        lat: coords.lat,
        lon: coords.lon,
        appid: '384c5823b28d8be0550125d883398133'
      })
      .use(jsonp)
      .end((error, Home) => {
        if (error) {
          reject(error);
        } else {
          resolve(Home);
        }
      });

  });
}


export function getLocationCoords() {

  return new Promise(function(resolve, reject) {

    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        (location) => {
          resolve({
            lat: location.coords.lat,
            lon: location.coords.lon
          });
        },
        (error) => {
          reject(error);
        }
      );
    } else {
      superagent.get('http://ipinfo.io/json')
        .use(jsonp)
        .end((error, locationData) => {
          if (error) {
            reject(error);
          } else {
            resolve(locationData);
          }
        });
    }

  });

}
