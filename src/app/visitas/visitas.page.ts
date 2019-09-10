import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModaPage } from '../moda/moda.page';

@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {
data: any;
  constructor(public modalCtrl: ModalController){ }

  async ShowModal(data: any ) {

    console.log(data);

    const modal = await this.modalCtrl.create({
      component: ModaPage,
      componentProps: {
        data
      },
    });
    await modal.present();
  }

  ngOnInit() {
    this.data =
      {
        img: 'assets/1cancelar.PNG',
        data: {
          titulo: 'Esto es una prueba',
          imagen: 'assets/1cancelar.PNG',
          descripcion: 'susanita',
        }   
  };
}
}
