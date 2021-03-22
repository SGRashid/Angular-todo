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

  constructor(
    public todoListService: TodoListService,
    public date: DateService,
  ) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.todoList, event.previousIndex, event.currentIndex);
  }

}
