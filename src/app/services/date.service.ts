import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  ru = (date: Date): string => date.toLocaleString('ru-Ru').substr(0, 10);

}
