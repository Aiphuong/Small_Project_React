import "./App.css";
import Day from "./components/Day";
import Header from "./components/Layout/Header";
import Details from "./components/Day/Details";
import Search from "./components/Search";
import React, { useState, useEffect } from "react";
import Forecast from "./components/Day/Forecast/index";

function App() {
  const [valueInput, setValueInput] = useState("Ho Chi Minh");
  const [weatherInfo, setWeatherInfo] = useState([]);
  const [err, setErr] = useState(true);

  useEffect(() => {
    handleSearchCity();
  }, [valueInput])

  const handleSearchCity = (e) => {
    e?.preventDefault();
    const APIkey = "e2257ee8c4688b63bb83e77c5b570406";
    console.log(APIkey);

    const weather = `https://api.openweathermap.org/data/2.5/weather?q=${valueInput}&APPID=${APIkey}&units=metric`;
    const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${valueInput}&APPID=${APIkey}&units=metric`;

    Promise.all([fetch(weather), fetch(forecast)])
      .then(([res1, res2]) => {
        if (res1.ok && res2.ok) {
          return Promise.all([res1.json(), res2.json()]);
        }
        throw Error(res1.statusText, res2.statusText);
      })
      .then(([data1, data2]) => {
        const months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "Nocvember",
          "December",
        ];
        const days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        const sunset = new Date(data1.sys.sunset * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const sunrise = new Date(data1.sys.sunrise * 1000)
          .toLocaleTimeString()
          .slice(0, 5);
        const weatherInfo = {
          city: data1.name,
          country: data1.sys.country,
          date,
          dateNow: data1.date,
          description: data1.weather[0].description,
          main: data1.weather[0].main,
          temp: data1.main.temp,
          highestTemp: data1.main.temp_max,
          lowestTemp: data1.main.temp_min,
          sunrise,
          sunset,
          clouds: data1.clouds.all,
          humidity: data1.main.humidity,
          wind: data1.wind.speed,
          forecast: data2.list,
        };
        setWeatherInfo(weatherInfo);
        console.log(weatherInfo);
        setErr(false);
      })
      .catch((error) => {
        setErr(true);
        setWeatherInfo(null);
        // alert("khong co, nhap lai");
      });
  };
  console.log(err);

  const onChange = (e) => {
    setValueInput(e.target.value);
  };

  return (
    <div className="site-content">
      <div className="site-header">
        <Header />
      </div>
      <Search value={valueInput} change={onChange} submit={handleSearchCity} />
      {!err && (
        <>
          <div className="forecast-table">
            <Day weatherInfo={weatherInfo} />
          </div>
          <main className="main-content">
            <Details weatherInfo={weatherInfo} />
          </main>
          <main className="forecast-table card">
            <Forecast weatherInfo={weatherInfo} />
          </main>
        </>
      )}
      ;
    </div>
  );
}

// class App extends React.Component {
//   state = {
//     valueInput: "Ho Chi Minh",
//     weatherInfo: [],
//     err: true,
//   };

//   componentDidMount() {
//     this.handleSearchCity()
//   }

//   onChange = (e) => {
//     this.setState({valueInput: e.target.value})
//   }

//   handleSearchCity = (e) => {
//     e?.preventDefault();
//     const APIkey = "e2257ee8c4688b63bb83e77c5b570406";

//     const weather = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.valueInput}&APPID=${APIkey}&units=metric`;
//     const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.valueInput}&APPID=${APIkey}&units=metric`;

//     Promise.all([fetch(weather), fetch(forecast)])
//       .then(([res1, res2]) => {
//         if (res1.ok && res2.ok) {
//           return Promise.all([res1.json(), res2.json()]);
//         }
//         throw Error(res1.statusText, res2.statusText);
//       })
//       .then(([data1, data2]) => {
//         const months = [
//           "January",
//           "February",
//           "March",
//           "April",
//           "May",
//           "June",
//           "July",
//           "August",
//           "September",
//           "October",
//           "Nocvember",
//           "December",
//         ];
//         const days = [
//           "Sunday",
//           "Monday",
//           "Tuesday",
//           "Wednesday",
//           "Thursday",
//           "Friday",
//           "Saturday",
//         ];
//         const currentDate = new Date();
//         const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
//           months[currentDate.getMonth()]
//         }`;
//         const sunset = new Date(data1.sys.sunset * 1000)
//           .toLocaleTimeString()
//           .slice(0, 5);
//         const sunrise = new Date(data1.sys.sunrise * 1000)
//           .toLocaleTimeString()
//           .slice(0, 5);
//         const weatherInfo = {
//           city: data1.name,
//           country: data1.sys.country,
//           date,
//           dateNow: data1.date,
//           description: data1.weather[0].description,
//           main: data1.weather[0].main,
//           temp: data1.main.temp,
//           highestTemp: data1.main.temp_max,
//           lowestTemp: data1.main.temp_min,
//           sunrise,
//           sunset,
//           clouds: data1.clouds.all,
//           humidity: data1.main.humidity,
//           wind: data1.wind.speed,
//           forecast: data2.list,
//         };
//         this.setState({weatherInfo: weatherInfo, err: false})
//       })
//       .catch((error) => {
//         this.setState({err: true, weatherInfo: null})
//         alert("khong co, nhap lai");
//       });
//   }

//   render() {
//     return (
//       <div className="site-content">
//         <div className="site-header">
//           <Header />
//         </div>
//         <Search
//           value={this.state.valueInput}
//           change={this.onChange}
//           submit={this.handleSearchCity}
//         />
//         {!this.state.err && (
//           <>
//             <div className="forecast-table">
//               <Day weatherInfo={this.state.weatherInfo} />
//             </div>
//             <main className="main-content">
//               <Details weatherInfo={this.state.weatherInfo} />
//             </main>
//             <main className="forecast-table card">
//               <Forecast weatherInfo={this.state.weatherInfo} />
//             </main>
//           </>
//         )}
//         ;
//       </div>
//     );
//   }
// }

export default App;
