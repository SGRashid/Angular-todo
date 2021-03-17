import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemPageComponent } from './todo-item-page.component';

describe('TodoItemPageComponent', () => {
  let component: TodoItemPageComponent;
  let fixture: ComponentFixture<TodoItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
