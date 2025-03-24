import React from 'react'
import SingleTask from './SingleTask'
import TodayDay from './TodayDay'
import CurrentMonth from './CurrentMonth'
function TaskList() {
  return (
    <section>
        <TodayDay/>
        <CurrentMonth/>
        <SingleTask/>
    </section>
  )
}

export default TaskList