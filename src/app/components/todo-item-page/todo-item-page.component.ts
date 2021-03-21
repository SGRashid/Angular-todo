import { Component, OnDestroy, OnInit } from '@angular/core';
import { TodoListService } from '../../services/todo-list.service';
import { DateService } from '../../services/date.service';
import { ActivatedRoute} from '@angular/router';
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

  private _sub = new Subscription();

  constructor(
    public todoListService: TodoListService,
    public date: DateService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const routeSub = this.route.params
      .subscribe(res => {
        const id = Number(res.id);
        this.item = this.todoListService.getTodoItem(id);
        this.itemReservedCopy = Object.assign({}, this.item);
      });

      this._sub.add(routeSub);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  changeStatus(): void {
    this.item.isComplited = !this.item.isComplited;
    this.changes = true;
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
  }

}
