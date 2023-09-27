import Activity from './Activity';
import { Weekday } from '../types';

export default class Day {
  name: Weekday;
  private activities: Activity[];

  constructor(name: Weekday) {
    this.name = name;
    this.activities = [];
  }

  addActivity(newActivity: Activity): boolean {
    for (const act of this.activities) {
      if (newActivity.hasConflict(act)) {
        return false;
      }
    }
    this.activities.push(newActivity);
    return true;
  }
}
