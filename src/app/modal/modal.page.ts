import { TodoService } from './../services/todo.service';
import { Todo } from './../models/Todo';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  todo = {} as Todo;
  todos: Todo[];

  constructor(public modalController: ModalController,
    public todoService: TodoService) { }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss({
      dismissed: true
    });
  }

  save(form: NgForm){
    this.todoService.save(this.todo).subscribe(()=>{
      this.cleanForm(form);
      this.dismiss();
    });
  }

  cleanForm(form: NgForm){
    form.resetForm();
    this.todo = {} as Todo;
  }

}
