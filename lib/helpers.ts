/**
 * Extract error message from various error types
 */
export function getErrorMessage(
  error: unknown,
  fallback: string = "An error occurred"
): string {
  if (error instanceof Error) {
    return error.message;
  }
  return fallback;
}

/**
 * Format time in MM:SS format
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
