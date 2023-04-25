import * as data from "./bd.json";

export function getWeekNumber() {
  const today = new Date();
  const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
  const pastDaysOfYear = (today - firstDayOfYear) / 86400000; // 1 day = 86400000 milliseconds
  const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  return weekNumber;
}

export function getWeekDays() {
  const date = new Date();
  const days = [];
  let firstDay;
  let lastDay;

  // Calcula el primer y último día de la semana
  if (date.getDay() == 0) {
    firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() - 7 + 1);
    lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay());
  } else {
    firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
    lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7);
  }

  // Formatea las fechas
  const options = { month: "long", day: "numeric" };
  const firstDayFormatted = firstDay.toLocaleDateString("es-MX", options);
  const lastDayFormatted = lastDay.toLocaleDateString("es-MX", options);

  // Función para formatear la fecha
  function formatDate(dateString) {
    const dateParts = dateString.split(" ");
    return `${dateParts[0]} ${dateParts[2]}`;
  }

  days.push(firstDayFormatted);
  days.push(lastDayFormatted);

  return days;
}

export function getDataWeekNumber() {
  const dayWeek = getWeekNumber();
  const numbersWeek = [];
  const deposito = data[dayWeek].deposito;
  const balance = data[dayWeek].balance;
  const quincena = data[dayWeek].quincena;
  numbersWeek.push(deposito);
  numbersWeek.push(balance);
  //   if (quincena == undefined) {
  //       numbersWeek.push("Esta semana no es quincena")
  //   } else {
  //       numbersWeek.push(quincena)
  //   }
  numbersWeek.push(quincena);
  return numbersWeek;
}
