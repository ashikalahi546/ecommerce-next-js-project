// hooks/useCountdownTimer.js
import { useEffect, useState } from "react";

export const UseCountdownTimer = (initialTime) => {
  // Get time from local storage or use the initial time
  const getTime = () => {
    const savedTime = localStorage.getItem("countdownTime");
    if (savedTime) {
      try {
        const parsedTime = JSON.parse(savedTime);
        return {
          days: parsedTime.days ?? initialTime.days,
          hours: parsedTime.hours ?? initialTime.hours,
          minutes: parsedTime.minutes ?? initialTime.minutes,
          seconds: parsedTime.seconds ?? initialTime.seconds,
        };
      } catch (e) {
        console.error("Error parsing time from localStorage:", e);
        return initialTime;
      }
    } else {
      return initialTime;
    }
  };

  // Save time to local storage
  const saveTime = (time) => {
    localStorage.setItem("countdownTime", JSON.stringify(time));
  };

  // Decrease the time
  const decreaseTime = (time) => {
    if (time.seconds > 0) {
      time.seconds--;
    } else if (time.minutes > 0) {
      time.minutes--;
      time.seconds = 59;
    } else if (time.hours > 0) {
      time.hours--;
      time.minutes = 59;
      time.seconds = 59;
    } else if (time.days > 0) {
      time.days--;
      time.hours = 23;
      time.minutes = 59;
      time.seconds = 59;
    }
    return time;
  };

  // Set the initial state
  const [time, setTime] = useState(() => getTime());

  // Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = decreaseTime({ ...prevTime });
        saveTime(newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return time;  // Returning the current time
};
