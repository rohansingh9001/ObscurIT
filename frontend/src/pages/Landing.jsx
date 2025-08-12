import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'

function Section({ id, title, children }) {
  return (
    <section id={id} className="py-12 md:py-14">
      <div className="max-w-6xl mx-auto px-6 section-reveal">
        <h2 className="text-3xl font-bold mb-6 text-white">{title}</h2>
        <div className="text-slate-300">{children}</div>
      </div>
    </section>
  )
}

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="text-slate-200 bg-slate-950 min-h-screen w-full noise">
      <Navbar />
      <header className="relative overflow-hidden bg-grid">
        <div className="spotlight"></div>
        <div className="absolute -top-10 -left-10 bg-indigo-600 blob"></div>
        <div className="absolute -bottom-24 right-0 bg-pink-600 blob animation-delay-2000"></div>
        <div className="relative py-24 md:py-28 text-center">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-white">
              AI-powered anonymization for documents, images, and videos
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300">
              Protect privacy and meet compliance with just a click or an API call.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4">
              <Link to="/playground" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25">
                Try the Studio
              </Link>
              <a href="#how" className="inline-flex items-center rounded-md border border-indigo-600 px-5 py-3 font-semibold text-indigo-300 hover:text-white">
                How it works
              </a>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-slate-300">
              {[
                ['10x', 'Faster processing'],
                ['99.9%', 'Uptime SLA'],
                ['GDPR', 'Compliance-ready'],
                ['SDKs', 'JS / Python'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-bold text-white">{k}</div>
                  <div className="text-sm text-slate-400">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <Section id="how" title="How It Works">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {[
            { n: 1, title: 'Upload', desc: 'Drop files in the Studio or send via REST.' , icon:'⬆️'},
            { n: 2, title: 'Detect', desc: 'AI finds faces, plates, and text PII.' , icon:'🧠'},
            { n: 3, title: 'Anonymize', desc: 'Blur, pixelate, or mask — per region.' , icon:'🛡️'},
            { n: 4, title: 'Export', desc: 'Download or get a secure link.' , icon:'⬇️'},
          ].map((s) => (
            <div key={s.n} className="group relative rounded-xl border border-slate-800 bg-slate-900/60 p-5 overflow-hidden transition hover:-translate-y-1 hover:border-indigo-600">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-indigo-600/10 blur-2xl group-hover:bg-indigo-600/20"/>
          <div className="text-sm text-slate-400">Step {s.n}</div>
          <div className="mt-1 text-2xl font-bold flex justify-center gap-2">{s.icon} {s.title}</div>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="features" title="Features">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon:'🔍', title:'Automatic PII Detection', desc:'Detect faces, license plates, emails, phones, addresses, signatures, and more.' },
            { icon:'🎛️', title:'Multiple Redaction Styles', desc:'Choose blur, pixelate, blackout, or placeholders — per region and intensity.' },
            { icon:'🧩', title:'API & Web Studio', desc:'Use the no-code Studio or integrate via REST with async processing.' },
            { icon:'📦', title:'Batch Processing', desc:'Upload folders or multi-file jobs and process them in parallel.' },
            { icon:'🧾', title:'Compliance-Ready', desc:'Built for GDPR/CCPA with retention windows and audit-friendly logs.' },
            { icon:'🔐', title:'Secure File Handling', desc:'Encrypted in transit and at rest with time-bound signed links.' },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-800 p-[1px] bg-gradient-to-br from-transparent via-slate-800/40 to-transparent">
              <div className="rounded-[11px] h-full w-full bg-slate-900/30 backdrop-blur p-5 transition hover:bg-slate-900/50">
                <div className="text-2xl">{f.icon}</div>
                <div className="mt-2 text-lg font-semibold">{f.title}</div>
                <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="use-cases" title="Use Cases">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[
            {e:'⚖️', t:'Legal', d:'Case files, evidence, e-discovery'},
            {e:'🏥', t:'Healthcare', d:'Patient records, scans, DICOM'},
            {e:'📰', t:'Media', d:'Docs, images, and broadcast video'},
            {e:'🚚', t:'Transportation', d:'Dashcam/CCTV license plate anonymization'},
            {e:'🎓', t:'Education', d:'Dataset releases and research sharing'},
          ].map((c) => (
            <div key={c.t} className="rounded-xl border border-slate-800 bg-slate-900/30 backdrop-blur p-4 text-center hover:border-indigo-600 transition">
              <div className="text-2xl">{c.e}</div>
              <div className="mt-1 font-semibold">{c.t}</div>
              <div className="text-xs text-slate-400">{c.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="pricing" title="Pricing">
        <Pricing />
      </Section>

      {/* Removed testimonials and API docs preview for a tighter, more focused page */}

      <Section id="cta" title="Start protecting your data today">
        <div className="flex items-center justify-center gap-4">
          <Link to="/playground" className="inline-flex items-center rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25">
            Try the Studio
          </Link>
          <a href="#pricing" className="inline-flex items-center rounded-md border border-indigo-600 px-5 py-3 font-semibold text-indigo-300 hover:text-white">
            View Pricing
          </a>
        </div>
      </Section>

      <footer className="relative mt-12">
        <div className="divider" />
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-4 text-sm">
          <div>
            <div className="font-extrabold text-white">ObscurIT</div>
            <p className="mt-2 text-slate-400">Privacy-first anonymization for docs, images, and video.</p>
          </div>
          <div>
            <div className="font-semibold text-white">Product</div>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li><a href="#how" className="hover:text-white">How it works</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#use-cases" className="hover:text-white">Use cases</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Developers</div>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li><a href="#" className="hover:text-white">API status</a></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">SDKs</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Legal</div>
            <ul className="mt-2 space-y-1 text-slate-300">
              <li><a href="#privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">DPA</a></li>
            </ul>
          </div>
        </div>
        <div className="divider" />
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-xs text-slate-400">
          <div>© {new Date().getFullYear()} ObscurIT</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(true)
  const price = (m, y) => (yearly ? y : m)
  const pill = yearly ? 'Yearly (save 20%)' : 'Monthly'
  return (
    <div>
      <div className="flex items-center justify-center gap-3 mb-6">
        <button onClick={() => setYearly(false)} className={`px-3 py-1.5 rounded-full border ${!yearly ? 'bg-slate-800 border-indigo-600 text-white' : 'border-slate-700 text-slate-300'}`}>Monthly</button>
        <button onClick={() => setYearly(true)} className={`px-3 py-1.5 rounded-full border ${yearly ? 'bg-slate-800 border-indigo-600 text-white' : 'border-slate-700 text-slate-300'}`}>Yearly</button>
        <span className="text-xs text-indigo-300">{pill}</span>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[ 
          { name:'Free', price: price(0,0), unit:'$', features:['Watermark', 'Lower priority', 'Community support'], cta:'Start Free', highlight:false },
          { name:'Pro', price: price(29,24), unit:'$', features:['API access', 'Priority queue', 'Higher limits', 'Webhook callbacks'], cta:'Go Pro', highlight:true },
          { name:'Enterprise', price:'Custom', unit:'', features:['Unlimited usage', 'SLA + SSO', 'Dedicated support'], cta:'Contact Sales', highlight:false },
        ].map((p) => (
          <div key={p.name} className={`rounded-2xl border ${p.highlight ? 'border-indigo-600 shadow-[0_0_0_2px_rgba(79,70,229,0.25)]' : 'border-slate-800'} bg-slate-900/30 backdrop-blur p-6` }>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              {p.highlight && <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-600/20 text-indigo-300 border border-indigo-600">Popular</span>}
            </div>
            <div className="mt-3">
              {typeof p.price === 'number' ? (
                <div className="text-4xl font-extrabold text-white">{p.unit}{p.price}<span className="text-base text-slate-400">/mo</span></div>
              ) : (
                <div className="text-3xl font-extrabold text-white">{p.price}</div>
              )}
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2"><span className="text-green-400">✔</span><span>{f}</span></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link to="/playground" className={`inline-flex w-full items-center justify-center rounded-full px-4 py-2 font-semibold ${p.highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'border border-slate-700 text-indigo-300 hover:text-white'}`}>{p.cta}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


