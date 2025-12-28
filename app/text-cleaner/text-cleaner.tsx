"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { cleanText } from "@/lib/text-utils"

export function TextCleaner() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  const handleClean = (options: { removeSpaces?: boolean; removeLineBreaks?: boolean }) => {
    const cleaned = cleanText(input, options)
    setOutput(cleaned)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Input Text</Label>
            <Textarea
              id="text-input"
              placeholder="Paste your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[200px] resize-y"
            />
          </div>

          <div className="space-y-3">
            <Label>Clean Options</Label>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => handleClean({ removeSpaces: true })} variant="outline" size="sm">
                Remove Extra Spaces
              </Button>
              <Button onClick={() => handleClean({ removeLineBreaks: true })} variant="outline" size="sm">
                Remove Line Breaks
              </Button>
              <Button
                onClick={() => handleClean({ removeSpaces: true, removeLineBreaks: true })}
                variant="outline"
                size="sm"
              >
                Clean All
              </Button>
            </div>
          </div>

          {output && (
            <div className="space-y-2">
              <Label htmlFor="text-output">Cleaned Text</Label>
              <Textarea id="text-output" value={output} readOnly className="min-h-[200px] resize-y bg-muted" />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
