import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Code2,
  HelpCircle,
  Award,
} from 'lucide-react'
import { CognitiveOrientationBanner } from '../components/layout/CognitiveOrientationBanner'
import { Card } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { AIExplanationModal } from '../components/practice/AIExplanationModal'
import { LoadingState } from '../components/ui/StateView'
import { useLearning } from '../context/LearningContext'
import { apiService } from '../services/api'

export function PracticePage() {
  const { markTopicCompleted } = useLearning()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(null)
  const [showAiModal, setShowAiModal] = useState(false)
  const [isTopicFinished, setIsTopicFinished] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      try {
        const qList = await apiService.getPracticeQuestions('node-2')
        setQuestions(qList)
      } finally {
        setIsLoading(false)
      }
    }
    loadData()
  }, [])

  if (isLoading || questions.length === 0) {
    return <LoadingState title="Generating Adaptive Practice Set..." subtitle="Selecting high-yield questions matching your diagnostic gaps" />
  }

  const currentQ = questions[currentIndex]

  const handleSubmitAnswer = () => {
    if (!selectedOptionId) return
    setIsSubmitted(true)

    const chosenOption = currentQ.options.find((opt) => opt.id === selectedOptionId)

    if (chosenOption?.isCorrect) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
      // Automatically trigger AI Explanation Modal if misconception data exists
      if (currentQ.aiAdaptiveExplanation) {
        setShowAiModal(true)
      }
    }
  }

  const handleRetryAfterExplanation = () => {
    setShowAiModal(false)
    setIsSubmitted(false)
    setIsCorrect(null)
    setSelectedOptionId(null)
  }

  const handleNextOrFinish = async () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
      setSelectedOptionId(null)
      setIsSubmitted(false)
      setIsCorrect(null)
    } else {
      // Completed the drill!
      setIsTopicFinished(true)
      await markTopicCompleted('node-2')
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-4 space-y-6">
      {/* 4 Core Questions Orientation Banner */}
      <CognitiveOrientationBanner
        whereAmI="Algorithms > DFS & Tree Traversal > Adaptive Practice"
        whatAmILearning="Binary Search Tree Range Invariant"
        whyAmILearningIt="Resolves the Local vs Global subtree misconception diagnosed earlier"
        whatShouldIDoNext={
          isTopicFinished
            ? 'Proceed to the next unlocked milestone on your roadmap'
            : isSubmitted && isCorrect
            ? 'Proceed to the next drill question'
            : 'Select an answer to test your invariant model'
        }
        nextActionLink={isTopicFinished ? '/roadmap' : null}
        nextActionLabel="View Updated Roadmap"
      />

      {/* Completion Banner */}
      {isTopicFinished && (
        <div className="p-6 rounded-3xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-indigo-950/40 shadow-2xl space-y-4 animate-in fade-in">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <Badge variant="emerald" dot>
                Milestone Cleared
              </Badge>
              <h2 className="text-xl font-bold text-white mt-1">
                Node Mastered: DFS & Tree Traversal Recursion
              </h2>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            You successfully recognized the global subtree invariant and corrected your mental model. Your mastery score has increased by <strong className="text-emerald-400">+18%</strong> and <strong>Step 3: Space-Optimized Dynamic Programming</strong> is now unlocked!
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Link to="/roadmap">
              <Button variant="glow" size="md" rightIcon={ArrowRight}>
                View Recalibrated Roadmap
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="secondary" size="md">
                Return to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Question Card */}
      {!isTopicFinished && (
        <Card className="border-slate-800 bg-slate-900/90 shadow-2xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Badge variant="indigo">Practice Drill</Badge>
              <span className="text-xs text-slate-400">
                Question {currentIndex + 1} of {questions.length}
              </span>
            </div>
            <Badge variant="indigo" size="sm">
              {currentQ.difficulty}
            </Badge>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {currentQ.prompt}
            </h2>
          </div>

          {/* Reference code snippet */}
          {currentQ.codeSnippet && (
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070a12] p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto shadow-inner">
              <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800/60 text-slate-500 text-[11px]">
                <Code2 className="w-3.5 h-3.5" />
                <span>Problematic Code Invariant</span>
              </div>
              <pre className="text-amber-200/90">
                <code>{currentQ.codeSnippet}</code>
              </pre>
            </div>
          )}

          {/* Trap explanation hint */}
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 flex items-start gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <span>
              Tip: Think about ancestor constraints vs direct child nodes.
            </span>
          </div>

          {/* Option list */}
          <div className="space-y-3">
            {currentQ.options.map((opt) => {
              const isSelected = selectedOptionId === opt.id

              let cardStyles =
                'border-slate-800 bg-slate-950/50 hover:bg-slate-900 hover:border-slate-700 text-slate-200'

              if (isSelected) {
                cardStyles =
                  'border-indigo-500 bg-indigo-950/50 text-white ring-1 ring-indigo-500 shadow-md shadow-indigo-500/20'
              }

              if (isSubmitted) {
                if (opt.isCorrect) {
                  cardStyles =
                    'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-1 ring-emerald-500'
                } else if (isSelected && !opt.isCorrect) {
                  cardStyles =
                    'border-rose-500 bg-rose-950/40 text-rose-200 ring-1 ring-rose-500 animate-shake'
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => !isSubmitted && setSelectedOptionId(opt.id)}
                  className={`p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer ${cardStyles}`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 uppercase transition-colors ${
                      isSelected
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 border border-slate-700 text-slate-400'
                    }`}
                  >
                    {opt.id.split('-')[1]}
                  </span>
                  <div className="flex-1 text-sm font-medium leading-relaxed">
                    {opt.text}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Feedback Banner on submit */}
          {isSubmitted && (
            <div
              className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                isCorrect
                  ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                  : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
                <div className="text-xs sm:text-sm">
                  {isCorrect ? (
                    <span>
                      <strong className="text-emerald-300">Exact Cognitive Match! </strong>
                      You recognized that distant ancestor bounds must be propagated down the subtree.
                    </span>
                  ) : (
                    <span>
                      <strong className="text-rose-300">Misconception Triggered: </strong>
                      NEXSTEP detected the Local vs Global invariant blind spot.
                    </span>
                  )}
                </div>
              </div>

              {!isCorrect && (
                <Button
                  variant="glow"
                  size="sm"
                  leftIcon={Sparkles}
                  onClick={() => setShowAiModal(true)}
                  className="shrink-0"
                >
                  View AI Adaptive Explanation
                </Button>
              )}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              {isSubmitted
                ? isCorrect
                  ? 'Ready for the next invariant test'
                  : 'Inspect the AI explanation to shift your mental model'
                : 'Select an option and submit'}
            </span>

            {!isSubmitted ? (
              <Button
                variant="primary"
                size="md"
                disabled={!selectedOptionId}
                onClick={handleSubmitAnswer}
              >
                Submit Answer
              </Button>
            ) : isCorrect ? (
              <Button
                variant="glow"
                size="md"
                rightIcon={ArrowRight}
                onClick={handleNextOrFinish}
              >
                {currentIndex < questions.length - 1 ? 'Next Question' : 'Complete Drill'}
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="md"
                leftIcon={RotateCcw}
                onClick={handleRetryAfterExplanation}
              >
                Retry Question
              </Button>
            )}
          </div>
        </Card>
      )}

      {/* Adaptive AI Explanation Modal */}
      <AIExplanationModal
        isOpen={showAiModal}
        onClose={() => setShowAiModal(false)}
        onRetry={handleRetryAfterExplanation}
        explanation={currentQ.aiAdaptiveExplanation}
        problemTitle={currentQ.title}
      />
    </div>
  )
}

