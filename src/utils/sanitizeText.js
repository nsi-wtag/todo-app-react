export function sanitizeText(text) {
  // Remove any HTML tags
  let sanitizedText = text.replace(/<\/?[^>]+(>|$)/g, "");

  // Trim leading and trailing whitespace
  sanitizedText = sanitizedText.trim();

  // Replace special characters or patterns
  const finalText = sanitizedText.replace(/[^\w.?! ]/g, "");

  return finalText;
}
