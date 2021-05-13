import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Todo } from '../models/Todos';
import { DataserviceService } from '../services/dataservice.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @Input() todo!:Todo;
  @Input() index!:number;
  constructor(public activeModal: NgbActiveModal,private _dataservice:DataserviceService) {}
  public content!:string;
  ngOnInit(): void {
    this.content = this.todo.content;
  }
  updateTodo(){
    const updatedTodo = {...this.todo};
    updatedTodo.content = this.content;
    this._dataservice.updateTodo(updatedTodo,this.index);
  }
}
