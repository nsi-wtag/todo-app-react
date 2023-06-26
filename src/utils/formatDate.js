export function formatDate(date) {
  const dateFormatOptions = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
  };

  const formattedDate = new Intl.DateTimeFormat("en-GB", dateFormatOptions)
    .format(date) // this returns the date in: dd/mm/yy format
    .replace(/\//g, "."); // this will replace the "/" with ".", so date will be in dd.mm.yy format

  return formattedDate;
}
