import React, { Component } from 'react';
import SearchBar from '../containers/Search_bar';
import WeatherList from '../containers/Weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Predpoveď počasia na 5 dní</h1>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
