import React from "react";

export default function DayFour(){
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
  let dayFourNum = (now.getDay()+5);
  function getDayFour(dayFourAn) {
   if (dayFourNum > 6) {
    dayFourNum = (now.getDay()+5)-7;
   }
   return dayFourAn;
  }
  getDayFour();
  return (
    <div>
      {days[dayFourNum]}
    </div>
  )
}