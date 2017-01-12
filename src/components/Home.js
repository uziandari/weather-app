import React, { Component } from 'react';

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
          <h2 className="country">{this.state.country}</h2>
          <h3 className="temperature">{this.state.currentTemp}</h3>
          <h2 className="weather">{this.state.currentWeather}</h2>
        </div>
      </div>
    )
  }
}
