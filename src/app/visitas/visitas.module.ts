import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitasPage } from './visitas.page';
import { ModaPage } from '../moda/moda.page';
import { ModaPageModule } from '../moda/moda.module';

const routes: Routes = [
  {
    path: '',
    component: VisitasPage
  }
];

@NgModule({
  entryComponents: [
    ModaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModaPageModule,
    RouterModule.forChild(routes),
  ],
  declarations: [VisitasPage]
})
export class VisitasPageModule {}
