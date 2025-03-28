// store in localStorage for now
// TODO: later use a database/proper backend
import { DiaryEntry } from '../types'
import { sampleEntries } from '../data/diaryEntries'

export function FileService() {
  function getEntries(): Promise<DiaryEntry[]> {
    return new Promise((resolve) => {
      console.log('Using sample entries, count:', sampleEntries.length)

      localStorage.setItem('diaryEntries', JSON.stringify(sampleEntries))

      resolve(sampleEntries)
    })
  }

  return {
    getEntries,
  }
}
