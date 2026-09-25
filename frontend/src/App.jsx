import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LearningProvider } from './context/LearningContext'
import { AppLayout } from './components/layout/AppLayout'

// Pages
import { LandingPage } from './pages/LandingPage'
import { LoginPage } from './pages/LoginPage'
import { SignupPage } from './pages/SignupPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { DiagnosticPage } from './pages/DiagnosticPage'
import { AssessmentResultPage } from './pages/AssessmentResultPage'
import { DashboardPage } from './pages/DashboardPage'
import { RoadmapPage } from './pages/RoadmapPage'
import { TopicLearningPage } from './pages/TopicLearningPage'
import { PracticePage } from './pages/PracticePage'
import { ProfilePage } from './pages/ProfilePage'
import { ExamIntelligencePage } from './pages/ExamIntelligencePage'

export default function App() {
  return (
    <LearningProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/onboarding" element={<OnboardingPage />} />
            <Route path="/diagnostic" element={<DiagnosticPage />} />
            <Route path="/assessment-result" element={<AssessmentResultPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/learn" element={<TopicLearningPage />} />
            <Route path="/learn/:topicId" element={<TopicLearningPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/exam-intelligence" element={<ExamIntelligencePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LearningProvider>
  )
}
