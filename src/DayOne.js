import React from "react";

export default function DayOne(){
    
  function getDayOne(dayOneAn) {
   let now = new Date();
   let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
   
   let dayOneNum = (now.getDay()+2);
   if (dayOneNum > 6) {
    dayOneNum = (now.getDay()+2)-7;
   }
   return dayOneAn;
  }
  return (
      <div>
        dayOneAn
      </div>
  )
}