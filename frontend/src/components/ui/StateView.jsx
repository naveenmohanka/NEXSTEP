import React from 'react'
import { Sparkles, AlertTriangle, Inbox, RefreshCw } from 'lucide-react'
import { Button } from './Button'

export function LoadingState({
  title = 'AI Analyzing Knowledge State...',
  subtitle = 'NEXSTEP neural engine is mapping optimal cognitive pathways',
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-12 text-center rounded-2xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-md ${className}`}>
      <div className="relative mb-5">
        <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 animate-pulse">
          <Sparkles className="w-7 h-7 animate-spin" style={{ animationDuration: '4s' }} />
        </div>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
      </div>
      <h4 className="text-base font-semibold text-slate-100 mb-1.5">{title}</h4>
      <p className="text-sm text-slate-400 max-w-sm">{subtitle}</p>
    </div>
  )
}

export function EmptyState({
  title = 'No Data Found',
  description = 'You have not completed any modules in this section yet.',
  actionLabel,
  onAction,
  icon: Icon = Inbox,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-10 text-center rounded-2xl border border-dashed border-slate-800 bg-slate-900/30 ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-400 mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h4 className="text-base font-semibold text-slate-200 mb-1">{title}</h4>
      <p className="text-sm text-slate-400 max-w-sm mb-5">{description}</p>
      {actionLabel && onAction && (
        <Button variant="secondary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'Failed to synchronize with learning state. Please try again.',
  onRetry,
  className = '',
}) {
  return (
    <div className={`flex flex-col items-center justify-center p-8 text-center rounded-2xl border border-rose-500/30 bg-rose-950/20 ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-4">
        <AlertTriangle className="w-6 h-6" />
      </div>
      <h4 className="text-base font-semibold text-rose-200 mb-1">{title}</h4>
      <p className="text-sm text-rose-300/80 max-w-sm mb-5">{message}</p>
      {onRetry && (
        <Button variant="danger" size="sm" leftIcon={RefreshCw} onClick={onRetry}>
          Retry Connection
        </Button>
      )}
    </div>
  )
}

