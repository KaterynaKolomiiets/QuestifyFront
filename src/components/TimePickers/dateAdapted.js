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
  let dayName = days[data.getDay()];
  const hours = data.getHours();
  const minutes = data.getMinutes();
  const times = `${hours}:${minutes}`;
  const dateNaw = new Date().getDate();
  if (data.getDate() === new Date().getDate()) {
    dayName = 'Today';
  } else if (Number(data.getDate()) === Number(dateNaw) + 1) {
    dayName = 'Tomorrow';
  }

  return { time: times, dayName };
};

export default dateAdapted;
