import { useState } from 'react'
import { Play } from 'lucide-react'

export default function Showcase() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="showcase" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">See it in action</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Watch a quick walkthrough of building a full app with AI assistance.</p>
          </div>
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-black/90">
            <Play size={16} />
            Play video
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="aspect-video w-full bg-gray-100 flex items-center justify-center text-gray-500">
            <span className="text-sm">Demo preview area</span>
          </div>
        </div>

        {videoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setVideoOpen(false)}>
            <div className="w-full max-w-3xl overflow-hidden rounded-xl bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
              <div className="aspect-video w-full bg-black">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 text-right">
                <button onClick={() => setVideoOpen(false)} className="inline-flex rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50">Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
