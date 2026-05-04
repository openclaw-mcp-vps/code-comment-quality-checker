export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Shipping{' '}
          <span className="text-[#58a6ff]">Undocumented Code</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your codebase and get an instant report on comment quality — missing docs, outdated explanations, and actionable suggestions your team can act on today.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $11/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🔍', title: 'AST-Powered Scan', desc: 'Detects undocumented functions and classes with precision.' },
          { icon: '💡', title: 'Smart Suggestions', desc: 'AI-generated doc templates tailored to each function signature.' },
          { icon: '📤', title: 'Export Reports', desc: 'Download CSV or JSON results to share with your team.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-sm text-[#8b949e]">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$11</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited file uploads',
              'AST-based comment analysis',
              'Missing doc detection',
              'Outdated comment flagging',
              'Exportable reports (CSV & JSON)',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What languages are supported?',
              a: 'JavaScript, TypeScript, Python, and Go are fully supported. More languages are added regularly.'
            },
            {
              q: 'Is my code stored on your servers?',
              a: 'No. Files are analyzed in-memory and discarded immediately after the report is generated.'
            },
            {
              q: 'Can I use this in CI/CD pipelines?',
              a: 'Yes. Pro subscribers get API access to integrate comment quality checks directly into GitHub Actions or any CI system.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Code Comment Quality Checker. All rights reserved.
      </footer>
    </main>
  )
}
