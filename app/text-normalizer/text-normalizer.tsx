"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

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
        if (!input.trim()) throw new Error("Please paste some text to repair")
        formData.append("text", input)
      } else {
        if (!file) throw new Error("Please upload an image or PDF")
        formData.append("file", file)
      }

      const res = await fetch(
        "https://des-sunset-creativity-hottest.trycloudflare.com/normalize",
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
    // ensure card itself doesn't impose a smaller max-width
    <Card className="w-full border-slate-200/60 shadow-sm">
      <CardContent className="p-6 md:p-8 space-y-6">
        {/* MODE SWITCH */}
        <div className="flex justify-center gap-2">
          <Button
            variant={mode === "text" ? "default" : "outline"}
            onClick={() => {
              setMode("text")
              setFile(null)
            }}
          >
            Paste OCR Text
          </Button>
          <Button
            variant={mode === "file" ? "default" : "outline"}
            onClick={() => {
              setMode("file")
              setInput("")
            }}
          >
            Upload Image / PDF
          </Button>
        </div>

        {/* EDITOR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_auto_2fr] gap-6 items-start">
          {/* BEFORE */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Messy OCR Text (Before)
            </p>

            {mode === "text" ? (
              <Textarea
                placeholder="Paste your messy OCR text here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[260px] resize-none text-base leading-normal"
              />
            ) : (
              <Input
                type="file"
                accept=".png,.jpg,.jpeg,.pdf"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            )}
          </div>

          {/* ARROW */}
          <div className="hidden md:flex items-center justify-center pt-10">
            <div className="rounded-full border bg-white p-3 text-muted-foreground shadow-sm">
              <ArrowRight size={18} />
            </div>
          </div>

          {/* AFTER */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              Cleaned Document (After)
            </p>
            <Textarea
              placeholder="Cleaned text will appear here..."
              value={output}
              readOnly
              className="min-h-[260px] resize-none bg-muted text-base leading-normal"
            />
          </div>
        </div>

        {/* ERROR */}
        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* ACTION */}
        <div className="flex justify-center pt-2">
          <Button size="lg" onClick={handleNormalize} disabled={loading}>
            {loading ? "Repairing OCR Text…" : "Repair OCR Text"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
