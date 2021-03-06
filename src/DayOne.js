import React from "react";

export default function DayOne(){
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
  let dayOneNum = (now.getDay()+2);
  function getDayOne(dayOneAn) {
   if (dayOneNum > 6) {
    dayOneNum = (now.getDay()+2)-7;
   }
   return dayOneAn;
  }
  getDayOne();
  return (
    <div>
      {days[dayOneNum]}
    </div>
  )
}