import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'audio',
    loadChildren: () => import('./audio/audio.module').then( m => m.AudioPageModule)
  },
  {
    path: 'color',
    loadChildren: () => import('./color/color.module').then( m => m.ColorPageModule)
  },
  {
    path: 'animales',
    loadChildren: () => import('./page/animales/animales.module').then( m => m.AnimalesPageModule)
  },
  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
