export function sanitizeText(text) {
  // Remove any HTML tags
  let sanitizedText = text.replace(/<\/?[^>]+(>|$)/g, "");

  // Trim leading and trailing whitespace
  sanitizedText = sanitizedText.replace(/^\s+|\s+$/g, "");

  // Replace special characters or patterns
  const finalText = sanitizedText.replace(/[^\w.?! ]/g, "");

  return finalText;
}
