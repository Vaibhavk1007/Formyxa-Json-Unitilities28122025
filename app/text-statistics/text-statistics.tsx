"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { getTextStatistics } from "@/lib/text-utils"

export function TextStatistics() {
  const [text, setText] = useState("")
  const stats = getTextStatistics(text)

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text-input">Enter your text</Label>
            <Textarea
              id="text-input"
              placeholder="Type or paste your text here to see statistics..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] resize-y"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Characters</p>
              <p className="text-3xl font-bold">{stats.characters.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Characters (no spaces)</p>
              <p className="text-3xl font-bold">{stats.charactersNoSpaces.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Words</p>
              <p className="text-3xl font-bold">{stats.words.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Sentences</p>
              <p className="text-3xl font-bold">{stats.sentences.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Paragraphs</p>
              <p className="text-3xl font-bold">{stats.paragraphs.toLocaleString()}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">Reading Time</p>
              <p className="text-3xl font-bold">{stats.readingTime} min</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
