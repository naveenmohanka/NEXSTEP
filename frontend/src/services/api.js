/**
 * NEXSTEP - API / Data Service Layer
 * Abstracts backend communication. Currently resolves simulated async responses
 * using local mock data and localStorage state persistence.
 * Can be cleanly swapped with real fetch/axios endpoints once backend is finalized.
 */

import {
  INITIAL_USER,
  ONBOARDING_GOALS,
  DIAGNOSTIC_QUESTIONS,
  INITIAL_ASSESSMENT_RESULT,
  ROADMAP_NODES,
  TOPIC_CONTENT,
  PRACTICE_QUESTIONS,
  EXAM_INTELLIGENCE_METRICS,
} from '../data/mockData'

const STORAGE_KEYS = {
  USER: 'nexstep_user_session',
  ROADMAP: 'nexstep_roadmap_nodes',
  ASSESSMENT: 'nexstep_assessment_result',
}

const delay = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms))

export const apiService = {
  // Authentication & Session
  async login(email, password) {
    await delay(500)
    if (!email) throw new Error('Email is required')
    const user = { ...INITIAL_USER, email }
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
    return user
  },

  async signup(name, email, password) {
    await delay(500)
    if (!name || !email) throw new Error('Name and email are required')
    const user = { ...INITIAL_USER, name, email }
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
    return user
  },

  async getCurrentUser() {
    await delay(150)
    const stored = localStorage.getItem(STORAGE_KEYS.USER)
    return stored ? JSON.parse(stored) : INITIAL_USER
  },

  async saveOnboarding(goalId, timeline, hours) {
    await delay(400)
    const current = await this.getCurrentUser()
    const selectedGoal = ONBOARDING_GOALS.find((g) => g.id === goalId) || ONBOARDING_GOALS[0]
    const updated = {
      ...current,
      targetExam: selectedGoal.title,
      dailyGoalMinutes: hours ? hours * 60 : 45,
      targetDate: timeline || '2026-11-15',
    }
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(updated))
    return updated
  },

  // Diagnostic Assessment
  async getDiagnosticQuestions() {
    await delay(300)
    return DIAGNOSTIC_QUESTIONS
  },

  async submitDiagnosticAnswers(answers) {
    await delay(700)
    // Calculate real score from answers
    let correctCount = 0
    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      const selected = answers[q.id]
      const correctOpt = q.options.find((opt) => opt.isCorrect)?.id
      if (selected === correctOpt) {
        correctCount++
      }
    })

    const scorePercentage = Math.round((correctCount / DIAGNOSTIC_QUESTIONS.length) * 100)
    const result = {
      ...INITIAL_ASSESSMENT_RESULT,
      score: scorePercentage,
      correctCount,
      totalQuestions: DIAGNOSTIC_QUESTIONS.length,
      aiInsight:
        scorePercentage >= 75
          ? 'Exceptional grasp of core invariants! NEXSTEP recommends skipping elementary recursions and jumping straight into tree optimization and graph dependency graphs.'
          : 'Detected foundational gaps in recursion frame lifecycles and space bounds. NEXSTEP has structured your personalized roadmap to solidify tree traversals before tackling complex graphs.',
    }
    localStorage.setItem(STORAGE_KEYS.ASSESSMENT, JSON.stringify(result))
    return result
  },

  // Roadmap & Progression
  async getRoadmap() {
    await delay(250)
    const stored = localStorage.getItem(STORAGE_KEYS.ROADMAP)
    return stored ? JSON.parse(stored) : ROADMAP_NODES
  },

  async completeTopicNode(nodeId) {
    await delay(300)
    const currentRoadmap = await this.getRoadmap()
    const updated = currentRoadmap.map((node, index) => {
      if (node.id === nodeId) {
        return { ...node, status: 'completed', mastery: 100 }
      }
      // Unlock next node
      const prevNode = currentRoadmap[index - 1]
      if (prevNode && prevNode.id === nodeId && node.status === 'locked') {
        return { ...node, status: 'in_progress', currentFocus: true, mastery: 15 }
      }
      return node
    })
    localStorage.setItem(STORAGE_KEYS.ROADMAP, JSON.stringify(updated))
    return updated
  },

  // Topic Content
  async getTopicDetail(topicId) {
    await delay(200)
    return TOPIC_CONTENT
  },

  // Practice & Adaptive AI
  async getPracticeQuestions(topicId) {
    await delay(300)
    return PRACTICE_QUESTIONS
  },

  // Exam Intelligence
  async getExamMetrics() {
    await delay(350)
    return EXAM_INTELLIGENCE_METRICS
  },
}

