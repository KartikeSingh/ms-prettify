import converter from './converter';

export default function timer(
  time: number | string,
  callback: Function,
  ...args: any[]
) {
  const waitFor = typeof time === 'number' ? time : converter(time);
  if (!waitFor) throw new Error('Invalid time was provided in the timer!');

  return new Promise((resolve) =>
    setTimeout(() => {
      if (typeof callback === 'function') callback(...args);

      resolve();
    }, waitFor)
  );
}
