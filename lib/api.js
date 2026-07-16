const DEFAULT_API_BASE = "https://api.pmchl.com"
const DEFAULT_TIMEOUT_MS = 12000

/**
 * Fetch from the hospital API with a timeout so the UI never hangs forever.
 */
export async function apiFetch(path, options = {}) {
  const {
    timeout = DEFAULT_TIMEOUT_MS,
    baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || DEFAULT_API_BASE,
    ...fetchOptions
  } = options

  const url = path.startsWith("http") ? path : `${baseUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })
    return response
  } catch (error) {
    if (error?.name === "AbortError") {
      throw new Error("Request timed out. Please try again.")
    }
    throw error
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Parse JSON list payloads that may be a bare array or wrapped object.
 */
export async function apiJsonList(path, options = {}) {
  const response = await apiFetch(path, options)
  if (!response.ok) {
    throw new Error(`Failed to load data (${response.status})`)
  }
  const data = await response.json()
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.data)) return data.data
  if (Array.isArray(data?.value)) return data.value
  return []
}
