import { Span } from '../types';

export default class Activity {
  name: string;
  category: string;
  duration: Span;

  hasConflict(otherActivity: Activity): boolean {
    return (
      (otherActivity.duration.start >= this.duration.start &&
        otherActivity.duration.end < this.duration.end) ||
      (otherActivity.duration.start < this.duration.start &&
        otherActivity.duration.end > this.duration.start)
    );
  }
}
