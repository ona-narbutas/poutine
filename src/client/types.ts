export type WeekdayName =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type Span = {
  day: WeekdayName;
  start: number;
  end: number;
};

export type Activity = {
  name: string;
  category: string;
  duration: Span;
};

export type Weekday = {
  name: WeekdayName;
  activities: Activity[];
};

export type NewAcvtivityPayload = {
  day: Weekday;
  newActivity: Activity;
};
