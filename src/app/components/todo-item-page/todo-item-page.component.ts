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
        console.log(this.item);
      });

      this._sub.add(routeSub);
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

}
