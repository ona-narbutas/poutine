import Days from './Days';

export default class Week {
  mon: Days;
  tue: Days;
  wed: Days;
  thu: Days;
  fri: Days;
  sat: Days;
  sun: Days;

  constructor() {
    this.mon = new Days('Monday');
    this.tue = new Days('Tuesday');
    this.wed = new Days('Wednesday');
    this.thu = new Days('Thursday');
    this.fri = new Days('Friday');
    this.sat = new Days('Saturday');
    this.sun = new Days('Sunday');
  }

  static newWeek(): Days[] {
    return Object.values(new Week());
  }
}
