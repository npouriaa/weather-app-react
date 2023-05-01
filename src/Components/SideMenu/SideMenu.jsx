// imports
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faClock,
  faMapMarkedAlt,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.css";

const SideMenu = (props) => {
  //states
  const [loading, setLoading] = useState(true);
  const [inUse, setInUse] = useState(false);
  const [description, setDescription] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [currentWeatherImgSrc, setCurrentWeatherImgSrc] = useState("");
  const [location, setLocation] = useState("");
  const [locationImg, setLocationImg] = useState("");
  const [date, setDate] = useState("");
  const [currentClock, setCurrentClock] = useState("");
  const txtRef = useRef();
  const frmRef = useRef();

  //fill the current dat date info function
  const fillDateDetails = () => {
    let weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let w = new Date().getDay();
    let d = String(new Date()).split(" ");
    const date = `${d[2]} ${d[1]} ${d[3]} ${weekdays[w]}`;
    return date;
  };

  // this function show the cuurent time in the searched city based on the searched city local time
  const getTimeFromTimezoneCode = (timezoneCode) => {
    // Convert the timezone code to minutes
    const timezoneOffsetMins = timezoneCode / 60;

    // Get the current date object
    const currentDate = new Date();

    // Get the UTC time in milliseconds
    const utcTime = currentDate.getTime();

    // Calculate the local time in milliseconds using the timezone offset
    const localTime = utcTime + timezoneOffsetMins * 60 * 1000;

    // Create a new Date object with the local time
    const localDate = new Date(localTime);

    // Get the hours, minutes, and seconds from the local date object
    const hours = localDate.getUTCHours().toString().padStart(2, "0");
    const minutes = localDate.getUTCMinutes().toString().padStart(2, "0");

    // Format the time as "hh:mm:ss"
    const formattedTime = `${+hours + 1}:${minutes}`;

    return formattedTime;
  };

  // this function fill the searched city current data in jsx elements
  const showCurrentWeather = () => {
    let content;
    if (!loading) {
      content = (
        <div className="currentDetails-con">
          <div className="status-icon">
            <img src={currentWeatherImgSrc} alt="" />
          </div>
          <div className="temp-title">
            <h1>{currentTemp}</h1>
            <p>°C</p>
          </div>
          <div className="date">
            <div className="details-section">
              <FontAwesomeIcon className="icon" icon={faPencilAlt} />
              <p>{description}</p>
            </div>
            <div className="details-section">
              <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} />
              <p>{location}</p>
            </div>
            <div className="details-section">
              <FontAwesomeIcon className="icon" icon={faCalendarAlt} />
              <p>{date}</p>
            </div>
            <div className="details-section">
              <FontAwesomeIcon className="icon" icon={faClock} />
              <p>{currentClock}</p>
            </div>
          </div>
          <div className="city-img">
            <img src={locationImg} alt="location-img" />
          </div>
        </div>
      );
    } else {
      content = (
        <div className="loader-con">
          <div className="loader"></div>
        </div>
      );
    }

    return content;
  };

  //this function set the searched city current data to each related state 
  const setCurrentWeaherDetails = (data, currentLocationImg) => {
    setCurrentWeatherImgSrc(
      `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );
    setCurrentTemp(data.main.temp);
    setLocation(`${data.name} ${data.sys.country}`);
    setDate(fillDateDetails());
    setCurrentClock(getTimeFromTimezoneCode(data.timezone));
    setLocationImg(currentLocationImg);
    setDescription(data.weather[0].description);
    frmRef.current.reset();
  };

  // this function invoke when the form submit and get and get datas from API's
  const currentWeatherReaquest = async (e) => {
    e.preventDefault();
    setInUse(true);
    setLoading(true);
    props.loadinHandler(true);
    try {
      const responseWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${txtRef.current.value}&appid=28b78ef9f0b3e752b8afbd63bc0b2cae&units=metric`
      );
      const currentLocationImg = await axios.get(
        `https://api.unsplash.com/search/photos?query=${txtRef.current.value}&client_id=-Y859Zedlj5rmyD9NfYtG-9oJRu_w-3U32WuydaWhJY`
      );
      const next5WeatherApi = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${txtRef.current.value}&appid=98f9d3c0cc63e0b6689d74759cf58240&units=metric`
      );
      props.apiHandler(responseWeather.data, next5WeatherApi.data);
      setCurrentWeaherDetails(
        responseWeather.data,
        currentLocationImg.data.results[0].urls.small_s3
      );
    } catch (error) {
      props.errorHandler(error.message);
      console.log(error);
    }
    setLoading(false);
    props.loadinHandler(false);
    props.inUseHandler();
  };

  //useeffects
  useEffect(() => {
    txtRef.current.focus();
  }, []);

  return (
    <div className="sideMenu">
      <form
        ref={frmRef}
        onSubmit={(e) => currentWeatherReaquest(e)}
        className="form"
        action=""
      >
        <button className="search-btn" type="submit">
          <svg
            onClick={(e) => currentWeatherReaquest(e)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <input
          required
          ref={txtRef}
          type="text"
          placeholder="Search for places ..."
        />
      </form>
      {inUse ? (
        showCurrentWeather()
      ) : (
        <div className="notInUse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
            />
          </svg>
          <p>Search for places to see weather condition ...</p>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
