import type { Metadata } from "next"
import { JSONFormatter } from "./json-formatter"

export const metadata: Metadata = {
  title: "JSON Formatter & Validator – Format JSON Online",
  description: "Format and validate JSON online with clear errors and clean output. Paste JSON and instantly prettify it in your browser.",
}

export default function JSONFormatterPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">JSON Formatter</h1>
        <p className="text-pretty text-muted-foreground leading-relaxed">
          Paste your JSON to format and validate it instantly with clear error messages.
        </p>
      </div>
      <JSONFormatter />
      <div className="pt-6 border-t text-sm text-muted-foreground">
        <span className="font-medium text-foreground">Related tools:</span>{" "}
        <a href="/text-cleaner" className="hover:text-primary underline-offset-4 hover:underline">
          Text Cleaner
        </a>{" "}
        ·{" "}
        <a href="/text-statistics" className="hover:text-primary underline-offset-4 hover:underline">
          Text Statistics
        </a>{" "}
        ·{" "}
        <a href="/text-case-converter" className="hover:text-primary underline-offset-4 hover:underline">
          Text Case Converter
        </a>
      </div>
      <div className="pt-6 space-y-3 text-sm">
        <h2 className="font-medium text-foreground">FAQ</h2>

        <div>
          <p className="font-medium text-foreground">What does a JSON formatter do?</p>
          <p className="text-muted-foreground">
            A JSON formatter converts raw JSON into a readable, properly indented format.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Does this tool validate JSON?</p>
          <p className="text-muted-foreground">
            Yes. Invalid JSON will show clear error messages explaining the issue.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Is my JSON uploaded or stored?</p>
          <p className="text-muted-foreground">
            No. All formatting happens entirely in your browser and nothing is stored.
          </p>
        </div>
      </div>
    </div>
  )
}
