import React, { Component } from 'react';


import './index.css';
import Title from '../../components/title';
import Form from '../../components/form'
import Weather from '../../components/weather'
class Home extends Component {
  render() {
    return (
      <div className="Home">
      <div className="row">
      <div className="col-md-4">
    <Title />
      </div>
      <div className="col-md-8">
        <Form />
        <Weather />
      </div>
      </div>
      </div>
    );
  }
}

export default Home;
