import React, { useEffect } from 'react'
import DiaryHeader from '../components/DiaryHeader'
import DiaryContainer from '../components/DiaryContainer'
import LoadingSpinner from '../components/LoadingSpinner'
import useEntries from '../hooks/useEntries'
import useScroll from '../hooks/useScroll'
import useKeyboardNavigation from '../hooks/useKeyboardNavigation'

export default function Index() {
  const { entries, isLoading } = useEntries()
  const { scrollContainerRef, scrollLeft, scrollRight } = useScroll()

  useKeyboardNavigation(scrollLeft, scrollRight)

  useEffect(() => {
    console.log('Index component entries:', entries.length)
  }, [entries])

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden">
      <DiaryHeader title="Dev Byte Diary" />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <DiaryContainer
          entries={entries}
          scrollContainerRef={scrollContainerRef}
        />
      )}
    </div>
  )
}
