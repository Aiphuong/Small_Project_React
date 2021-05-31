import React from "react";

const Forecast = (props) => {
  const { weatherInfo } = props;

  return (
    <>
      {weatherInfo.forecast.map((item) => (
        <div className="forecast-item" key={item.dt}>
          <div className="forecast-header">
            <div className="day">
              {item.dt_txt.slice(8, 10)}.{item.dt_txt.slice(5, 7)}
            </div>
          </div>
          <div className="forecast-content">
            <div className="forecast-icon"></div>
            <div className="degree">
              {Math.floor(item.main.temp * 1) / 1}
              <sup>o</sup>
            </div>
            <div>{item.dt_txt.slice(11, 13) * 1}:00</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Forecast;
