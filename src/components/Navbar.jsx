import { Rocket, Settings, User } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Vibe Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#showcase" className="hover:text-gray-900 transition-colors">Showcase</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            <Settings size={16} />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black/90">
            <User size={16} />
            Sign in
          </button>
        </div>
      </div>
    </header>
  )
}
