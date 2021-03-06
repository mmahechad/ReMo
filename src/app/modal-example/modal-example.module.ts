import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalExamplePage } from './modal-example.page';
import { ModalPage } from '../modal/modal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalExamplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalExamplePage, ModalPage],
  entryComponents: [ModalPage]
})
export class ModalExamplePageModule {}
