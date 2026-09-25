import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Map, Sparkles, RefreshCw, Filter, Compass, ArrowRight } from 'lucide-react'
import { RoadmapGraph } from '../components/roadmap/RoadmapGraph'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { useLearning } from '../context/LearningContext'

export function RoadmapPage() {
  const { roadmap, user, showNotification } = useLearning()
  const [filter, setFilter] = useState('all')

  const filteredNodes = roadmap.filter((node) => {
    if (filter === 'active') return node.status === 'in_progress'
    if (filter === 'completed') return node.status === 'completed'
    return true
  })

  const handleRecalibrate = () => {
    showNotification('NEXSTEP Neural Engine recalibrated roadmap weights based on your latest retention metrics.')
  }

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <Badge variant="indigo" dot>
              Personalized Knowledge Graph
            </Badge>
            <span className="text-xs text-slate-400 font-mono">Target: {user.targetExam}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Adaptive Learning Roadmap
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
            Nodes dynamically reorder and prioritize based on detected misconceptions from your diagnostic drills.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            leftIcon={RefreshCw}
            onClick={handleRecalibrate}
          >
            Recalibrate Weights
          </Button>
          <Link to="/practice">
            <Button variant="glow" size="sm" rightIcon={ArrowRight}>
              Continue Practice
            </Button>
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            filter === 'all'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          All Steps ({roadmap.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('active')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            filter === 'active'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Active Step
        </button>
        <button
          type="button"
          onClick={() => setFilter('completed')}
          className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
            filter === 'completed'
              ? 'bg-indigo-600 text-white'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          Mastered
        </button>
      </div>

      {/* Graph Display */}
      <RoadmapGraph nodes={filteredNodes} />
    </div>
  )
}

