import React from 'react'

export function ProgressBar({
  value = 0,
  max = 100,
  label = '',
  showValue = false,
  color = 'indigo',
  size = 'md',
  className = '',
}) {
  const percentage = Math.min(100, Math.max(0, Math.round((value / max) * 100)))

  const gradients = {
    indigo: 'from-indigo-500 to-cyan-400',
    emerald: 'from-emerald-500 to-teal-400',
    amber: 'from-amber-500 to-orange-400',
    rose: 'from-rose-500 to-pink-500',
    purple: 'from-purple-500 to-indigo-500',
  }

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center text-xs font-medium text-slate-400 mb-1.5">
          {label && <span>{label}</span>}
          {showValue && <span className="text-slate-200 font-semibold">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-slate-800 rounded-full overflow-hidden ${heights[size] || heights.md} border border-slate-700/50`}>
        <div
          className={`h-full bg-gradient-to-r ${gradients[color] || gradients.indigo} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}

