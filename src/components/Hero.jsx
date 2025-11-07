import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs text-gray-700 backdrop-blur">
          <Star size={14} className="text-yellow-500" />
          AI-powered development environment
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Ship ideas at the speed of thought
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Design, build, and launch full-stack apps in minutes. Your AI co-founder handles the heavy lifting so you can focus on the vision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-black/90">
            Get Started
            <ArrowRight size={16} />
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            Live Demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
