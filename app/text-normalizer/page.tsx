import type { Metadata } from "next"
import { TextNormalizer } from "./text-normalizer"

export const metadata: Metadata = {
  title: "Text Normalizer – Fix OCR & Formatting Issues Online",
  description:
    "Normalize OCR and copied text by fixing hyphenation, spacing, punctuation, and Unicode issues.",
}

export default function TextNormalizerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page hero — normal centered content */}
      <div className="max-w-[1100px] mx-auto px-6 pt-2">
        <div className="text-center space-y-1">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
            OCR Text Cleanup & Document Repair
          </h1>
          <p className="text-slate-500 max-w-3xl mx-auto text-sm leading-relaxed">
            Fix broken words, OCR hyphenation, spacing, and paragraph structure
            from PDFs, images, and scanned documents.
          </p>
        </div>
      </div>

      {/* ====== FORCE-WIDE TOOL WRAPPER (this stretches to full viewport width) ====== */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          paddingLeft: 0,
          paddingRight: 0,
        }}
        className="py-12"
      >
        {/* Inner content is centered and capped at 1600px */}
        <div style={{ maxWidth: 1200, margin: "0 auto" }} className="px-6">
          <TextNormalizer />
        </div>
      </div>

      {/* RELATED LINKS (kept simple) */}
      <div className="pt-10 border-t border-slate-100 text-sm text-slate-400 text-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
          <span className="font-semibold text-slate-900">Related tools:</span>
          <a href="/text-cleaner" className="hover:text-blue-600 hover:underline">
            Text Cleaner
          </a>
          <span className="text-slate-300">•</span>
          <a href="/text-case-converter" className="hover:text-blue-600 hover:underline">
            Text Case Converter
          </a>
          <span className="text-slate-300">•</span>
          <a href="/text-statistics" className="hover:text-blue-600 hover:underline">
            Text Statistics
          </a>
        </div>
      </div>
    </div>
  )
}
