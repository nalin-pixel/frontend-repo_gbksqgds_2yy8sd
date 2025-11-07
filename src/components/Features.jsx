import { Code, Sparkles, Shield, Cloud } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI-assisted workflow',
    desc: 'Generate, edit, and refactor code with natural language prompts.'
  },
  {
    icon: Code,
    title: 'Full-stack ready',
    desc: 'Frontend + Backend with live previews and instant deploys.'
  },
  {
    icon: Cloud,
    title: 'Persistent storage',
    desc: 'MongoDB integration built-in for real data from day one.'
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'Best practices and safe scaffolding baked into every project.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Everything you need to build fast</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">A modern stack with batteries included. Spin up polished experiences without the boilerplate.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition-shadow">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
