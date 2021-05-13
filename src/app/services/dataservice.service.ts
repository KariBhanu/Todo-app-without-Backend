import { Injectable } from '@angular/core';
import { Todo } from '../models/Todos';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  public todos:Todo[] = [];
  public url="http://localhost:3000/";
  constructor(private _http:HttpClient) { }

  getAlltodos(){
   //return this._http.get<Todo>(this.url + "getTodos");
   return this.todos;
  }
  addTodo(todo:any){
    //return this._http.post<any>("http://localhost:3000/addTodo",todo);
    this.todos.push(new Todo(todo));

  }
  deleteTodo(index:number){
    this.todos.splice(index,1);
  }
  updateTodo(todo:Todo,index:number){
    this.todos.map((v,i) =>{
      if(i === index){
        v.content = todo.content;
      }
    })
  }
}
