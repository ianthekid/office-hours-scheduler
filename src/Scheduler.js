import React, { useState } from 'react';
import 'resize-observer-polyfill/dist/ResizeObserver.global';
import { TimeGridScheduler, classes } from '@remotelock/react-week-scheduler';
import '@remotelock/react-week-scheduler/index.css';
import './scheduler.css';

const testData = [
  ['2020-12-07 08:00', '2020-12-07 12:30'],
  ['2020-12-08 09:00', '2020-12-08 14:30'],
  ['2020-12-09 10:00', '2020-12-09 14:30'],
  ['2020-12-10 08:30', '2020-12-10 10:00'],
  ['2020-12-11 12:30', '2020-12-11 13:30'],
];

const defaultSchedule = testData.map(range =>
  range.map(dateString => new Date(dateString)),
);

function Scheduler() {
  const [schedule, setSchedule] = useState(defaultSchedule);

  const handleSlots = () => {
    console.log(schedule)
  }

  return (
    <>
      <button onClick={handleSlots} style={{margin:"0 0 20px 0"}}>
        Console Log Schedule
      </button>
      <TimeGridScheduler
        classes={classes}
        style={{width: "100%", height: "100%"}}
        originDate={new Date("2020-12-07")}
        defaultHours={[8, 15]}
        schedule={schedule}
        onChange={setSchedule}
        visualGridVerticalPrecision={30}
        verticalPrecision={30}
        cellClickPrecision={60}
      />
    </>
  )
}

export default Scheduler
