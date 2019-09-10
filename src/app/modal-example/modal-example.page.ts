import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.page.html',
  styleUrls: ['./modal-example.page.scss'],
})
export class ModalExamplePage implements OnInit {

  // constructor() { }
  constructor(public modalController: ModalController) {

  }

  async presentModal(parameter) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {value: parameter}
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
