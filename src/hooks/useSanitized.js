export function useSanitized() {
  const sanitizeText = (text) => {
    return text
      .replace(/<\/?[^>]+(>|$)/g, "") // Remove any HTML tags
      .replace(/[^\w.?! ]/g, "") // Replace special characters or patterns
      .trim(); // Trim leading and trailing whitespace
  };

  return { sanitizeText };
}
