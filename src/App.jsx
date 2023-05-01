//imports
import React, { useEffect, useState } from "react";
import SideMenu from "./Components/SideMenu/SideMenu";
import Content from "./Components/Content/Content";
import { getSunrise, getSunset } from "sunrise-sunset-js";
import "./App.css";

const App = () => {
  //states
  const [inUse, setInUse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [api, setApi] = useState();
  const [sun, setSun] = useState([0, 0]);
  const [error, setError] = useState("");
  const [day1, setDay1] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();

  // if the use is using the app and its inUse mode the inUse state set to true
  const inUseHandler = () => {
    setInUse(true);
  };

  //this function show the loading in content component
  const loadinHandler = (data) => {
    setLoading(data);
  };

  // if there is error in getting data from api this function shows it
  const errorHandler = (data) => {
    setError(data);
  };

  //this finction set the api to related state
  const apiHandler = (currentData, nextData) => {
    let array = [currentData, nextData];
    setApi(array);
  };

  // this function will set the next 4 days highlights to each related state
  const showNextDays = () => {
    if (api !== undefined) {
      const currentDateDay = +Date().split(" ")[2];
      const dt1 = currentDateDay + 1;
      const dt2 = currentDateDay + 2;
      const dt3 = currentDateDay + 3;
      const dt4 = currentDateDay + 4;
      const main = api[1].list;
      const filteredArray1 = main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt1
      );
      const filteredArray2 = main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt2
      );
      const filteredArray3 = main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt3
      );
      const filteredArray4 = main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt4
      );


      setDay1(filteredArray1);
      setDay2(filteredArray2);
      setDay3(filteredArray3);
      setDay4(filteredArray4);
    }
  };

  // this function show the searched city sunset and sunrise based on the user local time 
  const sunHandler = () => {
    if (api !== undefined) {
      let fsunrise = getSunrise(api[0].coord.lat, api[0].coord.lon) + "";
      let fsunset = getSunset(api[0].coord.lat, api[0].coord.lon) + "";
      let array = [fsunrise.split(" ")[4], fsunset.split(" ")[4]];
      setSun(array);
    }
  };

  //useeffects
  useEffect(() => {
    sunHandler();
    showNextDays();
  }, [api]);

  return (
    <div className="container">
      <h1 className="app-title">Weather app React JS</h1>
      <div className="content-con">
        <SideMenu
          errorHandler={errorHandler}
          apiHandler={apiHandler}
          loadinHandler={loadinHandler}
          inUseHandler={inUseHandler}
        />
        <Content
          error={error}
          sun={sun}
          api={api}
          loading={loading}
          inUse={inUse}
          day1={day1}
          day2={day2}
          day3={day3}
          day4={day4}
        />
      </div>
    </div>
  );
};

export default App;
