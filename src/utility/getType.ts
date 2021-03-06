const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24, week = day * 7, year = day * 365.25;

export default (string: string) => {
    switch (string) {
        case 'years':
        case 'year':
        case 'year(s)':
        case 'yrs':
        case 'yr':
        case 'y':
            return year;
        case 'weeks':
        case 'week':
        case 'week(s)':
        case 'w':
            return week;
        case 'days':
        case 'day(s)':
        case 'day':
        case 'd':
            return day;
        case 'hours':
        case 'hour(s)':
        case 'hour':
        case 'hrs':
        case 'hr':
        case 'h':
            return hour;
        case 'minutes':
        case 'minute(s)':
        case 'minute':
        case 'mins':
        case 'min':
        case 'm':
            return minute;
        case 'seconds':
        case 'second(s)':
        case 'second':
        case 'secs':
        case 'sec':
        case 's':
            return second;
        case 'milliseconds':
        case 'millisecond(s)':
        case 'millisecond':
        case 'msecs':
        case 'msec':
        case 'ms':
            return 1;
        default:
            return undefined;
    }
}