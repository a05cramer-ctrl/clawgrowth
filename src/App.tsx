import { useState } from 'react'
import './App.css'
import heroBg from './hf_20260215_130021_ed0b9b12-9ff4-4e14-a705-1b964c439223.png'

const FEATURES = [
  { title: 'Automated Growth Engine', desc: 'AI-driven automation that scales your memecoin across markets.' },
  { title: 'Multi-Model Launch Support', desc: 'Deploy across multiple growth models with a single click.' },
  { title: 'Instant Copy Code', desc: 'Production-ready code snippets. Copy, paste, deploy.' },
  { title: 'Designed for Memecoin Scaling', desc: 'Built specifically for high-volatility token launches.' },
]

const MODELS = [
  'Aggressive Growth',
  'Organic Momentum',
  'Volume Booster',
  'Stealth Accumulation',
]

const TWITTER_URL = 'https://x.com/clawgrowth'
const CONTRACT_ADDRESS = '0x0000000000000000000000000000000000000000'

const SAMPLE_CODE = `// Claw Growth — Growth Automation
const config = {
  model: 'aggressive_growth',
  targetVolume: 1e6,
  slippage: 0.02,
  autoScale: true
};

await clawd.launch(config);`

function App() {
  const [selectedModel, setSelectedModel] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [caCopied, setCaCopied] = useState(false)

  const handleCopyCode = async () => {
    await navigator.clipboard.writeText(SAMPLE_CODE)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleCopyCA = async () => {
    await navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCaCopied(true)
    setTimeout(() => setCaCopied(false), 2000)
  }

  return (
    <main className="landing">
      <div
        className="fixed-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden
      />
      <nav className="navbar">
        <a href="#" className="nav-brand">Claw Growth</a>
        <div className="nav-actions">
          <button
            className="btn btn-nav"
            onClick={handleCopyCA}
          >
            {caCopied ? 'Copied!' : 'Copy CA'}
          </button>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-nav btn-twitter"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </a>
        </div>
      </nav>
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden />
        <div className="hero-content">
          <span className="brand">Claw Growth</span>
          <h1 className="hero-headline">
            Launch. <span className="accent">Grow.</span> Dominate.
          </h1>
          <p className="hero-subtext">
            Ready-to-copy automation code that powers memecoin growth across multiple models.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={handleCopyCode}>
              Copy Growth Code
            </button>
            <a href="#models" className="btn btn-secondary">
              View Models
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features" id="features">
        <div className="section-inner">
          <h2 className="section-title">Built for Scale</h2>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <article key={i} className="feature-card">
                <div className="feature-glow" aria-hidden />
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="models" id="models">
        <div className="section-inner">
          <h2 className="section-title">Growth Models</h2>
          <div className="models-grid">
            {MODELS.map((m) => (
              <button
                key={m}
                className={`model-card ${selectedModel === m ? 'selected' : ''}`}
                onClick={() => setSelectedModel(m)}
              >
                <span className="model-name">{m}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Code */}
      <section className="code-section" id="code">
        <div className="section-inner">
          <h2 className="section-title">Copy & Deploy</h2>
          <div className="code-container">
            <div className="code-glow" aria-hidden />
            <pre className="code-block">
              <code>
                <span className="code-comment">// Claw Growth — Growth Automation</span>
                <span className="code-keyword">const</span> config = {'{'}
                {'\n'}  model: <span className="code-string">'aggressive_growth'</span>,
                {'\n'}  targetVolume: <span className="code-number">1e6</span>,
                {'\n'}  slippage: <span className="code-number">0.02</span>,
                {'\n'}  autoScale: <span className="code-keyword">true</span>
                {'\n'}{'}'};
                {'\n\n'}
                <span className="code-keyword">await</span> clawd.<span className="code-fn">launch</span>(config);
              </code>
            </pre>
            <button className="btn btn-copy" onClick={handleCopyCode}>
              {copied ? 'Copied!' : 'Copy Code'}
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>Claw Growth</span>
        <span className="footer-divider">·</span>
        <span>Powered by automation</span>
      </footer>
    </main>
  )
}

export default App
