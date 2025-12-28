"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { convertCase, type CaseType } from "@/lib/text-utils"

type FontFamily =
  | "Times New Roman"
  | "Arial"
  | "Georgia"
  | "Courier New"
  | "Verdana"

const FONTS: FontFamily[] = [
  "Times New Roman",
  "Arial",
  "Georgia",
  "Courier New",
  "Verdana",
]

export function TextCaseConverter() {
  const [text, setText] = useState("")
  const [font, setFont] = useState<FontFamily>("Arial")

  const handleConvert = (caseType: CaseType) => {
    setText(convertCase(text, caseType))
  }

  // Auto-grow textarea for natural writing feel
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target
    el.style.height = "auto"
    el.style.height = el.scrollHeight + "px"
    setText(el.value)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Enter your text</Label>
            <Textarea
              id="text-input"
              placeholder="Type or paste your text here..."
              value={text}
              onChange={handleChange}
              style={{ fontFamily: font }}
              className="
                min-h-[200px]
                resize-none
                text-[16px]
                leading-[1.6]
                tracking-[0.01em]
                bg-[#fcfcfd]
                focus-visible:ring-2
                focus-visible:ring-blue-500/40
                transition-shadow
              "
            />
          </div>

          <div className="space-y-3">
            <Label>Case Conversion</Label>
            <div className="flex flex-wrap gap-2">
              <Button onClick={() => handleConvert("uppercase")} variant="outline" size="sm">
                UPPERCASE
              </Button>
              <Button onClick={() => handleConvert("lowercase")} variant="outline" size="sm">
                lowercase
              </Button>
              <Button onClick={() => handleConvert("titlecase")} variant="outline" size="sm">
                Title Case
              </Button>
              <Button onClick={() => handleConvert("sentencecase")} variant="outline" size="sm">
                Sentence case
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="font-select">Font Preview</Label>
            <Select value={font} onValueChange={(value) => setFont(value as FontFamily)}>
              <SelectTrigger id="font-select" className="w-full sm:w-[250px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {FONTS.map((f) => (
                  <SelectItem key={f} value={f}>
                    {f}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <p className="text-xs text-muted-foreground">
              Font styling is preview-only. Final font depends on where you paste the text.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
