import { ModalPage } from './../modal/modal.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  constructor(public modalContoller: ModalController) {}

  async presentModel(){
    const modal = await this.modalContoller.create({
      component:ModalPage,
      cssClass:'my-custom-class'

    });
    return await modal.present();
  }

}
