"use client";
import { useState } from "react";
import Footer from "./Components/Footer";
import Timer from "./Components/Timer";
import { useCountdown } from "./Components/StartTimer";

export default function Home() {

  const setTime = 14 * 24 * 60 * 60 * 1000; // set to 14 days
  const getDate = new Date().getTime();
  const [launchingtDate] = useState(getDate + setTime);

  const [days, hours, minutes, seconds] = useCountdown(launchingtDate);

  return (
    <div className="relative h-screen flex flex-col items-center bg-gradient-to-t from-[#493349] via-[#211d2b] to-[#1e1e28]">
      <div className="absolute inset-0 bg-[url('/assets/bg-stars.svg')] bg-cover bg-center opacity-80"></div>
        <div className="flex-grow">
          <h1 className="text-white text-lg text-center md:text-lg lg:text-2xl capitalize tracking-[9] pt-40">
            WE&apos;RE LAUNCHING SOON
          </h1>     
          <div className="flex flex-row justify-center items-center gap-[0.5rem] sm:gap-[0.5rem] md:gap-[1.5rem] lg:gap-[2.5rem] pt-20 w-full">     
            <Timer number={days} title="days"/>
            <Timer number={hours} title="hours"/>
            <Timer number={minutes} title="minutes"/>
            <Timer number={seconds} title="seconds"/> 
          </div>
        </div>
      <Footer/>
    </div>
  );
};


