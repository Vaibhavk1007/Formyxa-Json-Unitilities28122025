import type { Metadata } from "next"
import { TextNormalizer } from "./text-normalizer"

export const metadata: Metadata = {
  title: "Text Normalizer – Fix OCR & Formatting Issues Online",
  description:
    "Normalize OCR and copied text by fixing hyphenation, spacing, punctuation, and Unicode issues. Free browser-based text normalizer by Formyxa.",
}

export default function TextNormalizerPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Text Normalizer</h1>
        <p className="text-muted-foreground">
          Fix OCR errors, broken words, spacing, punctuation, and formatting issues instantly.
        </p>
      </div>

      <TextNormalizer />

      {/* Related tools */}
      <div className="pt-6 border-t text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Related tools:</span>{" "}
        <a href="/text-cleaner">Text Cleaner</a> ·{" "}
        <a href="/text-case-converter">Text Case Converter</a> ·{" "}
        <a href="/text-statistics">Text Statistics</a>
      </div>
    </div>
  )
}
