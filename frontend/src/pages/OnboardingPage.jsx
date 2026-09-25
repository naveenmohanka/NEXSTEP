import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Code2,
  Cpu,
  Layers,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { ONBOARDING_GOALS } from '../data/mockData'
import { useLearning } from '../context/LearningContext'
import { apiService } from '../services/api'

export function OnboardingPage() {
  const navigate = useNavigate()
  const { setUser, showNotification } = useLearning()
  const [selectedGoalId, setSelectedGoalId] = useState('sde_interview')
  const [dailyHours, setDailyHours] = useState(1)
  const [confidence, setConfidence] = useState('Intermediate')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFinishOnboarding = async () => {
    setIsSubmitting(true)
    try {
      const updated = await apiService.saveOnboarding(
        selectedGoalId,
        '2026-11-15',
        dailyHours
      )
      setUser(updated)
      showNotification('Goal locked! Launching your diagnostic assessment.')
      navigate('/diagnostic')
    } finally {
      setIsSubmitting(false)
    }
  }

  const iconMap = {
    Code2,
    Cpu,
    Layers,
  }

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <Badge variant="indigo" dot>
          Step 1 of 3: Adaptive Calibration
        </Badge>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          What is your target engineering milestone?
        </h1>
        <p className="text-sm text-slate-400">
          NEXSTEP maps your prerequisite dependencies according to your target domain.
        </p>
      </div>

      {/* Target Goal Selector */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {ONBOARDING_GOALS.map((goal) => {
          const Icon = iconMap[goal.icon] || Code2
          const isSelected = selectedGoalId === goal.id

          return (
            <div
              key={goal.id}
              onClick={() => setSelectedGoalId(goal.id)}
              className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-indigo-500 bg-indigo-950/40 shadow-xl shadow-indigo-500/20 ring-1 ring-indigo-500'
                  : 'border-slate-800 bg-slate-900/60 hover:border-slate-700 hover:bg-slate-900'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && <CheckCircle2 className="w-5 h-5 text-indigo-400" />}
                </div>

                <h3 className="text-base font-bold text-white leading-snug">{goal.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{goal.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>{goal.topicCount} Topics</span>
                <span className="text-indigo-300 font-medium">{goal.timeline}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Commitment & Confidence Setting */}
      <Card className="border-slate-800 bg-slate-900/80 p-6">
        <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-400" />
          Calibration Preferences
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Daily Study Commitment: <span className="text-indigo-400 font-bold">{dailyHours} hr/day</span>
            </label>
            <input
              type="range"
              min="0.5"
              max="4"
              step="0.5"
              value={dailyHours}
              onChange={(e) => setDailyHours(parseFloat(e.target.value))}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>30 mins</span>
              <span>1 hr</span>
              <span>2 hrs</span>
              <span>4 hrs</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-2">
              Current Baseline Confidence
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Beginner', 'Intermediate', 'Advanced'].map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setConfidence(lvl)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    confidence === lvl
                      ? 'border-indigo-500 bg-indigo-600 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Action CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-white">Next: 3-Minute Diagnostic Assessment</h4>
          <p className="text-xs text-slate-400">
            NEXSTEP will evaluate 4 foundational invariants to personalize your roadmap.
          </p>
        </div>

        <Button
          variant="glow"
          size="lg"
          rightIcon={ArrowRight}
          isLoading={isSubmitting}
          onClick={handleFinishOnboarding}
          className="w-full sm:w-auto px-8"
        >
          Begin Diagnostic Test
        </Button>
      </div>
    </div>
  )
}

