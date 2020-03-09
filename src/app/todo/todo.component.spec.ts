import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { FormsModule } from '@angular/forms';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should have an element with a class "todo-list"', () => {
    expect(fixture.nativeElement.querySelector(".todo-list")).toBeTruthy();
  });

  it('should have an input to add task description', () => {
    expect(fixture.nativeElement.querySelector(".todo-input input")).toBeTruthy();
  });

  it('should have a button with the label "Add"', () => {
    const button = fixture.nativeElement.querySelector(".todo-input button");
    expect(button.innerText).toBe("Add");
  });

  it('should have add a task when button is clicked', () => {
    const button = fixture.nativeElement.querySelector(".todo-input button");
    button.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector(".task")).toBeTruthy();
  });

  it('should have a <ul> tag for the list of tasks', () => {
    fixture.nativeElement.querySelector(".todo-input button").click();
    fixture.detectChanges();
    const ul = fixture.nativeElement.querySelector("ul");
    expect(ul).toBeTruthy();
  });

  it('<li> elements should have a "complete task" button', () => {
    fixture.nativeElement.querySelector(".todo-input button").click();
    fixture.detectChanges();
    const completeTask = fixture.nativeElement.querySelector("ul li").querySelector(".complete-task");
    expect(completeTask).toBeTruthy();
  });

  it('<li> elements should have a "delete task" button', () => {
    fixture.nativeElement.querySelector(".todo-input button").click();
    fixture.detectChanges();
    const deleteTask = fixture.nativeElement.querySelector("ul li").querySelector(".delete-task");
    expect(deleteTask).toBeTruthy();
  });

});
