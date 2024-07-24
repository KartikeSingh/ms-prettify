export interface Options {
  till?: 'year' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
  max?: number;
  expanded?: boolean;
  returnObject?: boolean;
}

export interface Options2 {
  till?: 'year' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond';
  max?: number;
  expanded?: boolean;
  returnObject: true;
}

export interface ReturnObject {
  millisecond?: number;
  second?: number;
  minute?: number;
  hour?: number;
  day?: number;
  week?: number;
  year?: number;
}

export interface indexable {
  [key: string]: any;
}
