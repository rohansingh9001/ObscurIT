import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 bg-transparent backdrop-blur border-b border-white/10">
      <nav className="h-14 flex items-center justify-between px-6">
        <Link to="/" className="relative font-extrabold tracking-tight text-white">
          <span className="relative z-10 text-2xl">ObscurIT</span>
          <span className="absolute -inset-1 -z-0 rounded-md bg-gradient-to-r from-indigo-600/30 to-pink-600/30 blur-md"></span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#how" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#use-cases" className="hover:text-white">Use cases</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <Link to="/playground" className="rounded-full bg-indigo-600/90 px-4 py-1.5 font-semibold text-white shadow-md shadow-indigo-600/30 hover:bg-indigo-500">
            Try Studio
          </Link>
        </div>
      </nav>
    </div>
  )
}


