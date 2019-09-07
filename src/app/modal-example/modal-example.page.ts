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

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
