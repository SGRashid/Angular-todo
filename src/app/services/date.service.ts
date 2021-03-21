import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  private numFormat = (num: number): string => num > 9 ? `${num}` : `0${num}`;

  ru = (date: Date): string => date.toLocaleString('ru-Ru').substr(0, 10);

  forInput(date: Date): string {

    const year = date.getFullYear();
    const month = this.numFormat(date.getMonth() + 1);
    const dayOfMonth = this.numFormat(date.getDate());

    return `${year}-${month}-${dayOfMonth}`;
  }

}
