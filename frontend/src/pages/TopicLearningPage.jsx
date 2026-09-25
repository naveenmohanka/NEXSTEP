import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Code2,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  Compass,
} from 'lucide-react'
import { CognitiveOrientationBanner } from '../components/layout/CognitiveOrientationBanner'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { LoadingState } from '../components/ui/StateView'
import { apiService } from '../services/api'
import { TOPIC_CONTENT } from '../data/mockData'

export function TopicLearningPage() {
  const { topicId } = useParams()
  const [topic, setTopic] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTopic() {
      try {
        const data = await apiService.getTopicDetail(topicId || 'node-2')
        setTopic(data)
      } finally {
        setIsLoading(false)
      }
    }
    loadTopic()
  }, [topicId])

  if (isLoading || !topic) {
    return <LoadingState title="Loading Concept Masterclass..." subtitle="Synthesizing high-yield cognitive breakdown" />
  }

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* 4 Core Questions Orientation Banner */}
      <CognitiveOrientationBanner
        whereAmI={topic.breadcrumbs.join(' > ')}
        whatAmILearning={topic.title}
        whyAmILearningIt={topic.whyItMatters}
        whatShouldIDoNext="Apply this mental model in the interactive adaptive practice drill"
        nextActionLink="/practice"
        nextActionLabel="Launch Practice Drill"
      />

      {/* Main Concept Card */}
      <Card className="border-slate-800 bg-slate-900/80 p-6 sm:p-8 space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="indigo">{topic.module}</Badge>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {topic.estimatedTime}
            </span>
            <Badge variant="indigo" size="sm">
              {topic.difficulty}
            </Badge>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {topic.title}
          </h1>

          <p className="text-sm font-medium text-cyan-300 mt-2">
            Core Intuition: {topic.coreQuestion}
          </p>
        </div>

        {/* Why this matters callout */}
        <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            <strong className="text-white font-semibold">Why this matters: </strong>
            {topic.whyItMatters}
          </div>
        </div>

        {/* Key Concepts Breakdown */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Core Mental Models
          </h3>

          <div className="grid grid-cols-1 gap-3.5">
            {topic.keyConcepts.map((concept, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-white">{concept.title}</h4>
                </div>
                <p className="text-xs text-slate-300 pl-7 leading-relaxed">
                  {concept.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Example */}
        {topic.codeExample && (
          <div className="space-y-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-cyan-400" />
              Canonical Pattern Implementation
            </h3>
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070a12] p-4 text-xs font-mono text-emerald-300/90 leading-relaxed overflow-x-auto shadow-inner">
              <pre>
                <code>{topic.codeExample}</code>
              </pre>
            </div>
          </div>
        )}

        {/* Common Pitfalls */}
        <div className="space-y-3">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            Common Traps To Avoid
          </h3>
          <div className="space-y-2">
            {topic.commonPitfalls.map((pitfall, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-200/90 flex items-start gap-2.5"
              >
                <span className="text-rose-400 font-bold">•</span>
                <span>{pitfall}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to test your retention and uncover conceptual edge cases?
          </div>
          <Link to="/practice">
            <Button variant="glow" size="lg" rightIcon={ArrowRight}>
              Proceed to Adaptive Practice Drill
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

