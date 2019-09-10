import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  valor;
  // constructor() { }
  constructor(public modalController: ModalController, public navParams: NavParams) { 
    this.valor = this.navParams.get('value');
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalController.dismiss();
  }

}
