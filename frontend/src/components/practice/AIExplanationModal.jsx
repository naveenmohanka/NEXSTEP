import React from 'react'
import {
  Sparkles,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
  Code2,
  RotateCcw,
  CheckCircle2,
  X,
} from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function AIExplanationModal({
  isOpen,
  onClose,
  onRetry,
  explanation,
  problemTitle,
}) {
  if (!isOpen || !explanation) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header */}
        <div className="p-6 bg-gradient-to-r from-indigo-950/90 via-slate-900 to-purple-950/70 border-b border-indigo-500/20">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Sparkles className="w-5 h-5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
              </div>
              <div>
                <Badge variant="indigo" size="sm" dot>
                  NEXSTEP Cognitive Recovery
                </Badge>
                <h3 className="text-lg font-bold text-white mt-1">
                  Adaptive AI Explanation
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white">Detected Cognitive Gap: </strong>
              {explanation.misconceptionDetected}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[65vh] overflow-y-auto text-sm text-slate-300">
          {/* Diagnostic Breakdown */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-400" />
              Why Your Previous Solution Failed
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
              {explanation.cognitiveDiagnosis}
            </p>
          </div>

          {/* Counter Example */}
          {explanation.counterExample && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Concrete Counter-Example
              </h4>
              <div className="rounded-xl bg-[#060810] border border-slate-800 p-3.5 font-mono text-xs text-rose-200/90 whitespace-pre-wrap leading-relaxed">
                {explanation.counterExample}
              </div>
            </div>
          )}

          {/* Alternative Mental Model */}
          <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              NEXSTEP Mental Model Shift
            </h4>
            <p className="text-slate-200 leading-relaxed">
              {explanation.alternativeMentalModel}
            </p>
          </div>

          {/* Remedy Code */}
          {explanation.remedyCode && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Correct Invariant Implementation
              </h4>
              <pre className="rounded-xl bg-[#060810] border border-slate-800 p-3.5 font-mono text-xs text-emerald-300/90 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                <code>{explanation.remedyCode}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-950/80 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-400">
            Apply this mental model to retry and reinforce neural pathways.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="secondary" size="sm" onClick={onClose}>
              Review Question
            </Button>
            <Button
              variant="glow"
              size="sm"
              leftIcon={RotateCcw}
              onClick={onRetry}
              className="w-full sm:w-auto"
            >
              Try Again With New Intuition
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

