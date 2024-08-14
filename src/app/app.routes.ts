import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'lista-racas', pathMatch: 'full' },
  {
    path: 'lista-racas',
    loadComponent: () =>
      import('./componentes/lista-racas/lista-racas.component').then(
        (m) => m.ListaRacasComponent
      ),
  },
  {
    path: 'detalhe-raca/:id',
    loadComponent: () =>
      import('./componentes/detalhe-raca/detalhe-raca.component').then(
        (m) => m.DetalheRacaComponent
      ),
  },
  { path: '**', redirectTo: 'lista-racas', pathMatch: 'full' },
];
