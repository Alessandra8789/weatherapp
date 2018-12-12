import React, { Component } from 'react';
import './index.css';
import Title from '../../components/title';
import Form from '../../components/form';
import Weather from '../../components/weather';
import API_KEY from '../../config.js';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      data:[],
      API_KEY:''
    }
  }
  componentWillMount(){
    this.setState({
      API_KEY:API_KEY
    });
  }

  // create function for form that will call api with values from fileds
  getWeather = async(event) => {
    // prewent that form from refreshing the page
    event.preventDefault();
    console.log(event);
    let city = event.target.elements.city.value;
    let country = event.target.elements.country.value;
    // console.log(city,country);
    // console.log(this.state.API_KEY);
    //  create a variable that calls the weather map api
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${this.state.API_KEY}`;
    // console.log(url);
    // create a variable to call the api and store the responce
    let api_call = await fetch(URL);
    // convert responce from api_call variable into jason format
    let data = await api_call.json();
    console.log(data);
    //  set new data to the setState
    this.setState({
      data: data
    });
  }

  render() {
    return (
      <div className="Home">
      <div className="row">
      <div className="col-md-4">
    <Title />
      </div>
      <div className="col-md-8">
        <Form  getWeather={this.getWeather} />
        <Weather data={this.state.data} />
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
