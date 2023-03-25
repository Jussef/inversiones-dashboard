export function getWeekNumber() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now - startOfYear;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  const weekNumber = Math.floor(diff / oneWeek);
  return weekNumber;
}

export function getWeekDays() {
  const date = new Date();
  const days = [];

  // Calcula el primer y último día de la semana
  const firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - date.getDay() + 7);

  // Formatea las fechas
  const options = { month: "long", day: "numeric" };
  const firstDayFormatted = firstDay.toLocaleDateString("es-MX", options);
  const lastDayFormatted = lastDay.toLocaleDateString("es-MX", options);

  // Función para formatear la fecha
  function formatDate(dateString) {
    const dateParts = dateString.split(" ");
    return `${dateParts[0]} ${dateParts[2]}`;
  }

  days.push(firstDayFormatted)
  days.push(lastDayFormatted)

  return days;
}
