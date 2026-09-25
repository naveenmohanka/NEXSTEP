import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Compass,
  Flame,
  Brain,
  Map,
  BookOpen,
  Target,
  BarChart3,
  User,
  Sparkles,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'
import { useLearning } from '../../context/LearningContext'
import { Button } from '../ui/Button'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useLearning()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isPublicPage = ['/', '/login', '/signup'].includes(location.pathname)

  const navLinks = [
    { label: 'Dashboard', path: '/dashboard', icon: Target },
    { label: 'Roadmap', path: '/roadmap', icon: Map },
    { label: 'Learn Topic', path: '/learn/node-2', icon: BookOpen },
    { label: 'Practice Drill', path: '/practice', icon: Brain },
    { label: 'Exam Intelligence', path: '/exam-intelligence', icon: BarChart3 },
    { label: 'Profile', path: '/profile', icon: User },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Compass className="w-5 h-5 text-indigo-400 group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              NEXSTEP
              <span className="text-[10px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                AI
              </span>
            </span>
          </div>
        </Link>

        {/* Center Navigation for App */}
        {!isPublicPage && (
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1 rounded-xl border border-slate-800/80">
            {navLinks.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname.startsWith(item.path)
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        )}

        {/* Right side stats & CTA */}
        <div className="flex items-center gap-3">
          {isPublicPage ? (
            <div className="flex items-center gap-3">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="primary" size="sm" rightIcon={ChevronRight}>
                  Get Started Free
                </Button>
              </Link>
            </div>
          ) : (
            <>
              {/* Daily Streak */}
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                <Flame className="w-4 h-4 fill-amber-400 text-amber-400 animate-pulse" />
                <span>{user.streakDays} Day Streak</span>
              </div>

              {/* Mastery Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
                <span className="text-slate-400">Mastery:</span>
                <span className="text-indigo-400 font-bold">{user.overallMastery}%</span>
              </div>

              {/* Diagnostic Button */}
              <Link to="/diagnostic">
                <Button variant="glow" size="sm" leftIcon={Sparkles}>
                  <span className="hidden sm:inline">Diagnostic</span>
                </Button>
              </Link>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && !isPublicPage && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {navLinks.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname.startsWith(item.path)
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4 text-indigo-400" />
                {item.label}
              </Link>
            )
          })}
        </div>
      )}
    </header>
  )
}

