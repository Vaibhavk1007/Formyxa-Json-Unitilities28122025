export const metadata = {
  title: "About UtilityTools – Privacy-Friendly Text & JSON Tools",
  description: "Learn about UtilityTools, a privacy-friendly collection of fast, browser-based text and JSON utilities.",
}

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1>About UtilityTools</h1>

      <p>
        UtilityTools provides fast, privacy-friendly text and JSON tools that run entirely in your browser.
    </p>

      <p>
        The goal is simple: help you clean, format, and analyze text without
        distractions, accounts, or unnecessary features.
      </p>

      <h2>What we offer</h2>
      <ul className="list-disc pl-6">
        <li>Text case conversion</li>
        <li>JSON formatting and validation</li>
        <li>Text cleaning utilities</li>
        <li>A simple online notepad</li>
        <li>Text statistics and reading insights</li>
      </ul>

      <h2>Who it’s for</h2>
      <p>
        UtilityTools is built for writers, students, developers, and anyone who
        needs quick, reliable text tools.
      </p>

      <h2>Our principles</h2>
      <ul className="list-disc pl-6">
        <li>No accounts required</li>
        <li>No ads or tracking</li>
        <li>No data collection</li>
        <li>Fast and easy to use</li>
      </ul>

      <p>All tools run directly in your browser.</p>
    </div>
  )
}
