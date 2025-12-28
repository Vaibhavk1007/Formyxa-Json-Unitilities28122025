export default function Footer() {
  return (
    <footer className="border-t py-6 bg-muted/30">
      <div className="max-w-[720px] mx-auto px-4 text-center text-sm text-muted-foreground space-y-2">
        
        <div>
          © {new Date().getFullYear()} <span className="font-semibold text-foreground">Formyxa</span>. Built for speed and simplicity.
        </div>

        <div className="text-xs">
          Text & JSON Utilities
        </div>

        <div className="flex justify-center gap-4 text-xs">
          <a href="/about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="/privacy-policy" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms
          </a>
          <a href="/contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </div>

      </div>
    </footer>
  )
}
