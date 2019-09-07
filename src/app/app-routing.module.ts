import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  // { path: '', loadChildren: './loging/loging.module#LogingPageModule' },
  // { path: 'mauro', loadChildren: './mauro/mauro.module#MauroPageModule' },
  // { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'superheroes', loadChildren: './superheroes/superheroes.module#SuperheroesPageModule' },  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'modal-example', loadChildren: './modal-example/modal-example.module#ModalExamplePageModule' }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
