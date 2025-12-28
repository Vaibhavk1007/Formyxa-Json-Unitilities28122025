import type { Metadata } from "next"
import { TextCleaner } from "./text-cleaner"

export const metadata: Metadata = {
  title: "Text Cleaner – Remove Extra Spaces & Line Breaks",
  description: "Clean copied text by removing extra spaces and line breaks instantly. Simple, fast, and browser-based.",
}

export default function TextCleanerPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Text Cleaner</h1>
        <p className="text-pretty text-muted-foreground leading-relaxed">
          Clean copied text instantly by removing extra spaces and line breaks.
        </p>
      </div>
      <TextCleaner />
      <div className="pt-6 border-t text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Related tools:</span>{" "}
        <a href="/text-case-converter" className="hover:text-primary underline-offset-4 hover:underline">
          Text Case Converter
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
          <p className="font-medium text-foreground">What does text cleaning mean?</p>
          <p className="text-muted-foreground">
            Text cleaning removes extra spaces and unnecessary line breaks from copied text.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Will this remove punctuation or words?</p>
          <p className="text-muted-foreground">
            No. Only extra spacing and line breaks are removed. Your text content stays the same.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Is my text stored anywhere?</p>
          <p className="text-muted-foreground">
            No. All text processing happens locally in your browser.
          </p>
        </div>
      </div>

    </div>
  )
}
