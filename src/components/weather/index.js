import React, { Component } from 'react';

import './index.css';

class Weather extends Component {
  render() {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-md-12">
            <h3> City</h3>
            <h3> Country</h3>
            <h3> Temperature </h3>
            <h3> Humidity</h3>
            <h3> Description: </h3>
            {/* Error section should only appear if an error occurs if not do not show*/}
            <h3> Error:</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
