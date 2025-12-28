import type { Metadata } from "next"
import { TextCaseConverter } from "./text-case-converter"

export const metadata: Metadata = {
  title: "Text Case Converter – Uppercase, Lowercase, Title Case Online",
  description: "Convert text to uppercase, lowercase, title case, or sentence case and preview fonts. Free, fast, and runs entirely in your browser.",
}

export default function TextCaseConverterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Text Case Converter</h1>
        <p className="text-pretty text-muted-foreground leading-relaxed">
          Convert your text to different cases and preview with various fonts.
        </p>
      </div>
      <TextCaseConverter />
      <div className="pt-6 border-t text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Related tools:</span>{" "}
        <a href="/text-cleaner" className="hover:text-primary underline-offset-4 hover:underline">
          Text Cleaner
        </a>{" "}
        ·{" "}
        <a href="/online-notepad" className="hover:text-primary underline-offset-4 hover:underline">
          Online Notepad
        </a>{" "}
        ·{" "}
        <a href="/text-statistics" className="hover:text-primary underline-offset-4 hover:underline">
          Text Statistics
        </a>
      </div>

      <div className="pt-6 space-y-3 text-sm">
        <h2 className="font-medium text-foreground">FAQ</h2>

        <div>
          <p className="font-medium text-foreground">What is title case?</p>
          <p className="text-muted-foreground">
            Title case capitalizes the first letter of each major word in a sentence.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Does this tool change formatting?</p>
          <p className="text-muted-foreground">
            No. It only changes text casing. Font selection is preview-only.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Is my text saved or uploaded?</p>
          <p className="text-muted-foreground">
            No. All text processing happens entirely in your browser.
          </p>
        </div>
      </div>

    </div>
  )
}
