export class Game {
  public readonly id: string
  public title: string
  public bannerUrl: string
  public adId?: string[]

  constructor(props: Omit<Game, 'id'>, id?:string) {
    Object.assign(this, props)
  }
}