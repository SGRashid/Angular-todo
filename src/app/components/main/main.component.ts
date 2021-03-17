import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../../dataTypes';

const todoList: ITodoItem[] = [
  { title: 'Купить хлеб', description: 'Сходи в магазин и купи хлеб', date: new Date() },
  { title: 'Купить хлеб', description: 'Сходи в магазин и купи хлеб', date: new Date() },
  { title: 'Купить хлеб', description: 'Сходи в магазин и купи хлеб', date: new Date() },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todoList = todoList;

  constructor() { }

  ngOnInit(): void {
  }

}
