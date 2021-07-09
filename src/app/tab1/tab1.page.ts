import { TabsPage } from './../tabs/tabs.page';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  tasks: Array<string> = ['Read Manga','Watch Anime','Learn Something'];

  constructor() {}

  status(title: string){
    const index =this.tasks.indexOf(title);
    if(index >-1){
      this.tasks.splice(index,1);
    }

  }
}

