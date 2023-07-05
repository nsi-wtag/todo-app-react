import { MILLI_SECONDS_IN_A_DAY } from "src/common/constants";

export function getDaysToCompleteTask(startDate, endDate) {
  const millisecondsInADay = MILLI_SECONDS_IN_A_DAY;
  const diffInMilliseconds = endDate - startDate;
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsInADay) + 1;

  return diffInDays;
}
