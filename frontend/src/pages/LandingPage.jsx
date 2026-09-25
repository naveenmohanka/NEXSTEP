import React from 'react'
import { Link } from 'react-router-dom'
import {
  Compass,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

export function LandingPage() {
  return (
    <div className="space-y-20 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative text-center max-w-4xl mx-auto space-y-6 pt-4 sm:pt-8">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
          <span>Next-Gen Adaptive Learning Navigator</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          Navigate Any Subject with an{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300">
            AI Brain Navigator
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Stop grinding blind question lists. NEXSTEP identifies your underlying conceptual misconceptions, dynamically recalibrates your learning roadmap, and shifts mental models in real time.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/onboarding" className="w-full sm:w-auto">
            <Button variant="glow" size="lg" rightIcon={ArrowRight} className="w-full sm:w-auto text-base px-8 py-4">
              Start Free Adaptive Diagnostic
            </Button>
          </Link>
          <Link to="/dashboard" className="w-full sm:w-auto">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base">
              Explore Live Demo Dashboard
            </Button>
          </Link>
        </div>

        {/* Trust metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-slate-800/80 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-2xl font-bold text-white">3.2x</div>
            <div className="text-xs text-slate-400 mt-0.5">Faster Concept Mastery</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-400">100%</div>
            <div className="text-xs text-slate-400 mt-0.5">Adaptive Roadmaps</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-cyan-400">0</div>
            <div className="text-xs text-slate-400 mt-0.5">Wasted Study Hours</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-emerald-400">94.8%</div>
            <div className="text-xs text-slate-400 mt-0.5">Exam Target Readiness</div>
          </div>
        </div>
      </section>

      {/* Core Demo Story Progression Preview */}
      <section className="max-w-5xl mx-auto">
        <div className="text-center space-y-2 mb-10">
          <Badge variant="indigo">The Adaptive Loop</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            How NEXSTEP Turns Mistakes Into Breakthroughs
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Standard test preps tell you what is wrong. NEXSTEP diagnoses <em>why</em> your intuition failed and prescribes an alternative cognitive model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-indigo-500/20 bg-slate-900/60 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 font-bold text-sm">
              1
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Diagnostic</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every practice session detects subtle patterns in your wrong answers rather than just tracking simple percentages.
            </p>
          </Card>

          <Card className="border-purple-500/20 bg-slate-900/60 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-bold text-sm">
              2
            </div>
            <h3 className="text-lg font-bold text-white">Neural Misconception Engine</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pinpoints exact cognitive traps like confusing local child validation with global subtree invariants in binary search trees.
            </p>
          </Card>

          <Card className="border-cyan-500/20 bg-slate-900/60 p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-bold text-sm">
              3
            </div>
            <h3 className="text-lg font-bold text-white">Dynamic Recalibration</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automatically updates your personalized roadmap to plug the gap before moving to complex multi-step topics.
            </p>
          </Card>
        </div>
      </section>

      {/* Interactive Feature Showcase */}
      <section className="max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/70 p-6 sm:p-10 backdrop-blur-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <Badge variant="emerald" dot>
              Adaptive Intelligence
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Answering the 4 Core Learning Questions
            </h2>
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Where am I?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Clear position in the concept graph with verified prerequisites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">What am I learning?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    High-yield mental models stripped of irrelevant boilerplate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Why am I learning it?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Direct justification tied to exam weight and target engineering benchmarks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">What should I do next?</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    No decision paralysis. One clear highest-yield next action at all times.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/onboarding">
                <Button variant="primary" size="md" rightIcon={ArrowRight}>
                  Set Your Learning Goal
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Mock Card */}
          <div className="rounded-2xl border border-indigo-500/30 bg-slate-950 p-5 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="text-indigo-400 font-semibold flex items-center gap-1.5">
                <Compass className="w-4 h-4" /> NEXSTEP Active Session
              </span>
              <span className="text-slate-500">Live Cognitive State</span>
            </div>
            <div className="mt-4 space-y-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <span className="text-slate-400">Current Focus:</span>
                <p className="font-semibold text-white mt-0.5">DFS & Tree Traversal Recursion</p>
              </div>
              <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-200">
                <span className="font-semibold text-cyan-300">Why this matters:</span> Prerequisite for solving 65% of LeetCode Medium tree challenges.
              </div>
              <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                <span>Predicted Exam Readiness</span>
                <span className="font-bold text-sm">74%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center max-w-3xl mx-auto p-10 rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-indigo-950/40 to-slate-950 space-y-5">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Ready to Experience Personalized Learning?
        </h2>
        <p className="text-sm text-slate-400 max-w-lg mx-auto">
          Take the 3-minute diagnostic test and let NEXSTEP generate your personalized roadmap.
        </p>
        <div>
          <Link to="/diagnostic">
            <Button variant="glow" size="lg" rightIcon={ArrowRight}>
              Launch Diagnostic Assessment
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

