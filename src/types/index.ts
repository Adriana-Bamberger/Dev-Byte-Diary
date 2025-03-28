export interface DiaryHeaderProps {
  title: string
}

export interface DiaryCardProps {
  entry: DiaryEntry
  index: number
}

export interface DiaryEntry {
  id: string
  title: string
  content?: string
  date: string
  description: string
  bullets?: string[]
}

export interface DiaryNavProps {
  scrollLeft: () => void
  scrollRight: () => void
}

export interface DiaryContainerProps {
  entries: DiaryEntry[]
  scrollContainerRef: React.RefObject<HTMLDivElement>
}
