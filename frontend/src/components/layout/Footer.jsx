import React from 'react'
import { Link } from 'react-router-dom'
import { Compass, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950/70 text-slate-500 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <Compass className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-slate-300">NEXSTEP AI Navigator</span>
            <span className="text-xs text-slate-600">Adaptive Learning Platform</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <Link to="/roadmap" className="hover:text-indigo-400 transition-colors">
              Adaptive Roadmap
            </Link>
            <Link to="/diagnostic" className="hover:text-indigo-400 transition-colors">
              Diagnostic Assessment
            </Link>
            <Link to="/practice" className="hover:text-indigo-400 transition-colors">
              Adaptive Practice
            </Link>
            <Link to="/exam-intelligence" className="hover:text-indigo-400 transition-colors">
              Exam Intelligence
            </Link>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-500">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Continuous Cognitive Calibration</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

