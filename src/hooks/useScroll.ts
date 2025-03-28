import { useRef } from 'react'

export default function useScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  function scrollLeft() {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = window.innerWidth * 0.3
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  function scrollRight() {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = window.innerWidth * 0.3
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return {
    scrollContainerRef,
    scrollLeft,
    scrollRight,
  }
}
