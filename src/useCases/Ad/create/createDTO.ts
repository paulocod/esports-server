export interface CreateAdDTO {
  gameId: string
  name: string
  yearsPlaying: number
  discord: string
  weekDays: string
  hoursStart: number
  hourEnd: number
  useVoiceChannel: boolean
}