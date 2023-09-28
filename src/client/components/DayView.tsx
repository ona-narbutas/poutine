import React from 'react';

import Activities from '../classes/Activities';
import { Weekday } from '../types';

type DayViewProps = {
  day: Weekday;
  isFocused: boolean; // represents whether currently viewing just that day (if true) or entire week (if false)
};

const DayView = (props: DayViewProps) => {
  const todaysActivities = [];
  for (const activity of props.day.activities) {
    const { start, end } = Activities.getReadableStartAndEndTimes(activity);

    todaysActivities.push(
      <div>
        <b>{activity.name}</b> <em>{activity.category}</em>
        <br />
        from {start} to {end}
      </div>
    );
  }

  return (
    <>
      <h2>{props.day.name}</h2>
      <div className="activitiesContainer">{todaysActivities}</div>
    </>
  );
};

export default DayView;
