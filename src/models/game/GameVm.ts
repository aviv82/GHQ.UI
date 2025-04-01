export class GameVm {
  id: number = 0;
  title: string = "";
  image: string | null;
  type: number = 0;
  dmId: number = 0;

  constructor(
    id: number,
    title: string,
    image: string | null,
    type: number,
    dmId: number
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.type = type;
    this.dmId = dmId;
  }
}
