/**
 * Escape user input before inserting into HTML email bodies.
 */
export function escapeHtml(value) {
  if (value === null || value === undefined) return ""
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

/**
 * Coerce FormData values to a safe trimmed string.
 */
export function safeText(value, maxLength = 2000) {
  const text = escapeHtml(value).trim()
  return text.slice(0, maxLength)
}
