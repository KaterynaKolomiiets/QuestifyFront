const dateAdapted = data => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let dayName = days[data.getDay()];
  const hours = data.getHours();
  const minutes = (data.getMinutes() < 10 ? '0' : '') + data.getMinutes();
  const times = `${hours}:${minutes}`;
  const dateNaw = new Date().getDate();
  const day = data.getDate();
  const month = monthNames[data.getMonth()];

  if (
    data.getMonth() === new Date().getMonth() &&
    data.getDate() === new Date().getDate()
  ) {
    dayName = 'Today';
  } else if (
    data.getMonth() + 1 === new Date().getMonth() &&
    new Date().getDate() + 1 === dateNaw
  ) {
    dayName = 'Tomorrow';
  } else if (!Number(data.getDate()) >= Number(dateNaw) + 7) {
    dayName = `${day}.${month}`;
  }

  return { time: times, dayName };
};

export default dateAdapted;
