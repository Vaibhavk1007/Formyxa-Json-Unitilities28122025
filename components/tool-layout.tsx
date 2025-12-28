import type { ReactNode } from "react"

interface ToolLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </header>
      <div className="bg-card border rounded-xl p-6 shadow-sm">{children}</div>
    </div>
  )
}
