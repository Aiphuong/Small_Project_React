import React, { useEffect } from "react";
import useDeviceDetect from "../../utils/useDeviceDetect";
import Forecast from "./Forecast/index";

const Day = (props) => {
  const { weatherInfo } = props;
  // const { check } = useDeviceDetect(weatherInfo);

  return (
    <>
      {/* {check && ( */}
      <div className="container">
        <div className="forecast-container">
          <div className="today forecast">
            <div className="forecast-header">
              {/* <div className="day">{weatherInfo.date}</div> */}
              <div className="date">{weatherInfo.date}</div>
            </div>
            <div className="forecast-content">
              <div className="location">
                {weatherInfo.city}, {weatherInfo.country}
              </div>
              <div className="degree">
                <div className="num">{Math.floor(weatherInfo.temp)}&#176;C</div>
                <div className="fad fa-clouds-sun ">
                  <i className="fad fa-clouds-sun"></i>
                </div>
              </div>
              <span>
                <i className="fad fa-clouds-sun"></i>
                {weatherInfo.humidity}%
              </span>
              <span>
                <i className="fad fa-clouds-sun"></i>
                {weatherInfo.main}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
};

export default Day;
