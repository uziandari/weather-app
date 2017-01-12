import React, { Component } from 'react';

import '../css/home';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Loading...',
      country: "Loading...",
      currentWeather: "Loading...",
      currentTemp: 0,
      currentUnit: "F",
      availableUnit: "C"
    };
  }

  render() {
    return (
      <div className="home-wrapper">
        <div className="weather-box">
          <h1 className="city">City: {this.state.city}</h1>
          <p className="country">Country: {this.state.country}</p>
          <h3 className="temperature">Temp: {this.state.currentTemp}</h3>
          <h2 className="weather">Weather: {this.state.currentWeather}</h2>
        </div>
      </div>
    )
  }
}
