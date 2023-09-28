import { Span, Activity } from '../types';

export default class Activities {
  name: string;
  category: string;
  duration: Span;

  static hasConflict(
    newActivity: Activity,
    existingActivity: Activity
  ): boolean {
    return (
      (newActivity.duration.start >= existingActivity.duration.start &&
        newActivity.duration.end < existingActivity.duration.end) ||
      (newActivity.duration.start < existingActivity.duration.start &&
        newActivity.duration.end > existingActivity.duration.start)
    );
  }

  static getReadableStartAndEndTimes(activity: Activity) {
    const startInt: number = activity.duration.start;
    const endInt: number = activity.duration.end;
    let startsPM: boolean = false;
    let endsPM: boolean = false;

    let startHH = Math.floor(startInt / 60);
    if (startHH > 12) {
      startHH -= 12;
      startsPM = true;
    } else if (startHH === 0) {
      startHH = 12;
    }
    const startMM = startInt % 60;

    let endHH = Math.floor(endInt / 60);
    if (endHH > 12) {
      endHH -= 12;
      endsPM = true;
    } else if (startHH === 0) {
      endHH = 12;
    }
    const endMM = endInt % 60;

    const startString = `${startHH === 0 ? '00' : startHH}:${startMM} ${
      startsPM ? 'PM' : 'AM'
    }`;
    const endString = `${endHH === 0 ? '00' : endHH}:${endMM} ${
      endsPM ? 'PM' : 'AM'
    }`;

    return {
      start: startString,
      end: endString,
    };
  }
}
