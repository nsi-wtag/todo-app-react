import { MILLI_SECONDS_IN_A_DAY } from "src/common/constants";

export function getDaysToCompleteTask(startDate, endDate) {
  const millisecondsInADay = MILLI_SECONDS_IN_A_DAY;
  const diffInMilliseconds = Math.abs(endDate - startDate);
  const diffInDays = Math.round(diffInMilliseconds / millisecondsInADay) + 1;

  return diffInDays;
}
