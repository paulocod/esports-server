export class Ad {
  public readonly id: string
  public name: string
  public yearsPlaying: number
  public discord: string
  public weekDays: string
  public hoursStart: number
  public hourEnd: number
  public useVoiceChannel: boolean
  public createdAt?: Date
  public gameId?: string

  constructor(props: Omit<Ad, 'id'>, id?: string) {
    Object.assign(this, props)
  }
}