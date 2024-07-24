const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24,
  week = day * 7,
  year = day * 365.25;

export default (time: number) => {
  let value: number = 0,
    string: string,
    type: string;

  if (time > year) {
    value = Math.floor(time / year);
    time -= year * value;
    type = 'year';
  } else if (time > week) {
    value = Math.floor(time / week);
    time -= week * value;
    type = 'week';
  } else if (time > day) {
    value = Math.floor(time / day);
    time -= day * value;
    type = 'day';
  } else if (time > hour) {
    value = Math.floor(time / hour);
    time -= hour * value;
    type = 'hour';
  } else if (time > minute) {
    value = Math.floor(time / minute);
    time -= minute * value;
    type = 'minute';
  } else if (time > second) {
    value = Math.floor(time / second);
    time -= second * value;
    type = 'second';
  } else {
    value = time;
    time = 0;
    type = 'millisecond';
  }

  string = `${value} ${type}${value !== 1 ? 's' : ''} `;
  return { time, value, string, type };
};
