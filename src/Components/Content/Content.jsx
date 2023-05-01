// imports
import React from "react";
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
  
  //this function fill and show the next 4 days highlights from the props (the props comes from App components)
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
            <h3>Next 4 Day's Highlights</h3>
            <div className="next-highlights">
              <div className="highlight">
                <p className="date">
                  {props.day1 !== undefined ? (
                    <p>{props.day1[0].dt_txt.split(" ")[0]}</p>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="status">
                  <div className="date-status">
                    <p className="clock">
                      {props.day1 !== undefined ? (
                        <p>{props.day1[0].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day1 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day1[0].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day1 !== undefined ? (
                        <p>
                          {props.day1[0].main.temp_min}°C /
                          {props.day1[0].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day1 !== undefined ? (
                        <p>{props.day1[2].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day1 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day1[2].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day1 !== undefined ? (
                        <p>
                          {props.day1[4].main.temp_min}°C /
                          {props.day1[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day1 !== undefined ? (
                        <p>{props.day1[4].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day1 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day1[4].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day1 !== undefined ? (
                        <p>
                          {props.day1[4].main.temp_min}°C /
                          {props.day1[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day1 !== undefined ? (
                        <p>{props.day1[6].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day1 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day1[6].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day1 !== undefined ? (
                        <p>
                          {props.day1[6].main.temp_min}°C /
                          {props.day1[6].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day1 !== undefined ? (
                        <p>{props.day1[7].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day1 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day1[7].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day1 !== undefined ? (
                        <p>
                          {props.day1[7].main.temp_min}°C /
                          {props.day1[7].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight">
                <p className="date">
                  {props.day2 !== undefined ? (
                    <p>{props.day2[0].dt_txt.split(" ")[0]}</p>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="status">
                  <div className="date-status">
                    <p className="clock">
                      {props.day2 !== undefined ? (
                        <p>{props.day2[0].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day2 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day2[0].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day2 !== undefined ? (
                        <p>
                          {props.day2[0].main.temp_min}°C /
                          {props.day2[0].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day2 !== undefined ? (
                        <p>{props.day2[2].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day2 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day2[2].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day2 !== undefined ? (
                        <p>
                          {props.day2[4].main.temp_min}°C /
                          {props.day2[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day2 !== undefined ? (
                        <p>{props.day2[4].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day2 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day2[4].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day2 !== undefined ? (
                        <p>
                          {props.day2[4].main.temp_min}°C /
                          {props.day2[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day2 !== undefined ? (
                        <p>{props.day2[6].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day2 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day2[6].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day2 !== undefined ? (
                        <p>
                          {props.day2[6].main.temp_min}°C /
                          {props.day2[6].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day2 !== undefined ? (
                        <p>{props.day2[7].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day2 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day2[7].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day2 !== undefined ? (
                        <p>
                          {props.day2[7].main.temp_min}°C /
                          {props.day2[7].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight">
                <p className="date">
                  {props.day3 !== undefined ? (
                    <p>{props.day3[0].dt_txt.split(" ")[0]}</p>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="status">
                  <div className="date-status">
                    <p className="clock">
                      {props.day3 !== undefined ? (
                        <p>{props.day3[0].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day3 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day3[0].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day3 !== undefined ? (
                        <p>
                          {props.day3[0].main.temp_min}°C /
                          {props.day3[0].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day3 !== undefined ? (
                        <p>{props.day3[2].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day3 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day3[2].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day3 !== undefined ? (
                        <p>
                          {props.day3[4].main.temp_min}°C /
                          {props.day3[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day3 !== undefined ? (
                        <p>{props.day3[4].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day3 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day3[4].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day3 !== undefined ? (
                        <p>
                          {props.day3[4].main.temp_min}°C /
                          {props.day3[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day3 !== undefined ? (
                        <p>{props.day3[6].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day3 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day3[6].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day3 !== undefined ? (
                        <p>
                          {props.day3[6].main.temp_min}°C /
                          {props.day3[6].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day3 !== undefined ? (
                        <p>{props.day3[7].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day3 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day3[7].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day3 !== undefined ? (
                        <p>
                          {props.day3[7].main.temp_min}°C /
                          {props.day3[7].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight">
                <p className="date">
                  {props.day4 !== undefined ? (
                    <p>{props.day4[0].dt_txt.split(" ")[0]}</p>
                  ) : (
                    <></>
                  )}
                </p>
                <div className="status">
                  <div className="date-status">
                    <p className="clock">
                      {props.day4 !== undefined ? (
                        <p>{props.day4[0].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day4 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day4[0].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day4 !== undefined ? (
                        <p>
                          {props.day4[0].main.temp_min}°C /
                          {props.day4[0].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day4 !== undefined ? (
                        <p>{props.day4[2].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day4 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day4[2].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day4 !== undefined ? (
                        <p>
                          {props.day4[4].main.temp_min}°C /
                          {props.day4[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day4 !== undefined ? (
                        <p>{props.day4[4].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day4 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day4[4].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day4 !== undefined ? (
                        <p>
                          {props.day4[4].main.temp_min}°C /
                          {props.day4[4].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day4 !== undefined ? (
                        <p>{props.day4[6].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day4 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day4[6].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day4 !== undefined ? (
                        <p>
                          {props.day4[6].main.temp_min}°C /
                          {props.day4[6].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="date-status">
                    <p className="clock">
                      {props.day4 !== undefined ? (
                        <p>{props.day4[7].dt_txt.split(" ")[1]}</p>
                      ) : (
                        <></>
                      )}
                    </p>
                    <img
                      className="icon"
                      src={
                        props.day4 !== undefined
                          ? `https://openweathermap.org/img/wn/${props.day4[7].weather[0].icon}@2x.png`
                          : ""
                      }
                      alt=""
                    />
                    <div className="temp">
                      {props.day4 !== undefined ? (
                        <p>
                          {props.day4[7].main.temp_min}°C /
                          {props.day4[7].main.temp_max}°C
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
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
