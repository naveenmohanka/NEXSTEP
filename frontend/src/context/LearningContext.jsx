import { createContext, useContext, useState, useEffect } from 'react'
import { apiService } from '../services/api'
import { INITIAL_USER, ROADMAP_NODES, INITIAL_ASSESSMENT_RESULT } from '../data/mockData'

const LearningContext = createContext(null)

export function LearningProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER)
  const [roadmap, setRoadmap] = useState(ROADMAP_NODES)
  const [assessmentResult, setAssessmentResult] = useState(INITIAL_ASSESSMENT_RESULT)
  const [activeTopicId, setActiveTopicId] = useState('node-2')
  const [toastMessage, setToastMessage] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadInitialData() {
      try {
        const u = await apiService.getCurrentUser()
        const r = await apiService.getRoadmap()
        setUser(u)
        setRoadmap(r)
      } catch (err) {
        console.error('Failed to load initial context', err)
      }
    }
    loadInitialData()
  }, [])

  const showNotification = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 4000)
  }

  const markTopicCompleted = async (nodeId) => {
    setIsLoading(true)
    try {
      const updated = await apiService.completeTopicNode(nodeId)
      setRoadmap(updated)
      setUser((prev) => ({
        ...prev,
        overallMastery: Math.min(100, prev.overallMastery + 12),
        readinessScore: Math.min(100, prev.readinessScore + 6),
      }))
      showNotification('Topic Mastered! Next adaptive node unlocked on your roadmap.')
    } finally {
      setIsLoading(false)
    }
  }

  const recordDiagnosticCompletion = (result) => {
    setAssessmentResult(result)
    showNotification('Diagnostic Analyzed! Personalized Roadmap has been calibrated.')
  }

  return (
    <LearningContext.Provider
      value={{
        user,
        setUser,
        roadmap,
        setRoadmap,
        assessmentResult,
        setAssessmentResult,
        activeTopicId,
        setActiveTopicId,
        toastMessage,
        showNotification,
        markTopicCompleted,
        recordDiagnosticCompletion,
        isLoading,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 border border-indigo-500/40 text-slate-100 px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md transition-all animate-bounce">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}
    </LearningContext.Provider>
  )
}

export function useLearning() {
  const context = useContext(LearningContext)
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider')
  }
  return context
}

