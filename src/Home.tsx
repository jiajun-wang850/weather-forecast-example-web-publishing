/**
 * This is the file we will be working on in the workshop.
 */
import React from "react";
import { motion } from "framer-motion";
import Menu from "./Menu";
import WeatherIcon from "./WeatherIcon";
import { weatherData } from "./weather-data";

const slideDown = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.8 }
  },
  hidden: { opacity: 0, y: -25 }
};

const forecastFadeIn = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8
    }
  }
};

export default function Home() {
  const forecast = weatherData.map((d) => {
    return (
      <motion.div
        className="mr-2"
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <DayForecast
          weather={d.weather}
          high={d.high}
          low={d.low}
          day={d.day}
        />
      </motion.div>
    );
  });

  return (
    <div className="overflow-hidden">
      <motion.div className="background" />
      <motion.main
        className="absolute top-0 left-0 w-screen h-screen pt-32 pl-16 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={slideDown}
      >
        <h1 className="text-2xl text-gray-300">Sunday, 6 September</h1>
        <div className="flex items-center">
          <WeatherIcon
            weather={"cloudy"}
            className="w-32 mx-8 text-white fill-current"
          />
          <div className="flex flex-col text-4xl font-medium">
            <span>9°</span>
            <span className="-mt-2">0°</span>
          </div>
        </div>
        <motion.div
          className="flex h-screen"
          initial="hidden"
          transition={{ duration: 0.4 }}
          animate={"visible"}
          variants={forecastFadeIn}
          drag="x"
          dragConstraints={{ left: -200, right: 0 }}
        >
          {forecast}
        </motion.div>
      </motion.main>
      <Menu />
    </div>
  );
}

interface DayForecastProps {
  weather: string;
  high: number;
  low: number;
  day: string;
}

const DayForecast = ({ weather, high, low, day }: DayForecastProps) => {
  let accentClass = "text-blue-200";
  if (day === "Sat" || day === "Sun") {
    accentClass = "text-teal-200";
  }

  return (
    <div className={`w-16 flex flex-col items-center ${accentClass}`}>
      <WeatherIcon weather={weather} className="w-16 fill-current" />
      <div className="flex flex-col text-2xl font-medium items-center">
        <span>{high}°</span>
        <span className="-mt-2">{low}°</span>
      </div>
      <span className="mt-2 font-light">{day}</span>
    </div>
  );
};
