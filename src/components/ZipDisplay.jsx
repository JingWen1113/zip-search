import React, { Component } from "react";

class ZipDisplay extends Component {
  // getCites = (props) => {
  //     let cityObjects = props.cities;
  //     let cityArr = [];
  //     cityObjects.forEach(cityArr.push(cityObjects.City));
  //     console.log("Here is the array:", cityArr);
  //     return cityArr;
  // }

  render() {
    //city name
    const cities = this.props.cities.map((city) => (
      <h1 className="city-headline">City: {city.City}</h1>
    ));

    //Metadata for each city
    const countries = this.props.cities.map((city) => (
      <li className="country-headline">Country: {city.Country}</li>
    ));

    const states = this.props.cities.map((city) => (
      <li className="state-headline">State: {city.State}</li>
    ));

    const latitude = this.props.cities.map((city) => (
      <li className="latitude-headline">Latitude: {city.Lat}</li>
    ));

    const longitude = this.props.cities.map((city) => (
      <li className="longtitude-headline">Longitude: {city.Long}</li>
    ));

    const population = this.props.cities.map((city) => (
      <li className="population-headline">
        Estimated Population: {city.EstimatedPopulation}
      </li>
    ));

    let cityCount = this.props.cities.length; //city count needed for the for-loop
    let container = []; //array holding each city found, with the metadata in a list underneath

    //use for loop to push a div with each city, and the metadata under that city
    for (let i = 0; i < cityCount; i++) {
      container.push(
        <div className="zip-column">
          {" "}
          {/* Division for each city found */}
          <div>{cities[i]}</div> {/*  first pushes the city header */}
          <ul>{countries[i]}</ul>{" "}
          {/*then pushes the metadata as a list under the header*/}
          <ul>{states[i]}</ul>
          <ul>{latitude[i]}</ul>
          <ul>{longitude[i]}</ul>
          <ul>{population[i]}</ul>
        </div>
      );
    } //end For loop

    return <div className="zip-content">{container}</div>;
  }
}

export default ZipDisplay;
