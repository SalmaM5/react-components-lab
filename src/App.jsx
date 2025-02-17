// src/App.jsx
import './App.css'
import WeatherForecasts from "./components/WeatherForecast";

const App = () =>{

  const weatherForecasts = [
    {
      day: 'Mon',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg',
      imgAlt: 'sun icon',
      conditions: 'sunny',
      time: 'Morning',
      id:1,
    },
    {
      day: 'Tue',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg',
      imgAlt: 'moon icon',
      conditions: 'clear',
      time: 'Night',
      id:2,
    },
    {
      day: 'Wed',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg',
      imgAlt: 'clouds with lightning icon',
      conditions: 'stormy',
      time: 'All Day',
      id:3,
    },
    {
      day: 'Thu',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg',
      imgAlt: 'sun overcast by clouds icon',
      conditions: 'overcast',
      time: 'Evening',
      id:4,
    },
    {
      day: 'Fri',
      img: 'http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg',
      imgAlt: 'moon overcast by clouds icon',
      conditions: 'cloudy',
      time: 'Night',
      id:5,
    },
  ];

  return (
    <>
      <h1>Local Weather</h1>
      <section>
        {weatherForecasts.map((weather) => (

        
            <WeatherForecasts
              key={weather.id}
              day={weather.day}
              img={weather.img}
              imgAlt={weather.imgAlt}
              conditions={weather.conditions}
              time={weather.time} />


       

        ))}
      </section>
    </>
  );
}

export default App
