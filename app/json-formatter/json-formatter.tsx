"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { formatJSON } from "@/lib/text-utils"

export function JSONFormatter() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [error, setError] = useState<string | null>(null)

  const handleFormat = () => {
    const result = formatJSON(input)
    setOutput(result.formatted)
    setError(result.error)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="json-input">Input JSON</Label>
            <Textarea
              id="json-input"
              placeholder='{"name":"John","age":30}'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[200px] resize-y font-mono text-sm"
            />
          </div>

          <Button onClick={handleFormat} className="w-full sm:w-auto">
            Format JSON
          </Button>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {output && !error && (
            <div className="space-y-2">
              <Label htmlFor="json-output">Formatted JSON</Label>
              <Textarea
                id="json-output"
                value={output}
                readOnly
                className="min-h-[200px] resize-y font-mono text-sm bg-muted"
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
