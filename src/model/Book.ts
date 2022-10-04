import { Item } from "../model/Item";
import { ImplBook, isAudioType } from "../Impl/ImplBook";

export class Book extends Item implements ImplBook {
  title: string;
  isAudio: isAudioType = false;

  constructor(name: string, price: number, title: string) {
    super(name, price);
    this.title = title;
  }

  // public getTitle(): string {
  //   return this.title;
  // }

  // public setTitle(title: string): void {
  //   this.title = title;
  // }

  // public getIsAudio(): isAudioType {
  //   return this.isAudio;
  // }

  // public setIsAudio(isAudio: isAudioType): void {
  //   this.isAudio = isAudio;
  // }
}

// const myBook: Book = new Book(1, "2", 3, "4");
