export function formatDate(date) {
  const format = "2-digit";

  const dateFormatOptions = {
    year: format,
    month: format,
    day: format,
  };

  const formattedDate = new Intl.DateTimeFormat("de", dateFormatOptions).format(
    date
  );

  return formattedDate;
}
