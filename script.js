const docTime = document.querySelector('#time');
const docDate = document.querySelector('#date');

function printTime() {
  const timeObject = new Date();
  const seconds = addLeadingZero(timeObject.getSeconds());
  const minutes = addLeadingZero(timeObject.getMinutes());
  let hours = timeObject.getHours();
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  return (docTime.textContent = `${hours}:${minutes}:${seconds} ${amPm}`);
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function setDay(day) {
  switch (day) {
    case 0:
      displayDay = 'Sunday';
      break;
    case 1:
      displayDay = 'Monday';
      break;
    case 2:
      displayDay = 'Tuesday';
      break;
    case 3:
      displayDay = 'Wednesday';
      break;
    case 4:
      displayDay = 'Thursday';
      break;
    case 5:
      displayDay = 'Friday';
      break;
    case 6:
      displayDay = 'Saturday';
      break;
  }
  return displayDay;
}

function setMonth(month) {
  switch (month) {
    case 0:
      displayMonth = 'January';
      break;
    case 1:
      displayMonth = 'February';
      break;
    case 2:
      displayMonth = 'March';
      break;
    case 3:
      displayMonth = 'April';
      break;
    case 4:
      displayMonth = 'May';
      break;
    case 5:
      displayMonth = 'June';
      break;
    case 6:
      displayMonth = 'July';
      break;
    case 7:
      displayMonth = 'August';
      break;
    case 8:
      displayMonth = 'September';
      break;
    case 9:
      displayMonth = 'October';
      break;
    case 10:
      displayMonth = 'November';
      break;
    case 11:
      displayMonth = 'December';
      break;
  }
  return displayMonth;
}

function setDate(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

function printDate() {
  const dateObject = new Date();
  const day = setDay(dateObject.getDay());
  const month = setMonth(dateObject.getMonth());
  const date = setDate(dateObject.getDate());
  const year = dateObject.getFullYear();
  console.log('day: ', day);
  return (docDate.textContent = `${day}, ${month} ${date} ${year}`);
}

printTime();
printDate();

setInterval(() => {
  printTime();
  printDate();
}, 1000);
