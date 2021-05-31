import React, { useEffect } from "react";
import useDeviceDetect from "../../../utils/useDeviceDetect";

const Details = (props) => {
  const { weatherInfo } = props;
  // const { check } = useDeviceDetect(weatherInfo);

  return (
    <>
      {/* {check && ( */}
      <div className="container">
        <div className="card card-details">
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr">
              {Math.floor(weatherInfo.highestTemp)}&#176;
            </h4>
            <span className="sc-AxhUy iAIeLK">Hight</span>
          </div>
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr"> {weatherInfo.wind}mph</h4>
            <span className="sc-AxhUy iAIeLK">Wind</span>
          </div>
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr"> {weatherInfo.sunrise}</h4>
            <span className="sc-AxhUy iAIeLK">Sunrise</span>
          </div>
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr">
              {" "}
              {Math.floor(weatherInfo.lowestTemp)}&#176;
            </h4>
            <span className="sc-AxhUy iAIeLK">Low</span>
          </div>
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr">{weatherInfo.humidity}%</h4>
            <span className="sc-AxhUy iAIeLK">Rain</span>
          </div>
          <div className="sc-fzokOt hLgJkJ">
            <h4 className="sc-AxhCb fWFNAr">{weatherInfo.sunset}</h4>
            <span className="sc-AxhUy iAIeLK">Sunset</span>
          </div>
        </div>
      </div>
      {/* )} */};
    </>
  );
};

export default Details;
