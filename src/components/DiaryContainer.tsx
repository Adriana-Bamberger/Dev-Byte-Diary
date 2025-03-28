import React, { useEffect } from 'react'
import { DiaryEntry } from '../types'
import DiaryCard from './DiaryCard'
import EmptyState from './EmptyState'
import { useIsMobile } from '../hooks/use-mobile'
import { DiaryContainerProps } from '../types'

export default function DiaryContainer({
  entries,
  scrollContainerRef,
}: DiaryContainerProps) {
  const isMobile = useIsMobile()

  // Sort entries by date (newest first) for mobile view
  const sortedEntries = [...entries].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  // otherwise for desktop
  const displayEntries = isMobile ? sortedEntries : entries

  useEffect(() => {
    console.log('Original entries:', entries.length)
    console.log('Sorted entries:', sortedEntries.length)
    console.log('Display entries:', displayEntries.length)
    console.log('Is Mobile:', isMobile)
  }, [entries, sortedEntries, displayEntries, isMobile])

  return (
    <div
      ref={scrollContainerRef}
      className={`
        ${
          isMobile
            ? 'flex flex-col items-center px-4 py-3 space-y-6'
            : 'flex items-start overflow-x-auto pb-6 pt-2 px-4 md:px-12 gap-4 min-w-full'
        }
      `}
      style={{ scrollBehavior: 'smooth' }}
    >
      {displayEntries.length === 0 ? (
        <EmptyState />
      ) : (
        displayEntries.map((entry, index) => (
          <DiaryCard
            key={entry.id}
            entry={entry}
            index={index}
            isMobile={isMobile}
          />
        ))
      )}
    </div>
  )
}
