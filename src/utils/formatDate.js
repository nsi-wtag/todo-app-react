export function formatDate(date) {
  const dateFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("de", dateFormatOptions).format(
    date
  );

  return formattedDate;
}
