"use client";

import { UseCountdownTimer } from "@/hook/UseCountdownTimer";

const CountdownTimer = () => {
  const initialTime = {
    days: 3,
    hours: 24,
    minutes: 0,
    seconds: 0,
  };
  const time = UseCountdownTimer(initialTime);
  return (
    <div>
      <div className="flex items-center gap-x-[38px] text-xs font-medium leading-[18px]">
        <p>Days </p>
        <p>Hours </p>
        <p>Minutes </p>
        <p>Seconds </p>
      </div>

      <div className="flex items-center gap-x-[15px] text-[32px] font-bold leading-[30px] mt-1">
      
        <p>0{time.days} </p> <span className="text-[#E07575]">:</span>
        <p>{time.hours} </p> <span className="text-[#E07575]">:</span>
        <p>{time.minutes} </p> <span className="text-[#E07575]">:</span>
        <p>{time.seconds} </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
