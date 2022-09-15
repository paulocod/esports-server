export function minutesToHours(minutesAmount: string) {
  const hours = Math.floor(Number(minutesAmount) / 60)
  const minutes = Number(minutesAmount) % 60

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}