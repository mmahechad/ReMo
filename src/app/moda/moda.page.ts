import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-moda',
  templateUrl: './moda.page.html',
  styleUrls: ['./moda.page.scss'],
})
export class ModaPage implements OnInit {
  @Input() data: any;
  
  constructor(private modalctrl: ModalController) { }

  ngOnInit() {
  }

  closeModal(){
    this.modalctrl.dismiss();
  }
}
