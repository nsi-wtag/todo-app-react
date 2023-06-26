export function getDaysToCompleteTask(startDate, endDate) {
  const millisecondsInADay = 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(endDate - startDate);
  const diffInDays = Math.round(diffInMilliseconds / millisecondsInADay) + 1;

  return diffInDays;
}
