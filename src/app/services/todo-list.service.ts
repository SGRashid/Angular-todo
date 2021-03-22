import { Injectable } from '@angular/core';
import { ITodoItem } from '../dataTypes';
import { todoList } from '../todo-config';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private _todoList: ITodoItem[] = todoList;

  constructor() { }

  public getTodoList(): ITodoItem[] {
    return this._todoList;
  }

  public getTodoItem(id: number) {
    const oldItem = this._todoList.find(todo => todo.id === id);
    return Object.assign({}, oldItem);
  }

  public changeTodoItem(item: ITodoItem) {
    this._todoList = this._todoList.map(elem => elem.id === item.id ? item : elem);
  }

  public deleteToDoItem(item) {
    if (!item.isComplited) return;
    this._todoList = this._todoList.filter(elem => elem.id !== item.id);
    console.log(42);
  }

  public addNewItem(item: ITodoItem): void {
    this._todoList.push(item);
  }

  public setTodoList(list: ITodoItem[]): void {
    this._todoList = list;
  }
  
}
