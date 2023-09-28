import React from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { addNewActivity } from '../reducers/scheduleSlice';

import DayView from './DayView';

const Calendar = () => {
  const myWeek = useAppSelector((state) => state.schedule.week);
  const dispatch = useAppDispatch();

  const days: JSX.Element[] = [];
  for (const day of myWeek) {
    days.push(<DayView day={day} isFocused={false} key={day.name} />);
  }

  return (
    <>
      <h1>My week:</h1>
      {days}
    </>
  );
};

export default Calendar;
