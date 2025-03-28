// format like "Sunday The 26th of March 2023"
export function formatDate(dateString: string): string {
  const date = new Date(dateString)

  const day = date.toLocaleDateString('en-US', { weekday: 'long' })
  const month = date.toLocaleDateString('en-US', { month: 'long' })
  const year = date.getFullYear()

  const dayOfMonth = date.getDate()
  const suffix = getDaySuffix(dayOfMonth)

  return `${day} The ${dayOfMonth}${suffix} of ${month} ${year}`
}

function getDaySuffix(day: number): string {
  if (day > 3 && day < 21) return 'th'

  switch (day % 10) {
    case 1:
      return 'st'
    case 2:
      return 'nd'
    case 3:
      return 'rd'
    default:
      return 'th'
  }
}
