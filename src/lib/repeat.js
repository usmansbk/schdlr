import moment from 'moment';

function momentUnit(unit) {
	switch(unit) {
		case "DAILY": return "day";
		case "WEEKLY": return "week";
		case "WEEKDAYS": return "weekday";
		case "MONTHLY": return "month";
		case "YEARLY": return "year";
		default: return "exact";
	}
}

function nextWeek(date, from, isPrevious) {
  let nextDate;
  const day = moment(from).isoWeekday(); // from date
  const weekday = moment(date).isoWeekday();
  if (weekday < day) { // day passed
    const nextDay = isPrevious ? 7 - weekday : 7 + weekday;
    nextDate = moment(from).isoWeekday(nextDay); // set to upcoming week
  } else {
    nextDate = moment(from).isoWeekday(weekday)
  }
  return nextDate;
}

function nextWeekday(from, isPrevious) {
  let nextDate;
  const day = moment(from).isoWeekday();
  if (day >= 6) { // weekends
    const nextDay = isPrevious ? 5 : 8;
    nextDate = moment(from).isoWeekday(nextDay); // set to upcoming monday
  } else {
    nextDate = moment(from);
  }
  return nextDate;
}

function nextMonth(date, from, isPrevious) {
  let nextDate;
  const month = moment(from).month();
  const dayOfMonth = moment(date).date();
  const currentDate = moment(from).date();
  if (currentDate > dayOfMonth) { // date passed
    const direction = isPrevious ? 0 : 1;
    nextDate = moment(from).month(month + direction).date(dayOfMonth); // set to upcoming month
  } else {
    nextDate = moment(from).date(dayOfMonth);
  }
  return nextDate;
}

function nextYear(date, from, isPrevious) {
  let nextDate;
  const year = moment(date).year();
  const month = moment(date).month();
  const dayOfMonth = moment(date).date();
  const currentMonth = moment(from).month();

  if (currentMonth > month) { // month passed
    const direction = isPrevious ? 0 : 1;
    nextDate = moment(from).year(year + direction).month(month).date(dayOfMonth); // set to upcoming year
  } else {
    nextDate = moment(from).month(month).date(dayOfMonth);
  }
  return nextDate;
}

function nextDay(from, date) {
  if (moment(from).isBefore(moment(date))) {
    return moment(date);
  }
  return moment(from);
}

function datesFrom({
  numberOfDates, _date, _from,
  _every, _until, previous, _span
}) {
  const dates = [];
  let nextDate;

  if (_span) {
    const inRange = moment(_from).isBetween(_date, _span, null, "[]");
    if (inRange) {
      const length = Math.round(moment(_span).diff(_date, "days", true));
      const count = Math.round(moment(_from).diff(_date, "days", true));
      for (let i = count, j = 0; i <= length && j < numberOfDates; j++, i++) {
        nextDate = moment(_date).add(i, 'days');
        dates.push(nextDate);
      }
    };
  }
  
  switch(_every) {
    case "day":
      nextDate = nextDay(_from, _date);
      break;
    case "week": {
      nextDate = nextWeek(_date, _from, previous);
      break;
    };
    case "weekday": {
      nextDate = nextWeekday(_from, previous);
      break;
    };
    case "month": {
      nextDate = nextMonth(_date, _from, previous);
      break;
    }
    case "year": {
      nextDate = nextYear(_date, _from, previous);
      break;
    };
    default: {
      nextDate = moment(_date);
      break;
    }
  }

  const amount = previous ? -1 : 1;
  for (let i = 0; i <= numberOfDates; i++) {
    if (previous) {
      if (nextDate.isAfter(_from, 'day')) break;
    } else {
      if (nextDate.isBefore(_from, 'day')) break;
    }
    if (_until) {
      if (nextDate.isAfter(_until, 'day')) break; 
    }
    dates.push(nextDate);
    nextDate = moment(nextDate).add(amount, _every);
  }
  return dates;
}

export default function repeat(date) {
  let _date = moment(date).startOf('day');
  let _every = null;
  let _until = null;
  let _span = null;
  let _from = moment(date).startOf('day');

  const rule = {
    every(recurrence) {
      _every = momentUnit(recurrence);
      return this;
    },
    from(date) {
      if (date) {
        _from = moment(date).startOf('day');
      }
      return this;
    },
    until(date) {
      if (date) {
        _until = moment(date);
      }
      return this;
    },
    next(numberOfDates) {
      return datesFrom({
        numberOfDates,
        _date,
        _every,
        _from,
        _until,
        _span,
      });
    },
    previous(numberOfDates) {
      return datesFrom({
        numberOfDates,
        _date,
        _every,
        _from,
        _until,
        previous: true
      });
    },
    nextDate() {
      return this.next(1)[0];
    },
    previousDate() {
      return this.previous(1)[0];
    },
    matches(date) {
      // edge cases
      if (_from && moment(date).isBefore(_from, 'day')) return false;
      if (moment(date).isBefore(_date, 'day')) return false;
      if (_until) {
        if (moment(date).isAfter(_until, 'day')) return false;
      }
      return match(_date, _every, date, _span);
    },
    span(date) {
      if (date) {
        _span = moment(date);
      }
      return this;
    },
    moment() {
      return moment(_date);
    }
  };

  return rule;
}

function match(_date, _every, date, _span) {
  if (_span) {
    const inRange = moment(date).isBetween(_date, _span, null, "[]");
    if (inRange) return true;
  }
  switch(_every) {
    case "day": return true;
    case "weekday": return moment(date).isoWeekday() < 6;
    case "week": return moment(date).isoWeekday() === _date.isoWeekday();
    case "month": return moment(date).date() === _date.date();
    case "year": return ((moment(date).date() === _date.date()) &&
      (moment(date).month() === _date.month()));
    default: return moment(date).isSame(_date, "day");
  }
}

repeat.DAY = 'day';
repeat.WEEK = 'week';
repeat.WEEKDAY = 'week';
repeat.MONTH = 'month';
repeat.YEAR = 'year';