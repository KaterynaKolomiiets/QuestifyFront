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
  const minutes = data.getMinutes();
  const times = `${hours}:${minutes}`;
  const dateNaw = new Date().getDate();
  if (data.getDate() === new Date().getDate()) {
    dayName = 'Today';
  } else if (Number(data.getDate()) === Number(dateNaw) + 1) {
    dayName = 'Tomorrow';
  } else if (Number(data.getDate()) >= Number(dateNaw) + 7) {
    const day = data.getDate();
    const month = monthNames[data.getMonth() + 1];
    dayName = `${day}/${month}`;
  }

  return { time: times, dayName };
};

export default dateAdapted;
