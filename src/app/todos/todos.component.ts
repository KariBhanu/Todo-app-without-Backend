import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../models/Todos';
import { DataserviceService } from '../services/dataservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit{

  todos:any;
  inputTodo:string = "";
  constructor(private _dataservice: DataserviceService,private _modalService: NgbModal) { }

  
  ngOnInit(){
    this.todos=this._dataservice.getAlltodos(); 
  }
  retriveTodos(){
    // this._dataservice.getAlltodos()
    // .subscribe( (data:Todo) => {
    //   this.todos = data;
    // },
    // error =>{
    //   console.log(error);
    // })
    this._dataservice.getAlltodos();
  }
  toggleDone(id:number){
    this.todos.map((v:any,i:any)=>{
      if(i===id) {
        if(v.completed === "0"){v.completed = "1"}
        else if(v.completed === "1"){v.completed = "0"}
      }
      return v;
    })
  }
  deleteTodo(id:number){
    //this.todos = this.todos.filter((v,i)=>i!=id);
    this._dataservice.deleteTodo(id);
  }
  addTodo(){
    // let length = Object.keys(this.todos).length + 1;
    // this.todo.id = length.toString();

    // //let todo = new Todo(this.length.toString(),this.inputTodo,completed.toString());
    
    // this._dataservice.addTodo(this.todo)
    //     .subscribe(
    //       response =>console.log('Success!',response),
    //       error => console.log('error',error)
    //     );
    //  this.inputTodo = "";
    this._dataservice.addTodo(this.inputTodo);
    this.inputTodo = "";
  }
  
  open(todo:Todo) {
    const index = this.todos.indexOf(todo);
    const modalRef = this._modalService.open(EditModalComponent);
    modalRef.componentInstance.todo = todo;
    modalRef.componentInstance.index = index;
  }

}
