// Text processing utilities - modular and backend-ready

export type CaseType = "uppercase" | "lowercase" | "titlecase" | "sentencecase"

export function convertCase(text: string, caseType: CaseType): string {
  switch (caseType) {
    case "uppercase":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "titlecase":
      return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    case "sentencecase":
      return text
        .toLowerCase()
        .split(". ")
        .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
        .join(". ")
    default:
      return text
  }
}

export function cleanText(text: string, options: { removeSpaces?: boolean; removeLineBreaks?: boolean } = {}): string {
  let cleaned = text

  if (options.removeSpaces) {
    cleaned = cleaned.replace(/\s+/g, " ").trim()
  }

  if (options.removeLineBreaks) {
    cleaned = cleaned.replace(/\n+/g, " ").trim()
  }

  return cleaned
}

export function getTextStatistics(text: string) {
  const characters = text.length
  const charactersNoSpaces = text.replace(/\s/g, "").length
  const words = text.trim() ? text.trim().split(/\s+/).length : 0
  const sentences = text.trim() ? text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length : 0
  const paragraphs = text.trim() ? text.split(/\n\n+/).filter((p) => p.trim().length > 0).length : 0
  const readingTime = Math.ceil(words / 200) // Average reading speed: 200 words/min

  return {
    characters,
    charactersNoSpaces,
    words,
    sentences,
    paragraphs,
    readingTime,
  }
}

export function formatJSON(jsonString: string): { formatted: string; error: string | null } {
  try {
    const parsed = JSON.parse(jsonString)
    return {
      formatted: JSON.stringify(parsed, null, 2),
      error: null,
    }
  } catch (error) {
    return {
      formatted: "",
      error: error instanceof Error ? error.message : "Invalid JSON",
    }
  }
}
