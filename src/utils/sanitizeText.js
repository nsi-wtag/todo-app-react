export function sanitizeText(text) {
  return text
    .replace(/<\/?[^>]+(>|$)/g, "") // Remove any HTML tags
    .replace(/[^\w.?! ]/g, "") // Replace special characters or patterns
    .replace(/\s+/g, " ") // Replace consecutive spaces with a single space
    .trim(); // Trim leading and trailing whitespace
}
