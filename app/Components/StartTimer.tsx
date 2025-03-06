"use client";

import { useEffect, useState } from "react";
//NOTE: Found a custom hook that manages countdown called useCountdown
const useCountdown = (launchingtDate: number) => {
  const calculateTimeLeft = () => Math.max(launchingtDate - new Date().getTime(), 0); //Make sure I don't get a negative number after the date is due
  
  const [countDown, setCountDown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [launchingtDate]);

  return getTimeValues(countDown);
};

const getTimeValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [ensureTwoDigits(days), ensureTwoDigits(hours), ensureTwoDigits(minutes), ensureTwoDigits(seconds)];
};

//Note: Had to make this function to make sure I had two digits in each box, found the padStart method so I just add a 0 if the length is less than 2
function ensureTwoDigits(number: number) {
  return number.toString().padStart(2, "0");
}
  
  export { useCountdown };
