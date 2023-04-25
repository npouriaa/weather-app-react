import React, { useEffect, useState } from "react";
import SideMenu from "./Components/SideMenu/SideMenu";
import Content from "./Components/Content/Content";
import { getSunrise, getSunset } from "sunrise-sunset-js";
import "./App.css";

const App = () => {
  const [inUse, setInUse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [api, setApi] = useState();
  const [sun, setSun] = useState([0, 0]);
  const [error, setError] = useState("");
  const [day1, setDay1] = useState();
  const [day2, setDay2] = useState();
  const [day3, setDay3] = useState();
  const [day4, setDay4] = useState();
  const [day5, setDay5] = useState();

  const inUseHandler = () => {
    setInUse(true);
  };
  const loadinHandler = (data) => {
    setLoading(data);
  };

  const errorHandler = (data) => {
    setError(data);
  };

  const apiHandler = (currentData, nextData) => {
    let array = [currentData, nextData];
    setApi(array);
  };

  const showNextDays = async () => {
    if (api !== undefined) {
      const currentDateDay = +Date().split(" ")[2];
      const dt1 = currentDateDay + 1;
      const dt2 = currentDateDay + 2;
      const dt3 = currentDateDay + 3;
      const dt4 = currentDateDay + 4;
      const dt5 = currentDateDay + 5;
      const main = api[1].list;
      const filteredArray1 = await main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt1
      );
      const filteredArray2 = await main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt2
      );
      const filteredArray3 = await main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt3
      );
      const filteredArray4 = await main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt4
      );
      const filteredArray5 = await main.filter(
        (item) => +item.dt_txt.split(" ")[0].split("-")[2] === dt5
      );

      setDay1(filteredArray1);
      setDay2(filteredArray2);
      setDay3(filteredArray3);
      setDay4(filteredArray4);
      setDay5(filteredArray5);
    }
  };

  const sunHandler = () => {
    if (api !== undefined) {
      let fsunrise = getSunrise(api[0].coord.lat, api[0].coord.lon) + "";
      let fsunset = getSunset(api[0].coord.lat, api[0].coord.lon) + "";
      let array = [fsunrise.split(" ")[4], fsunset.split(" ")[4]];
      setSun(array);
    }
  };

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
          day5={day5}
        />
      </div>
    </div>
  );
};

export default App;
