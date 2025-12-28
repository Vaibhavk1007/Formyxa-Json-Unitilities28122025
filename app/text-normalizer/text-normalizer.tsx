"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TextNormalizer() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleNormalize = async () => {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("https://text-normalizer-api.onrender.com/normalize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: input }),
      })

      if (!res.ok) throw new Error("Server error")

      const data = await res.json()
      setOutput(data.normalized_text)
    } catch {
      setError("Failed to normalize text. The service may be waking up.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        <Textarea
          placeholder="Paste messy OCR or copied text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-[200px]"
        />

        <Button onClick={handleNormalize} disabled={loading}>
          {loading ? "Normalizing (first run may take ~30s)..." : "Normalize Text"}
        </Button>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {output && (
          <Textarea
            value={output}
            readOnly
            className="min-h-[200px] bg-muted"
          />
        )}
      </CardContent>
    </Card>
  )
}
