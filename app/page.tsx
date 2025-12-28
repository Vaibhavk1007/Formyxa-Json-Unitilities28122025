import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Text & JSON Utilities – Free Online Tools | UtilityTools",
  description:
    "Fast, privacy-friendly text and JSON tools. Convert text case, format JSON, clean text, take notes, and analyze text—no ads, no tracking.",
}

const tools = [
  {
    name: "Text Case Converter",
    description: "Convert text between uppercase, lowercase, title case, and sentence case with font preview.",
    href: "/text-case-converter",
    icon: "Aa",
  },
  {
    name: "JSON Formatter",
    description: "Format and validate JSON with clear error messages and clean output display.",
    href: "/json-formatter",
    icon: "{}",
  },
  {
    name: "Text Cleaner",
    description: "Remove extra spaces, line breaks, and clean up copied text instantly.",
    href: "/text-cleaner",
    icon: "✓",
  },
  {
    name: "Online Notepad",
    description: "Simple notepad with auto-save. Your notes are stored locally in your browser.",
    href: "/online-notepad",
    icon: "📝",
  },
  {
    name: "Text Statistics",
    description: "Analyze text for character count, word count, sentences, paragraphs, and reading time.",
    href: "/text-statistics",
    icon: "#",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-balance text-4xl font-bold tracking-tight">Text & JSON Utilities</h1>
        <p className="text-pretty text-lg text-muted-foreground leading-relaxed">
          Fast, reliable tools for everyday text and JSON operations. No ads, no tracking, just pure utility.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="h-full transition-all hover:border-primary hover:shadow-sm cursor-pointer">
              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-lg shrink-0">
                    {tool.icon}
                  </div>
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-xl">{tool.name}</CardTitle>
                  <CardDescription className="text-pretty leading-relaxed">{tool.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
