import React from 'react'
import { AssessmentSummary } from '../components/assessment/AssessmentSummary'
import { useLearning } from '../context/LearningContext'
import { INITIAL_ASSESSMENT_RESULT } from '../data/mockData'

export function AssessmentResultPage() {
  const { assessmentResult } = useLearning()
  const result = assessmentResult || INITIAL_ASSESSMENT_RESULT

  return (
    <div className="max-w-4xl mx-auto py-6 space-y-6">
      <AssessmentSummary result={result} />
    </div>
  )
}

