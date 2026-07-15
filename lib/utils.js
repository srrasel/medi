import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function withTrailingSlash(path) {
  if (!path) {
    return "/"
  }

  return path.endsWith("/") ? path : `${path}/`
}
