"use client"

import { useState, useEffect } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const STORAGE_KEY = "online-notepad-content"

export function OnlineNotepad() {
  const [text, setText] = useState("")
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  // Load saved text on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved !== null) {
      setText(saved)
    }
  }, [])

  // Auto-save on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, text)
    setLastSaved(new Date())
  }, [text])

  // Auto-grow textarea for natural writing feel
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target
    el.style.height = "auto"
    el.style.height = el.scrollHeight + "px"
    setText(el.value)
  }

  const clearNotepad = () => {
    localStorage.removeItem(STORAGE_KEY)
    setText("")
    setLastSaved(null)
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="pt-6 space-y-3">
          <Textarea
            placeholder="Start typing your notes..."
            value={text}
            onChange={handleChange}
            className="
              min-h-[400px]
              resize-none
              text-[16px]
              leading-[1.7]
              tracking-[0.01em]
              font-serif
              bg-[#fcfcfd]
              focus-visible:ring-2
              focus-visible:ring-blue-500/40
              transition-shadow
            "
          />

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={clearNotepad}
            >
              Clear Notepad
            </Button>

            {lastSaved && (
              <span className="text-xs text-muted-foreground">
                Saved at {lastSaved.toLocaleTimeString()}
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
