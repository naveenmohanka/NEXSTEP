import React, { useState } from 'react'
import {
  Clock,
  Flame,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  Calendar,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { SkillMatrix } from '../components/profile/SkillMatrix'
import { RetentionChart } from '../components/profile/RetentionChart'
import { useLearning } from '../context/LearningContext'
import { EXAM_INTELLIGENCE_METRICS } from '../data/mockData'

export function ProfilePage() {
  const { user, setUser, showNotification } = useLearning()
  const [isEditingGoal, setIsEditingGoal] = useState(false)
  const [dailyMinutes, setDailyMinutes] = useState(user.dailyGoalMinutes || 45)

  const handleSaveGoal = () => {
    setUser((prev) => ({ ...prev, dailyGoalMinutes: dailyMinutes }))
    setIsEditingGoal(false)
    showNotification('Daily learning goal updated!')
  }

  const handleResetDemo = () => {
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-8">
      {/* Profile Header Card */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-indigo-500 shadow-xl shadow-indigo-500/30"
          />

          <div className="space-y-2 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {user.name}
              </h1>
              <Badge variant="indigo" size="sm">
                {user.currentRank}
              </Badge>
            </div>

            <p className="text-sm text-slate-300">
              Target Track: <strong className="text-white">{user.targetExam}</strong>
            </p>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                Target Exam Date: {user.targetDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                {user.streakDays}-Day Streak
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                {user.dailyGoalMinutes} mins/day goal
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditingGoal(!isEditingGoal)}
            >
              {isEditingGoal ? 'Cancel' : 'Edit Daily Goal'}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={RotateCcw}
              onClick={handleResetDemo}
              className="text-xs text-slate-500 hover:text-rose-400"
            >
              Reset Demo Session
            </Button>
          </div>
        </div>

        {/* Goal Editing drawer if active */}
        {isEditingGoal && (
          <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full">
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Daily Study Target: {dailyMinutes} mins
              </label>
              <input
                type="range"
                min="15"
                max="120"
                step="15"
                value={dailyMinutes}
                onChange={(e) => setDailyMinutes(parseInt(e.target.value, 10))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>
            <Button variant="primary" size="sm" onClick={handleSaveGoal}>
              Save Target
            </Button>
          </div>
        )}
      </div>

      {/* Main Grid: Cognitive Matrix & Spaced Repetition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillMatrix />
        <RetentionChart curve={EXAM_INTELLIGENCE_METRICS.retentionDecayCurve} />
      </div>

      {/* Misconception Diagnostic Log */}
      <Card className="border-slate-800 bg-slate-900/80 p-6">
        <CardHeader className="p-0 pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base text-white">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Recent AI-Remediated Cognitive Misconceptions
            </CardTitle>
            <Badge variant="emerald" size="sm">
              All Remediated
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-0 space-y-3">
          {EXAM_INTELLIGENCE_METRICS.recentMisconceptions.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-bold text-white">{item.topic}</span>
                  <Badge variant="indigo" size="sm">
                    {item.severity} Impact
                  </Badge>
                </div>
                <p className="text-slate-400 pl-6">{item.aiResolution}</p>
              </div>
              <div className="text-right pl-6 sm:pl-0">
                <span className="text-slate-500">{item.date}</span>
                <span className="block text-emerald-400 font-semibold">{item.status}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

