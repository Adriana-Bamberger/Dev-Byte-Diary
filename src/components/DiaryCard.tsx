import React from 'react'
import { formatDate } from '../utils/dateUtils'
import { ExtendedDiaryCardProps } from '../types'

export default function DiaryCard({
  entry,
  index,
  isMobile,
}: ExtendedDiaryCardProps) {
  const formattedDate = formatDate(entry.date)

  return (
    <div
      className={`
        ${
          isMobile
            ? 'w-full max-w-[800px]'
            : 'min-w-[350px] max-w-[450px] flex-shrink-0 self-start'
        }
        p-6 bg-paper-light border border-paper-dark rounded-md 
        flex flex-col shadow-md transition-all duration-300
      `}
    >
      <div className="mb-4">
        <h2 className="text-xl font-cormorant font-semibold text-wood-dark">
          {entry.title}
        </h2>
        <div className="mt-1 text-sm font-cormorant font-medium italic text-gray-600">
          {entry.description}
        </div>
      </div>

      {entry.content && (
        <p className="mb-4 text-sm font-cormorant font-medium text-gray-700 leading-relaxed">
          {entry.content}
        </p>
      )}

      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="space-y-2 list-disc list-inside">
          {entry.bullets.map((bullet, idx) => (
            <li
              key={idx}
              className="text-sm font-cormorant font-medium text-gray-800"
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
