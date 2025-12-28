export const metadata = {
  title: "Privacy Policy – UtilityTools",
  description: "Privacy policy for UtilityTools. No tracking, no accounts, and browser-only data storage.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-4">
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. UtilityTools is designed to work without
        collecting or transmitting personal data.
      </p>

      <h2>Information we do not collect</h2>
      <ul className="list-disc pl-6">
        <li>No user accounts</li>
        <li>No names, emails, or personal details</li>
        <li>No uploaded files stored on our servers</li>
      </ul>

      <h2>Local storage</h2>
      <p>
        Some tools (such as the Online Notepad) store data locally in your browser
        using <code>localStorage</code>. This data never leaves your device and can
        be cleared at any time.
      </p>

      <h2>Cookies</h2>
      <p>
        UtilityTools does not use cookies for tracking or advertising.
      </p>

      <h2>Third-party services</h2>
      <p>
        We do not use analytics, trackers, or third-party scripts that collect
        personal data.
      </p>

      <h2>Changes</h2>
      <p>
        This privacy policy may be updated occasionally to reflect changes in the site.
      </p>

      <p>If you have questions, feel free to contact us.</p>
    </div>
  )
}
