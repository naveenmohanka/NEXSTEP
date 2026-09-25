import React from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  Flame,
  Target,
  Brain,
  Map,
  BookOpen,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Clock,
} from 'lucide-react'
import { CognitiveOrientationBanner } from '../components/layout/CognitiveOrientationBanner'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { useLearning } from '../context/LearningContext'

export function DashboardPage() {
  const { user, roadmap } = useLearning()

  const activeNode = roadmap.find((n) => n.status === 'in_progress') || roadmap[1]
  const completedCount = roadmap.filter((n) => n.status === 'completed').length

  return (
    <div className="space-y-8 py-2">
      {/* 4 Core Questions Orientation Banner */}
      <CognitiveOrientationBanner
        whereAmI={`${user.targetExam} > Module 2`}
        whatAmILearning={activeNode?.title || 'DFS & Tree Traversal Recursion'}
        whyAmILearningIt={activeNode?.whyThisStep || 'Prerequisite for solving 65% of LeetCode Medium tree challenges'}
        whatShouldIDoNext="Launch Adaptive Practice Drill to resolve BST range invariant"
        nextActionLink="/practice"
        nextActionLabel="Start Adaptive Drill"
      />

      {/* Top 4 KPI Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <Card className="border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Overall Mastery</span>
            <Brain className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">{user.overallMastery}%</div>
          <div className="mt-2">
            <ProgressBar value={user.overallMastery} color="indigo" size="sm" />
          </div>
        </Card>

        {/* Metric 2 */}
        <Card className="border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Exam Readiness</span>
            <Target className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-400">{user.readinessScore}%</div>
          <div className="mt-2">
            <ProgressBar value={user.readinessScore} color="emerald" size="sm" />
          </div>
        </Card>

        {/* Metric 3 */}
        <Card className="border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Continuous Streak</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-3xl font-extrabold text-amber-400 flex items-center gap-1.5">
            {user.streakDays} <span className="text-xs font-normal text-slate-400">days</span>
          </div>
          <div className="text-xs text-slate-400 mt-2 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Active today
          </div>
        </Card>

        {/* Metric 4 */}
        <Card className="border-slate-800 bg-slate-900/70 p-5">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Roadmap Progress</span>
            <Map className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-extrabold text-white">
            {completedCount} <span className="text-xs font-normal text-slate-400">/ {roadmap.length} steps</span>
          </div>
          <div className="mt-2">
            <ProgressBar
              value={completedCount}
              max={roadmap.length}
              color="purple"
              size="sm"
            />
          </div>
        </Card>
      </div>

      {/* Main Split Section: Immediate Action vs Roadmap Snapshot */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Recommended Next Step & Knowledge Gap */}
        <div className="lg:col-span-2 space-y-6">
          {/* Active Step Card */}
          <Card highlight className="bg-gradient-to-br from-slate-900 via-indigo-950/20 to-slate-900 p-6">
            <div className="flex items-center justify-between mb-3">
              <Badge variant="indigo" dot>
                Immediate Priority
              </Badge>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> Est. {activeNode?.estimatedMinutes || 35} mins
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{activeNode?.title}</h3>

            <p className="text-sm text-slate-300 mb-4 leading-relaxed">
              {activeNode?.whyThisStep}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex items-start gap-3 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div className="text-xs text-indigo-200">
                <strong className="text-white">AI Pedagogical Note: </strong>
                This node introduces depth-first traversal call-stack invariants. Mastering this node will boost your exam readiness score by +6%.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link to={`/learn/${activeNode?.id || 'node-2'}`}>
                <Button variant="primary" size="md" leftIcon={BookOpen}>
                  Read Concept Brief
                </Button>
              </Link>
              <Link to="/practice">
                <Button variant="glow" size="md" rightIcon={ArrowRight}>
                  Launch Adaptive Practice Drill
                </Button>
              </Link>
            </div>
          </Card>

          {/* AI Gap Alert */}
          <Card className="border-amber-500/30 bg-amber-950/10 p-5">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-amber-200">
                    Spaced Repetition Warning: BST Subtree Invariant
                  </h4>
                  <Badge variant="amber" size="sm">
                    Review Due
                  </Badge>
                </div>
                <p className="text-xs text-amber-300/80 leading-relaxed">
                  Your last practice session showed uncertainty when evaluating global bounds in binary search trees. A 2-question micro-drill is recommended.
                </p>
                <div className="pt-2">
                  <Link to="/practice">
                    <Button variant="outline" size="sm" className="border-amber-500/40 text-amber-300 hover:bg-amber-500/20">
                      Take 2-Min Micro-Drill
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Col: Roadmap Preview & Fast Navigation */}
        <div className="space-y-6">
          <Card className="border-slate-800 bg-slate-900/80 p-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Map className="w-4 h-4 text-indigo-400" />
                Roadmap Milestones
              </h4>
              <Link to="/roadmap" className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold">
                View Full
              </Link>
            </div>

            <div className="space-y-3">
              {roadmap.slice(0, 4).map((node) => (
                <div
                  key={node.id}
                  className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                    node.status === 'completed'
                      ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
                      : node.status === 'in_progress'
                      ? 'bg-indigo-950/30 border-indigo-500/40 text-white'
                      : 'bg-slate-950/40 border-slate-800 text-slate-500'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {node.status === 'completed' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : node.status === 'in_progress' ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse shrink-0" />
                    ) : (
                      <span className="w-2 h-2 rounded-full bg-slate-700 shrink-0" />
                    )}
                    <span className="font-medium truncate max-w-[160px]">{node.title}</span>
                  </div>
                  <span className="font-bold shrink-0">{node.mastery}%</span>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <Link to="/exam-intelligence" className="block text-center">
                <Button variant="secondary" size="sm" className="w-full" leftIcon={Target}>
                  Check Exam Intelligence
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

