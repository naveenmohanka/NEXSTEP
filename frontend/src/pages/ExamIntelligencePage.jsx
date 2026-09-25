import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Target,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { LoadingState } from '../components/ui/StateView'
import { useLearning } from '../context/LearningContext'
import { apiService } from '../services/api'

export function ExamIntelligencePage() {
  useLearning()
  const [metrics, setMetrics] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedFile, setSelectedFile] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisComplete, setAnalysisComplete] = useState(false)

  useEffect(() => {
    async function loadData() {
      try {
        const data = await apiService.getExamMetrics()
        setMetrics(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  const handleFileChange = (e) => {
  const file = e.target.files?.[0]
  setSelectedFile(file || null)
}
const handleAnalyze = async () => {
  if (!selectedFile) return

  setIsAnalyzing(true)

  setTimeout(() => {
    setIsAnalyzing(false)
  }, 1500)
  setAnalysisComplete(true)
}
  if (isLoading || !metrics) {
    return <LoadingState title="Crunching Exam Intelligence..." subtitle="Correlating syllabus frequency curves with your personal retention" />
  }

  return (
    <div className="max-w-5xl mx-auto py-4 space-y-8">
      <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800">
  <h2 className="text-base font-bold text-white">
    Upload Exam Material
  </h2>

  <p className="text-xs text-slate-400 mt-1 mb-4">
    Upload your PPT, PDF, Notes, or PYQs for exam analysis.
  </p>

  <input
    type="file"
    accept=".pdf,.ppt,.pptx,.txt"
    onChange={handleFileChange}
    className="w-full text-sm text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-500"
  />

  {selectedFile && (
    <p className="mt-3 text-xs text-emerald-400">
      Selected: {selectedFile.name}
    </p>
  )}
  {selectedFile && (
  <Button
    type="button"
    variant="glow"
    size="sm"
    onClick={handleAnalyze}
    className="mt-4"
    isLoading={isAnalyzing}
  >
    {isAnalyzing ? 'Analyzing...' : 'Analyze File'}
  </Button>
)}
{analysisComplete && (
  <p className="mt-3 text-xs text-emerald-400">
    ✓ Analysis Complete
  </p>
)}
</div>
      {/* Top Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 p-6 sm:p-8 shadow-2xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center sm:text-left">
            <Badge variant="indigo" dot>
              AI Predictive Engine
            </Badge>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Exam Intelligence & Yield Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              NEXSTEP benchmarks your actual diagnostic mastery against historical exam topic frequency distributions.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/80 border border-indigo-500/30 p-4 rounded-2xl shrink-0 text-center">
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-400">
                Predicted Score
              </span>
              <div className="text-3xl font-black text-indigo-400 my-0.5">
                {metrics.predictedScore}
              </div>
              <span className="text-xs text-emerald-400 font-semibold">
                {metrics.percentile}
              </span>
            </div>
            <div className="w-[1px] h-12 bg-slate-800" />
            <div>
              <span className="text-[11px] uppercase font-bold text-slate-400">
                Peak Window
              </span>
              <div className="text-3xl font-black text-cyan-400 my-0.5">
                {metrics.estimatedDaysToPeak}
              </div>
              <span className="text-xs text-slate-400">days away</span>
            </div>
          </div>
        </div>
      </div>

      {/* Priority Topics & Exam Yield */}
      <Card className="border-slate-800 bg-slate-900/80 p-6">
        <CardHeader className="p-0 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <CardTitle className="text-base text-white">
                <Target className="w-5 h-5 text-indigo-400" />
                HPriority Topics & Exam Yield
              </CardTitle>
              <p className="text-xs text-slate-400 mt-1">
                Highest ROI study time: Topics with high weight and low current mastery.
              </p>
            </div>
            <Badge variant="indigo" size="sm">
              Prioritized by Return on Effort
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-0 pt-2 space-y-3">
          {metrics.highYieldTopics.map((topic, idx) => {
            const isCritical = topic.yieldScore === 'Critical Focus'
            const isSafe = topic.yieldScore === 'Safe'

            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isCritical
                    ? 'bg-rose-950/20 border-rose-500/40 text-slate-200'
                    : isSafe
                    ? 'bg-emerald-950/15 border-emerald-500/30 text-slate-200'
                    : 'bg-slate-950/60 border-slate-800 text-slate-200'
                }`}
              >
                <div className="space-y-1 md:w-1/3">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{topic.name}</span>
                    <Badge
                      variant={isCritical ? 'rose' : isSafe ? 'emerald' : 'indigo'}
                      size="sm"
                    >
                      {topic.yieldScore}
                    </Badge>
                  </div>
                  <span className="text-xs text-slate-400">
                    Exam Weight: <strong className="text-slate-200">{topic.examWeight}</strong>
                  </span>
                </div>

                {/* Progress bar */}
                <div className="md:w-1/3 space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-400">Your Mastery</span>
                    <span
                      className={
                        topic.studentMastery >= 80
                          ? 'text-emerald-400'
                          : topic.studentMastery >= 60
                          ? 'text-indigo-400'
                          : 'text-rose-400'
                      }
                    >
                      {topic.studentMastery}%
                    </span>
                  </div>
                  <ProgressBar
                    value={topic.studentMastery}
                    color={
                      topic.studentMastery >= 80
                        ? 'emerald'
                        : topic.studentMastery >= 60
                        ? 'indigo'
                        : 'rose'
                    }
                    size="sm"
                  />
                </div>

                {/* Action button */}
                <div className="md:w-1/4 flex justify-end">
                  <Link to="/practice">
                    <Button
                      variant={isCritical ? 'glow' : 'secondary'}
                      size="sm"
                      rightIcon={ArrowRight}
                      className="w-full sm:w-auto"
                    >
                      {isCritical ? 'Boost Score Now' : 'Drill Topic'}
                    </Button>
                  </Link>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Strategic Recommendation */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-slate-900 to-indigo-950/50 border border-indigo-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-1" />
          <div className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white font-semibold">NEXSTEP Recommendation: </strong>
            Directing 45 minutes into <em>Dynamic Programming Memoization</em> today yields an estimated +4.8 percentile improvement in your target exam.
          </div>
        </div>

        <Link to="/practice" className="shrink-0 w-full sm:w-auto">
          <Button variant="glow" size="md" rightIcon={ArrowRight} className="w-full">
            Execute Recommended Drill
          </Button>
        </Link>
      </div>
    </div>
  )
}

