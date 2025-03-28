//so we I can use the left and right arrow keys to scroll the carousel

import { useEffect } from 'react'
export default function useKeyboardNavigation(
  scrollLeft: () => void,
  scrollRight: () => void
) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        scrollLeft()
      } else if (e.key === 'ArrowRight') {
        scrollRight()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollLeft, scrollRight])
}
