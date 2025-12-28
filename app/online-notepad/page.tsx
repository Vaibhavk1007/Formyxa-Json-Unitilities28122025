import type { Metadata } from "next"
import { OnlineNotepad } from "./online-notepad"

export const metadata: Metadata = {
  title: "Online Notepad – Simple Auto-Save Notes in Browser",
  description: "A simple online notepad with auto-save. Notes are stored locally in your browser—no login, no tracking.",
}

export default function OnlineNotepadPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-balance text-3xl font-bold tracking-tight">Online Notepad</h1>
        <p className="text-pretty text-muted-foreground leading-relaxed">
          A simple online notepad with auto-save. Your notes are saved locally in your browser only.
        </p>
      </div>
      <OnlineNotepad />
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
        <a href="/text-statistics" className="hover:text-primary underline-offset-4 hover:underline">
          Text Statistics
        </a>
      </div>

      <div className="pt-6 space-y-3 text-sm">
        <h2 className="font-medium text-foreground">FAQ</h2>

        <div>
          <p className="font-medium text-foreground">Where are my notes saved?</p>
          <p className="text-muted-foreground">
            Notes are saved locally in your browser using local storage.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Can others see my notes?</p>
          <p className="text-muted-foreground">
            No. Your notes stay on your device and are not shared or uploaded.
          </p>
        </div>

        <div>
          <p className="font-medium text-foreground">Will my notes sync across devices?</p>
          <p className="text-muted-foreground">
            No. Notes are browser-specific and do not sync between devices.
          </p>
        </div>
      </div>
    </div>
  )
}
