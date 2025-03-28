import { useState, useEffect } from 'react'
import { DiaryEntry } from '../types'
import { FileService } from '../services/fileService'

export default function useEntries() {
  const [entries, setEntries] = useState<DiaryEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fileService = FileService()

    fileService
      .getEntries()
      .then((data) => {
        console.log('Loaded entries from fileService:', data.length)
        setEntries(data)
      })
      .catch((error) => {
        console.error('Failed to load entries:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return { entries, isLoading }
}
