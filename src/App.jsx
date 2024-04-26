import { useEffect, useState } from "react";
import "./App.css";
import Details from "./components/details";
import Temperature from "./components/temperature";

function App() {
  const [city, setCity] = useState("Cuttack");
  const [weatherDetails, setWeatherDetails] = useState(null);

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setWeatherDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city]);

  return (
    <div className="bg-[#1F213A] h-screen flex justify-center align-top">
      <div className="mt-40 w-1/5 h-1/3">
        {weatherDetails && (
          <Temperature
            setCity={setCity}
            city={city}
            stats={{
              temperature: weatherDetails.current.temp_c,
              condition: weatherDetails.current.condition.text,
              isDay: weatherDetails.current.is_day,
              location: weatherDetails.location.name,
              time: weatherDetails.location.localtime,
            }}
          />
        )}
      </div>
      <div className='mt-40 w-1/3 h-1/3 p-10 grid grid-cols-2 gap-6"'>
        <h2 className="text-slate-200 text-2xl col-span-2">Weather Details</h2>
        {weatherDetails && (
          <>
            <Details stats={{
              title: "Wind speed",
              value: weatherDetails.current.wind_kph,
              unit: "kph"
            }} />
            <Details stats={{
              title: "Humidity",
              value: weatherDetails.current.humidity,
              unit: "%"
            }} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
