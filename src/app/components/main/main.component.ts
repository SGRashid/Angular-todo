import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../../dataTypes';
import { TodoListService } from '../../services/todo-list.service';
import { DateService } from '../../services/date.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
 


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todoList: ITodoItem[];

  private _now = new Date();
  private _threeDaysAfter = new Date();

  constructor(
    public todoListService: TodoListService,
    public date: DateService,
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
    this._threeDaysAfter.setDate(this._threeDaysAfter.getDate() + 3);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
    this.todoListService.setTodoList(this.todoList);
  }

  getDateCssClass(date: Date): string {
    
    if (date.getTime() < this._now.getTime()) return 'red';
    if (date.getTime() < this._threeDaysAfter.getTime()) return 'yellow'
    
    return '';
  } 
}
