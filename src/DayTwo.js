import React from "react";

export default function DayTwo(){
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
  let dayTwoNum = (now.getDay()+3);
  function getDayTwo(dayTwoAn) {
   if (dayTwoNum > 6) {
    dayTwoNum = (now.getDay()+3)-7;
   }
   return dayTwoAn;
  }
  getDayTwo();
  return (
    <div>
      {days[dayTwoNum]}
    </div>
  )
}