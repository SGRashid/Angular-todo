import { Injectable } from '@angular/core';
import { ITodoItem } from '../dataTypes';
import { todoList } from '../todo-config';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todoList: ITodoItem[] = localStorage.todoList ? this._getFromLocalStorage() : todoList;

  constructor() { }

  private _getFromLocalStorage() {
    return JSON.parse(localStorage.todoList).map(todo => ({ ...todo, date: new Date(todo.date) }) );
  }

  private _addToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(this._todoList));
  }

  public getTodoList(): ITodoItem[] {
    return this._todoList;
  }

  public getTodoItem(id: number) {
    const oldItem = this._todoList.find(todo => todo.id === id);
    return Object.assign({}, oldItem);
  }

  public changeTodoItem(item: ITodoItem) {
    this._todoList = this._todoList.map(elem => elem.id === item.id ? item : elem);
    this._addToLocalStorage();
  }

  public deleteToDoItem(item) {
    if (!item.isComplited) return;
    this._todoList = this._todoList.filter(elem => elem.id !== item.id);
    this._addToLocalStorage();
  }

  public addNewItem(item: ITodoItem): void {
    this._todoList.push(item);
    this._addToLocalStorage();
  }

  public setTodoList(list: ITodoItem[]): void {
    this._todoList = list;
    this._addToLocalStorage();
  }
  
}
