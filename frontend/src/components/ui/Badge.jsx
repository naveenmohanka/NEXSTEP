import React from 'react'

export function Badge({
  children,
  variant = 'indigo',
  size = 'md',
  dot = false,
  className = '',
}) {
  const variants = {
    indigo: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/25',
    rose: 'bg-rose-500/10 text-rose-400 border-rose-500/25',
    sky: 'bg-sky-500/10 text-sky-400 border-sky-500/25',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
    slate: 'bg-slate-800 text-slate-300 border-slate-700',
  }

  const dotColors = {
    indigo: 'bg-indigo-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    rose: 'bg-rose-400',
    sky: 'bg-sky-400',
    purple: 'bg-purple-400',
    slate: 'bg-slate-400',
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-medium',
    lg: 'text-sm px-3 py-1.5 font-semibold',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border ${variants[variant] || variants.indigo} ${
        sizes[size] || sizes.md
      } ${className}`}
    >
      {dot && (
        <span className={`w-1.5 h-1.5 rounded-full ${dotColors[variant] || dotColors.indigo} animate-pulse`} />
      )}
      {children}
    </span>
  )
}

