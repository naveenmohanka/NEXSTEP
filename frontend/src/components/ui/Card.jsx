import React from 'react'

export function Card({
  children,
  className = '',
  hoverEffect = false,
  highlight = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl bg-slate-900/80 border ${
        highlight
          ? 'border-indigo-500/50 shadow-xl shadow-indigo-500/10'
          : 'border-slate-800/80 hover:border-slate-700/80'
      } backdrop-blur-sm transition-all duration-200 ${
        hoverEffect ? 'hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/50 cursor-pointer' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return <div className={`p-5 sm:p-6 pb-2 sm:pb-3 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-lg font-semibold text-slate-100 tracking-tight flex items-center gap-2 ${className}`}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = '' }) {
  return <p className={`text-sm text-slate-400 mt-1 leading-relaxed ${className}`}>{children}</p>
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-5 sm:p-6 pt-2 sm:pt-3 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-5 sm:p-6 pt-3 border-t border-slate-800/60 flex items-center justify-between ${className}`}>
      {children}
    </div>
  )
}

