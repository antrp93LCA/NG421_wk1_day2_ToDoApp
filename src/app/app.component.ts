import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;
  

  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [{ title: 'Install Angular CLI', isDone: false, date: new Date()}];
  }

   // adds a todo to our list
   addTodo():void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false
    });
    
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }

  // a method to delete an item
  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }


}





