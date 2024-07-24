import getMS from './getMS';
import { ReturnObject, indexable } from '../interfaces';

export default function (
  number: number,
  max: number,
  expanded: boolean,
  obj: boolean,
  till: 'year' | 'week' | 'day' | 'hour' | 'minute' | 'second' | 'millisecond'
): string | ReturnObject {
  let time = '',
    data: indexable = {},
    negative = number < 0;

  if (negative) time = '-';
  number = Math.abs(number);

  while (number > 0 && max > 0) {
    let ms = getMS(number);

    data[ms.type] = ms.value * (negative ? -1 : 1);

    number = ms.time;
    time += ms.string;

    max--;

    if (till === ms.type) number = 0;
  }

  if (!expanded)
    time = time
      .replace(/(year|day|hour|minute|second|week)s?/g, (x) => x[0])
      ?.replace(/millisecond+s?/, 'ms');

  return obj ? data : time;
}
