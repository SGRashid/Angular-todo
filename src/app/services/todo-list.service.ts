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
  
}
