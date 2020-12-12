import React from "react"

export default function FormattedDate(props) {
    function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
    let days = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
];
    let day = days[props.date.getDay()];
    let hours = addZero(props.date.getHours());
    let minutes = addZero(props.date.getMinutes())0gggg                                                                                                                                                                                                                                                                                                                                                                                                                             ;
    return (
    <span>{day} {hours}:{minutes}</span>
    )

}