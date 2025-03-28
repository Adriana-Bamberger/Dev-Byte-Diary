import React from 'react'
import { BookOpen } from 'lucide-react'
import { DiaryHeaderProps } from '../types'

export default function DiaryHeader({ title }: DiaryHeaderProps) {
  return (
    <div className="p-2">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-wood/90 rounded-lg shadow-md">
        <div className="w-12 h-12 bg-paper-light rounded-full flex items-center justify-center">
          <BookOpen size={28} className="text-wood" />
        </div>
        <h1 className="text-xl font-cormorant font-bold text-paper-light md:text-2xl">
          {title}
        </h1>
      </div>
    </div>
  )
}
