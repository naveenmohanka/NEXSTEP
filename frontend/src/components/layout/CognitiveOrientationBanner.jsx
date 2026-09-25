import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

export function CognitiveOrientationBanner({
  whereAmI = 'Data Structures & Algorithms > Trees',
  whatAmILearning = 'DFS & Tree Traversal Recursion',
  whyAmILearningIt = 'Prerequisite for solving 65% of LeetCode Medium challenges & graph exploration',
  whatShouldIDoNext = 'Complete the Adaptive Diagnostic Drill',
  nextActionLink = '/practice',
  nextActionLabel = 'Start Practice Drill',
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-5 sm:p-6 mb-8 shadow-xl shadow-indigo-950/20">
      {/* Background ambient glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
        <div className="space-y-3 max-w-3xl">
          {/* Where am I */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <Badge variant="indigo" dot>
              AI Navigation Active
            </Badge>
            <span className="text-slate-500 font-mono">/</span>
            <span className="text-slate-400 font-medium">{whereAmI}</span>
          </div>

          {/* What am I learning */}
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2.5">
              <span>{whatAmILearning}</span>
            </h2>
            {/* Why am I learning it */}
            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed flex items-start gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-cyan-300 font-medium">Why this step:</strong> {whyAmILearningIt}
              </span>
            </p>
          </div>
        </div>

        {/* What should I do next */}
        <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-2.5 border-t lg:border-t-0 lg:border-l border-slate-800/80 pt-4 lg:pt-0 lg:pl-6 shrink-0">
          <div className="text-left lg:text-right">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 block">
              What to do next
            </span>
            <span className="text-xs text-slate-200 font-medium block">{whatShouldIDoNext}</span>
          </div>
          {nextActionLink && (
            <Link to={nextActionLink}>
              <Button variant="glow" size="sm" rightIcon={ArrowRight}>
                {nextActionLabel}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

