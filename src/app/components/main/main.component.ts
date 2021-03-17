import { Component, OnInit } from '@angular/core';
import { ITodoItem } from '../../dataTypes';
import { TodoListService } from '../../services/todo-list.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  todoList: ITodoItem[];

  constructor(public todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

}
