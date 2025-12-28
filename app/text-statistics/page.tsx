import type { Metadata } from "next"
import { TextStatistics } from "./text-statistics"

export const metadata: Metadata = {
  title: "Text Statistics – Characters, Sentences & Reading Time",
  description: "Analyze text instantly with character count, sentence count, paragraph count, and reading time. Fast and browser-based.",
}

export default function TextStatisticsPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Text Statistics</h1>
        <p className="text-pretty text-muted-foreground leading-relaxed">
          Analyze your text instantly with character count, sentence count, paragraph count, and reading time.
        </p>
      </div>
      <TextStatistics />
      <div className="pt-6 border-t text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Related tools:</span>{" "}
        <a href="/text-case-converter" className="hover:text-primary underline-offset-4 hover:underline">
          Text Case Converter
        </a>{" "}
        ·{" "}
        <a href="/text-cleaner" className="hover:text-primary underline-offset-4 hover:underline">
          Text Cleaner
        </a>{" "}
        ·{" "}
        <a href="/online-notepad" className="hover:text-primary underline-offset-4 hover:underline">
          Online Notepad
        </a>
      </div>
      <div className="pt-6 space-y-3 text-sm">
        <h2 className="font-medium text-foreground">FAQ</h2>

        <div>
          <p className="font-medium text-foreground">What statistics does this tool show?</p>
          <p className="text-muted-foreground">
            It shows character count, sentence count, paragraph count, and estimated reading time.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">How is reading time calculated?</p>
          <p className="text-muted-foreground">
            Reading time is estimated using an average reading speed.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Is my text stored or saved?</p>
          <p className="text-muted-foreground">
            No. All text analysis happens entirely in your browser.
          </p>
        </div>
      </div>

    </div>
  )
}
