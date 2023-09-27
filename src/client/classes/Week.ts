import Day from './Day';

export class Week {
  mon: Day;
  tue: Day;
  wed: Day;
  thu: Day;
  fri: Day;
  sat: Day;
  sun: Day;

  constructor() {
    this.mon = new Day('Monday');
    this.tue = new Day('Tuesday');
    this.wed = new Day('Wednesday');
    this.thu = new Day('Thursday');
    this.fri = new Day('Friday');
    this.sat = new Day('Saturday');
    this.sun = new Day('Sunday');
  }
}
