import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Weekday, Activity, NewAcvtivityPayload } from '../types';
import Activities from '../classes/Activities';

export interface ScheduleState {
  week: Weekday[];
}

const initialState: ScheduleState = {
  week: [
    { name: 'Monday', activities: [] },
    { name: 'Tuesday', activities: [] },
    { name: 'Wednesday', activities: [] },
    { name: 'Thursday', activities: [] },
    { name: 'Friday', activities: [] },
    { name: 'Saturday', activities: [] },
    { name: 'Sunday', activities: [] },
  ],
};

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addNewActivity: (state, action: PayloadAction<NewAcvtivityPayload>) => {
      // Determine which day to add activity to
      let weekdayIndex: number;
      switch (action.payload.day.name) {
        case 'Monday':
          weekdayIndex = 0;
          break;
        case 'Tuesday':
          weekdayIndex = 1;
          break;
        case 'Wednesday':
          weekdayIndex = 2;
          break;
        case 'Thursday':
          weekdayIndex = 3;
          break;
        case 'Friday':
          weekdayIndex = 4;
          break;
        case 'Saturday':
          weekdayIndex = 5;
          break;
        case 'Sunday':
          weekdayIndex = 6;
          break;
        default:
          weekdayIndex = -1;
      }

      // Check for existing conflicts with existing activities
      for (const activity of state.week[weekdayIndex].activities) {
        if (Activities.hasConflict(action.payload.newActivity, activity)) {
          console.log('Could not add new activity: conflict found');
          return;
        }
      }

      // Add new activity to specified day's activities
      state.week[weekdayIndex].activities.push(action.payload.newActivity);
    },
  },
});

export const { addNewActivity } = scheduleSlice.actions;

export default scheduleSlice.reducer;
