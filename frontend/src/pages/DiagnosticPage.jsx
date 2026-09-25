import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import { QuestionCard } from '../components/assessment/QuestionCard'
import { Button } from '../components/ui/Button'
import { ProgressBar } from '../components/ui/ProgressBar'
import { LoadingState } from '../components/ui/StateView'
import { useLearning } from '../context/LearningContext'
import { apiService } from '../services/api'

export function DiagnosticPage() {
  const navigate = useNavigate()
  const { recordDiagnosticCompletion } = useLearning()
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    async function loadQuestions() {
      try {
        const qList = await apiService.getDiagnosticQuestions()
        setQuestions(qList)
      } finally {
        setIsLoading(false)
      }
    }
    loadQuestions()
  }, [])

  const handleSelectOption = (optionId) => {
    const currentQ = questions[currentIndex]
    setAnswers((prev) => ({
      ...prev,
      [currentQ.id]: optionId,
    }))
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      const result = await apiService.submitDiagnosticAnswers(answers)
      recordDiagnosticCompletion(result)
      navigate('/assessment-result')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isLoading) {
    return <LoadingState title="Loading Adaptive Diagnostic..." subtitle="Calibrating question sequence based on your target goal" />
  }

  if (isSubmitting) {
    return (
      <LoadingState
        title="Synthesizing Cognitive Diagnostic Profile..."
        subtitle="Analyzing cognitive invariant patterns, recursion misconceptions, and space complexity gaps"
      />
    )
  }

  const currentQ = questions[currentIndex]
  const isAnswered = Boolean(answers[currentQ?.id])
  const answeredCount = Object.keys(answers).length
  const isLastQuestion = currentIndex === questions.length - 1

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-6">
      {/* Top Header & Progress */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="font-semibold text-slate-200">Adaptive Diagnostic Mode</span>
          </div>
          <span>
            Answered {answeredCount} of {questions.length}
          </span>
        </div>

        <ProgressBar
          value={answeredCount}
          max={questions.length}
          color="indigo"
          size="sm"
        />
      </div>

      {/* Main Question Card */}
      <QuestionCard
        question={currentQ}
        currentIndex={currentIndex}
        totalQuestions={questions.length}
        selectedOptionId={answers[currentQ?.id]}
        onSelectOption={handleSelectOption}
      />

      {/* Bottom Nav Controls */}
      <div className="flex items-center justify-between pt-2">
        <Button
          variant="secondary"
          size="md"
          leftIcon={ArrowLeft}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>

        {isLastQuestion ? (
          <Button
            variant="glow"
            size="md"
            rightIcon={CheckCircle2}
            disabled={!isAnswered}
            onClick={handleSubmit}
            className="px-6"
          >
            Submit Diagnostic & Analyze
          </Button>
        ) : (
          <Button
            variant="primary"
            size="md"
            rightIcon={ArrowRight}
            disabled={!isAnswered}
            onClick={handleNext}
          >
            Next Question
          </Button>
        )}
      </div>
    </div>
  )
}

