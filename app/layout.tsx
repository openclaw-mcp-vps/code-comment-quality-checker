import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Comment Quality Checker',
  description: 'Analyze code comment quality and suggest improvements for your codebase.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0956229d-9dd7-4849-b0bc-63c9b5e8d8a5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
