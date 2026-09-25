import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'
import { Clock, RefreshCw, AlertCircle } from 'lucide-react'

export function RetentionChart({ curve = [] }) {
  const defaultCurve = [
    { day: 'Day 1', retention: 100, active: false },
    { day: 'Day 3', retention: 88, active: false },
    { day: 'Day 7', retention: 76, active: false },
    { day: 'Day 14 (Due)', retention: 64, active: true },
    { day: 'Day 30', retention: 52, active: false },
  ]

  const items = curve.length > 0 ? curve : defaultCurve

  return (
    <Card className="border-slate-800 bg-slate-900/70">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base text-white">
            <Clock className="w-5 h-5 text-cyan-400" />
            Ebbinghaus Retention Forecast
          </CardTitle>
          <Badge variant="amber" size="sm" dot>
            Review Cycle Pending
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-xs text-slate-400">
          NEXSTEP uses spaced repetition intervals to trigger targeted recall drills right before cognitive decay drops below 70%.
        </p>
        <div className="space-y-2 pt-2">
          {items.map((point, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                point.active
                  ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                  : 'bg-slate-950/50 border-slate-800/80 text-slate-300'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-medium">{point.day}</span>
                {point.active && (
                  <Badge variant="amber" size="sm">
                    Optimal Review Window
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className={`h-full ${
                      point.retention >= 80
                        ? 'bg-emerald-400'
                        : point.retention >= 65
                        ? 'bg-amber-400'
                        : 'bg-rose-400'
                    }`}
                    style={{ width: `${point.retention}%` }}
                  />
                </div>
                <span className="font-bold w-9 text-right">{point.retention}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

