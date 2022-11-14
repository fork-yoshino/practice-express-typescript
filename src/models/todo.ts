export class Todo {
  constructor(private readonly _id: string, private readonly _text: string) {}

  get id(): string {
    return this._id;
  }
}
