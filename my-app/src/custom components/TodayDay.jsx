import React from 'react'

function TodayDay() {
  let todayDay = new Date().getDate();
  return (
    <div>{todayDay}</div>
  )
}

export default TodayDay;