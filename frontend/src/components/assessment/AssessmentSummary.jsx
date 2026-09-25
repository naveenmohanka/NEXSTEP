import React from 'react'
import { Link } from 'react-router-dom'
import {
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'

export function AssessmentSummary({ result }) {
  if (!result) return null

  return (
    <div className="space-y-6">
      {/* Top Banner with Score */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="text-center sm:text-left space-y-2">
            <Badge variant="indigo" dot>
              Diagnostic Assessment Complete
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Cognitive Profile Calibrated
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              {result.cognitiveSummary}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-slate-900/90 border border-indigo-500/40 shadow-inner text-center shrink-0">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Diagnostic Score
            </span>
            <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 my-1">
              {result.score}%
            </div>
            <span className="text-xs text-emerald-400 font-medium">
              {result.correctCount} / {result.totalQuestions} Invariants Verified
            </span>
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="mt-6 p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-indigo-200/90 leading-relaxed">
            <strong className="text-white font-semibold">NEXSTEP Neural Insight: </strong>
            {result.aiInsight}
          </div>
        </div>
      </div>

      {/* Grid: Strengths vs Critical Gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Strengths */}
        <Card className="border-emerald-500/20 bg-slate-900/60">
          <CardHeader>
            <CardTitle className="text-emerald-400 text-base">
              <CheckCircle2 className="w-5 h-5" />
              Verified Core Strengths
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.strengths.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-slate-200">{s.topic}</span>
                  <Badge variant="emerald" size="sm">
                    {s.status} ({s.score}%)
                  </Badge>
                </div>
                <ProgressBar value={s.score} color="emerald" size="sm" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Knowledge Gaps */}
        <Card className="border-rose-500/20 bg-slate-900/60">
          <CardHeader>
            <CardTitle className="text-rose-400 text-base">
              <AlertTriangle className="w-5 h-5" />
              Identified Knowledge Gaps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.gaps.map((g, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                  <span className="text-slate-200">{g.topic}</span>
                  <Badge variant={g.priority === 'Urgent' ? 'rose' : 'amber'} size="sm">
                    {g.priority} ({g.score}%)
                  </Badge>
                </div>
                <ProgressBar value={g.score} color={g.priority === 'Urgent' ? 'rose' : 'amber'} size="sm" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-slate-900 border border-slate-800 gap-4">
        <div className="text-xs text-slate-400 text-center sm:text-left">
          Roadmap dynamically prioritizes gap recovery before high-tier synthesis.
        </div>
        <Link to="/roadmap" className="w-full sm:w-auto">
          <Button variant="glow" size="lg" rightIcon={ArrowRight} className="w-full">
            Generate Personalized Roadmap
          </Button>
        </Link>
      </div>
    </div>
  )
}

