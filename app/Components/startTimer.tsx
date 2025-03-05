"use client";

import { useEffect, useState } from "react";

const useCountdown = (targetDate: number) => {
  const calculateTimeLeft = () => Math.max(targetDate - new Date().getTime(), 0);
  
  const [countDown, setCountDown] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getTimeValues(countDown);
};

const getTimeValues = (countDown: number) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [ensureTwoDigits(days, 2), ensureTwoDigits(hours, 2), ensureTwoDigits(minutes, 2), ensureTwoDigits(seconds, 2)];
};

function ensureTwoDigits(number: number, minLength: number) {
  return number.toString().padStart(minLength, "0");
}
  
  export { useCountdown };