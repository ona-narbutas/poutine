import Activities from './Activities';
import { WeekdayName } from '../types';

export default class Days {
  name: WeekdayName;
  private activities: Activities[];

  constructor(name: WeekdayName) {
    this.name = name;
    this.activities = [];
  }

  // addActivity(newActivity: Activities): boolean {
  //   for (const act of this.activities) {
  //     if (newActivity.hasConflict(act)) {
  //       return false;
  //     }
  //   }
  //   this.activities.push(newActivity);
  //   return true;
  // }
}
