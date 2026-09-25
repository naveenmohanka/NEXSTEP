import React from 'react'
import { RoadmapNode } from './RoadmapNode'
import { Badge } from '../ui/Badge'
import { Target } from 'lucide-react'

export function RoadmapGraph({ nodes = [] }) {
  if (!nodes || nodes.length === 0) return null

  const completedCount = nodes.filter((n) => n.status === 'completed').length
  const progressPercent = Math.round((completedCount / nodes.length) * 100)

  return (
    <div className="space-y-6">
      {/* Roadmap Header Summary */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="indigo" dot>
              Adaptive Execution Path
            </Badge>
            <span className="text-xs text-slate-400">
              {completedCount} of {nodes.length} Milestones Cleared
            </span>
          </div>
          <h2 className="text-lg font-bold text-white">Target Learning Roadmap</h2>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Path Completion</span>
            <span className="text-sm font-bold text-indigo-400">{progressPercent}%</span>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Target className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Nodes list */}
      <div className="py-2 pl-2">
        {nodes.map((node, idx) => (
          <RoadmapNode
            key={node.id}
            node={node}
            index={idx}
            isLast={idx === nodes.length - 1}
          />
        ))}
      </div>
    </div>
  )
}

