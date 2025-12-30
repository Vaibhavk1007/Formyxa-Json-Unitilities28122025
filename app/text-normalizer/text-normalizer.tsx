"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function TextNormalizer() {
  const [mode, setMode] = useState<"text" | "file">("text")
  const [input, setInput] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [output, setOutput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleNormalize = async () => {
    setLoading(true)
    setError(null)
    setOutput("")

    try {
      const formData = new FormData()

      if (mode === "text") {
        if (!input.trim()) {
          throw new Error("Please paste some text to repair")
        }
        formData.append("text", input)
      } else {
        if (!file) {
          throw new Error("Please upload an image or PDF")
        }
        formData.append("file", file)
      }

      const res = await fetch(
          "https://ecommerce-became-printed-twist.trycloudflare.com/normalize",
          {
            method: "POST",
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_OCR_API_KEY!,
            },
            body: formData,
          }
        )

      if (!res.ok) {
        const err = await res.json().catch(() => null)
        throw new Error(err?.detail || "Server error")
      }

      const data = await res.json()
      setOutput(data.normalized_text)
    } catch (err: any) {
      setError(err.message || "Failed to process document")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent className="pt-6 space-y-4">
        {/* MODE SWITCH */}
        <div className="flex gap-2">
          <Button
            type="button"
            variant={mode === "text" ? "default" : "outline"}
            onClick={() => {
              setMode("text")
              setFile(null)
            }}
          >
            Paste Text
          </Button>
          <Button
            type="button"
            variant={mode === "file" ? "default" : "outline"}
            onClick={() => {
              setMode("file")
              setInput("")
            }}
          >
            Upload Image / PDF
          </Button>
        </div>

        {/* TEXT INPUT */}
        {mode === "text" && (
          <Textarea
            placeholder="Paste messy OCR or copied text here…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[220px]"
          />
        )}

        {/* FILE INPUT */}
        {mode === "file" && (
          <Input
            type="file"
            accept=".png,.jpg,.jpeg,.pdf"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        )}

        {/* ACTION */}
        <Button onClick={handleNormalize} disabled={loading}>
          {loading ? "Repairing document…" : "Repair Document Text"}
        </Button>

        {/* ERROR */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* OUTPUT */}
        {output && (
          <Textarea
            value={output}
            readOnly
            className="min-h-[220px] bg-muted"
          />
        )}
      </CardContent>
    </Card>
  )
}
