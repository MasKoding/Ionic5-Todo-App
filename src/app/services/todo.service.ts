import { HttpClient } from '@angular/common/http';
import { Todo } from './../models/Todo';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends ApiService<Todo> {

constructor(http: HttpClient){
  super(
    http,
    environment.uRL,
    environment.endPointTodos  );
}
}
