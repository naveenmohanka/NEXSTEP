import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  Lock,
  Play,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import { Button } from '../ui/Button'

export function RoadmapNode({ node, index, isLast = false }) {
  const isCompleted = node.status === 'completed'
  const isInProgress = node.status === 'in_progress'
  const isLocked = node.status === 'locked'

  return (
    <div className="relative flex items-start gap-4 sm:gap-6 group">
      {/* Node Index & Status Icon Column */}
      <div className="flex flex-col items-center shrink-0">
        <div
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
            isCompleted
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shadow-lg shadow-emerald-500/20'
              : isInProgress
              ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/40 ring-4 ring-indigo-500/20 animate-pulse'
              : 'bg-slate-800 text-slate-500 border border-slate-700/60'
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : isInProgress ? (
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
          ) : (
            <Lock className="w-4 h-4" />
          )}
        </div>

        {/* Vertical connector line */}
        {!isLast && (
          <div
            className={`w-0.5 my-2 h-16 sm:h-20 transition-colors ${
              isCompleted ? 'bg-emerald-500/40' : isInProgress ? 'bg-indigo-500/50' : 'bg-slate-800'
            }`}
          />
        )}
      </div>

      {/* Node Content Card */}
      <div className="flex-1 pb-6 sm:pb-8">
        <Card
          highlight={isInProgress}
          className={`transition-all ${
            isLocked ? 'opacity-65 hover:opacity-85' : 'hover:border-slate-700'
          }`}
        >
          <div className="p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Step {index + 1}</span>
                <Badge
                    variant={
                    isCompleted
                    ? 'emerald'
                    : isInProgress
                    ? 'indigo'
                     : 'slate'
                      }
  size="sm"
>
  {node.badge || node.category}
</Badge>

{node.adaptivePriority === 'high' && (
  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-rose-500/10 text-rose-400 border border-rose-500/30">
    High Priority
  </span>
)}
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {node.estimatedMinutes} mins
                </span>
                <span className="text-slate-600">•</span>
                <span className="font-medium text-slate-300">{node.difficulty}</span>
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
              {node.title}
            </h3>

            {/* Why this step explanation */}
            <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 leading-relaxed mb-4 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-cyan-300">Why NEXSTEP prescribed this: </strong>
                {node.whyThisStep}
              </div>
            </div>
                {node.diagnosticGap && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-200 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-rose-300">Diagnostic Gap: </strong>
                {node.adaptiveReason}
              </div>
            </div>
            )}

            {/* Mastery & Action */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-slate-800/60">
              <div className="w-full sm:w-44">
                <ProgressBar
                  value={node.mastery}
                  label="Node Mastery"
                  showValue
                  color={isCompleted ? 'emerald' : isInProgress ? 'indigo' : 'purple'}
                  size="sm"
                />
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                {isCompleted ? (
                  <Link to={`/learn/${node.id}`}>
                    <Button variant="secondary" size="sm">
                      Review Topic
                    </Button>
                  </Link>
                ) : isInProgress ? (
                  <div className="flex items-center gap-2">
                    <Link to={`/learn/${node.id}`}>
                      <Button variant="outline" size="sm">
                        Learn Concept
                      </Button>
                    </Link>
                    <Link to="/practice">
                      <Button variant="glow" size="sm" rightIcon={ArrowRight}>
                        Practice Now
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <span className="text-xs text-slate-500 italic flex items-center gap-1">
                    <Lock className="w-3 h-3" />
                    Complete previous step to unlock
                  </span>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

