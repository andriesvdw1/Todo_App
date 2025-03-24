import React from 'react'

function CurrentMonth() {
    let currMonth = new Date().getMonth();
    let monthNames = ["January", "February", "March","April","May","June","July","August","September","October","November","December"]
  return (
    <div>{monthNames[currMonth]}</div>
  )
}

export default CurrentMonth