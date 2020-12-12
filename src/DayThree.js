import React from "react";

export default function DayThree(){
  let now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayThreeNum = (now.getDay()+4);
  function getDayThree(dayThreeAn) {
   if (dayThreeNum > 6) {
    dayThreeNum = (now.getDay()+4)-7;
   }
   return dayThreeAn;
  }
  getDayThree();
  return (
    <div>
      {days[dayThreeNum]}
    </div>
  )
}