import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { DateService } from '../../services/date.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ITodoItem } from 'src/app/dataTypes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-item-page',
  templateUrl: './todo-item-page.component.html',
  styleUrls: ['./todo-item-page.component.scss']
})
export class TodoItemPageComponent implements OnInit, OnDestroy {

  item: ITodoItem;
  itemReservedCopy: ITodoItem;
  changes = false;
  editMode = false;
  createMode = false;

  private _sub = new Subscription();

  constructor(
    public todoListService: TodoListService,
    public date: DateService,
    private _route: ActivatedRoute,
    private _angularRouter: Router,
  ) {}

  ngOnInit(): void {
    const routeSub = this._route.params
      .subscribe(res => {
        if (res.id === 'new') {
          this.activateCreateMod();
          return;
        }

        const id = Number(res.id);
        this.item = this.todoListService.getTodoItem(id);
        this.itemReservedCopy = Object.assign({}, this.item);
      });

      this._sub.add(routeSub);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  activateCreateMod() {

    console.log(22222);
    const dateNow = new Date();
    
    this.item = {
      id: dateNow.getTime(),
      date: dateNow,
      isComplited: false,
      title: '',
      description: ''
    };

    this.editMode = true;
    this.createMode = true;
    this.changes = true;
  }

  changeStatus(): void {
    this.item.isComplited = !this.item.isComplited;
    this.changes = true;
  }

  setDate(date: any) {
    this.item.date = new Date(date);
    this.changes = true;
    console.log(this.item.date);
  }

  saveChanges(): void {
    this.changes = false;
    this.editMode = false;
    this.itemReservedCopy = Object.assign({}, this.item);
    this.todoListService.changeTodoItem(this.item);
  }

  cancelChanges(): void {
    this.item = Object.assign({}, this.itemReservedCopy);
    this.changes = false;
    this.editMode = false;
  }

  toEditMode(): void {
    this.changes = true;
    this.editMode = true;
  }

  closeTask() {
    this.todoListService.deleteToDoItem(this.item);
    this._navigateToMain();
  }

  createNewItem(item: ITodoItem): void {
    if (!item.title || !item.description) {
      alert('Заполните все поля');
      return;
    }

    this.todoListService.addNewItem(item);
    this._navigateToMain();
  }

  private _navigateToMain = (): void => void this._angularRouter.navigate(['']);

}
