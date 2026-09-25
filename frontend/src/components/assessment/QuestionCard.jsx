import React from 'react'
import { HelpCircle, Code2 } from 'lucide-react'
import { Card, CardHeader, CardContent } from '../ui/Card'
import { Badge } from '../ui/Badge'

export function QuestionCard({
  question,
  currentIndex,
  totalQuestions,
  selectedOptionId,
  onSelectOption,
  showExplanation = false,
}) {
  if (!question) return null

  const difficultyColors = {
    Easy: 'emerald',
    Medium: 'indigo',
    'Medium-Hard': 'amber',
    Hard: 'rose',
  }

  return (
    <Card className="border-slate-800 bg-slate-900/90 shadow-2xl">
      <CardHeader className="border-b border-slate-800/80 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <Badge variant={difficultyColors[question.difficulty] || 'indigo'}>
              {question.difficulty}
            </Badge>
          </div>
          <span className="text-xs text-indigo-300 bg-indigo-950/60 border border-indigo-800/60 px-2.5 py-1 rounded-full font-medium">
            {question.category}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-semibold text-white mt-1 leading-snug">
          {question.question}
        </h3>

        {/* Why NEXSTEP asks this */}
        <div className="mt-3 flex items-start gap-2 text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
          <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <span>
            <strong className="text-cyan-300">Why NEXSTEP asks this:</strong> {question.whyWeAsk}
          </span>
        </div>
      </CardHeader>

      <CardContent className="pt-5 space-y-4">
        {/* Code snippet if present */}
        {question.codeSnippet && (
          <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#070a12] p-4 text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto shadow-inner">
            <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-slate-800/60 text-slate-500 text-[11px]">
              <Code2 className="w-3.5 h-3.5" />
              <span>Reference Implementation</span>
            </div>
            <pre className="text-indigo-200/90">
              <code>{question.codeSnippet}</code>
            </pre>
          </div>
        )}

        {/* Multiple Choice Options */}
        <div className="space-y-2.5 pt-1">
          {question.options.map((opt) => {
            const isSelected = selectedOptionId === opt.id
            const isCorrect = opt.isCorrect

            let optionStyle =
              'border-slate-800 bg-slate-900/50 hover:bg-slate-800/60 hover:border-slate-700 text-slate-200'

            if (isSelected) {
              optionStyle =
                'border-indigo-500 bg-indigo-950/50 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500'
            }

            if (showExplanation) {
              if (isCorrect) {
                optionStyle = 'border-emerald-500 bg-emerald-950/40 text-emerald-200 ring-1 ring-emerald-500'
              } else if (isSelected && !isCorrect) {
                optionStyle = 'border-rose-500 bg-rose-950/40 text-rose-200 ring-1 ring-rose-500'
              }
            }

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => !showExplanation && onSelectOption(opt.id)}
                disabled={showExplanation}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer disabled:cursor-default ${optionStyle}`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 uppercase transition-colors ${
                    isSelected
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-800 border border-slate-700 text-slate-400'
                  }`}
                >
                  {opt.id}
                </span>
                <span className="text-sm font-medium leading-relaxed pt-0.5">{opt.text}</span>
              </button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

