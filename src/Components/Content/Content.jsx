import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Content.css";
import {
  faAlignRight,
  faClock,
  faDroplet,
  faSun,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const Content = (props) => {
  const showContent = () => {
    let content;
    if (props.api) {
      content = (
        <div className="mainCon">
          <div className="current-details">
            <h3>Today's Highlights</h3>
            <div className="highlights">
              <div className="highlight">
                <div className="h-title">
                  <p>Wind Status</p>
                </div>
                <div className="km">
                  <h1>{props.api[0].wind.speed}</h1>
                  <small>km/h</small>
                </div>
                <FontAwesomeIcon className="hIcons" icon={faWind} />
              </div>
              <div className="highlight">
                <div className="h-title">
                  <p>Humidity</p>
                </div>
                <div className="km">
                  <h1>{props.api[0].main.humidity}</h1>
                  <small>%</small>
                </div>
                <FontAwesomeIcon className="hIcons" icon={faDroplet} />
              </div>
              <div className="highlight">
                <div className="h-title">
                  <p>Sunrise & Sunset</p>
                </div>
                <div className="">
                  <div className="sunOp">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>
                      {props.sun[0]} <small>AM</small>
                    </h4>
                  </div>
                  <div className="sunOp">
                    <FontAwesomeIcon icon={faClock} />
                    <h4>
                      {props.sun[1]} <small>PM</small>
                    </h4>
                  </div>
                </div>
                <FontAwesomeIcon className="hIcons" icon={faSun} />
              </div>
              <div className="highlight">
                <div className="h-title">
                  <p>Pressure</p>
                </div>
                <div className="km">
                  <h1>{props.api[0].main.pressure}</h1>
                </div>
                <FontAwesomeIcon className="hIcons" icon={faAlignRight} />
              </div>
            </div>
          </div>
          <div className="nextdays">
            <h3>Next 5 Day's Highlights</h3>
            <div className="next-highlights">
              <div className="highlight">
                <p className="date">1200</p>
                <div className="status">
                  <div className="date-status">
                    <p className="clock">12:12</p>
                    <img
                      className="icon"
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt=""
                    />
                    <div className="temp">17°C / 2°C</div>
                  </div>
                  <div className="date-status">
                    <p className="clock">12:12</p>
                    <img
                      className="icon"
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt=""
                    />
                    <div className="temp">17°C / 2°C</div>
                  </div>
                  <div className="date-status">
                    <p className="clock">12:12</p>
                    <img
                      className="icon"
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt=""
                    />
                    <div className="temp">17°C / 2°C</div>
                  </div>
                  <div className="date-status">
                    <p className="clock">12:12</p>
                    <img
                      className="icon"
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt=""
                    />
                    <div className="temp">17°C / 2°C</div>
                  </div>
                  <div className="date-status">
                    <p className="clock">12:12</p>
                    <img
                      className="icon"
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt=""
                    />
                    <div className="temp">17°C / 2°C</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      content = (
        <div className="error">
          <p>{props.error}</p>
        </div>
      );
    }

    return content;
  };

  return (
    <div className="content">
      {props.inUse ? (
        props.loading ? (
          <div className="loader-con">
            <div className="loader"></div>
          </div>
        ) : (
          showContent()
        )
      ) : props.loading ? (
        <div className="loader-con">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="notInUse">
          <p>Nothing to show yet ...</p>
        </div>
      )}
    </div>
  );
};

export default Content;
