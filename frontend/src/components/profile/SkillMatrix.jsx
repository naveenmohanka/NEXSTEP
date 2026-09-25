import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { ProgressBar } from '../ui/ProgressBar'
import { Brain } from 'lucide-react'

export function SkillMatrix({ skills = [] }) {
  const defaultSkills = [
    { name: 'Binary Trees & Invariants', mastery: 85, status: 'Strong', category: 'Trees' },
    { name: 'Hash Table Collision Resolving', mastery: 92, status: 'Mastered', category: 'Hashing' },
    { name: 'Recursion Call Stack Profiling', mastery: 72, status: 'Proficient', category: 'Recursion' },
    { name: 'Dynamic Programming State Compression', mastery: 54, status: 'In Review', category: 'DP' },
    { name: 'Directed Graph Cycle Invariants', mastery: 48, status: 'Needs Drill', category: 'Graphs' },
  ]

  const data = skills.length > 0 ? skills : defaultSkills

  return (
    <Card className="border-slate-800 bg-slate-900/70">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base text-white">
            <Brain className="w-5 h-5 text-indigo-400" />
            Adaptive Cognitive Matrix
          </CardTitle>
          <Badge variant="indigo" size="sm">
            Live Calibration
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((item, idx) => {
          const color =
            item.mastery >= 85
              ? 'emerald'
              : item.mastery >= 70
              ? 'indigo'
              : item.mastery >= 50
              ? 'amber'
              : 'rose'
          return (
            <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
              <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
                <span className="text-slate-200">{item.name}</span>
                <span className={`font-bold text-${color}-400`}>{item.mastery}%</span>
              </div>
              <ProgressBar value={item.mastery} color={color} size="sm" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}

