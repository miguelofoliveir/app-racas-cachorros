import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ListaRacasComponent } from './app/componentes/lista-racas/lista-racas.component';
import { DetalheRacaComponent } from './app/componentes/detalhe-raca/detalhe-raca.component';

const routes: Routes = [
  { path: '', redirectTo: 'lista-racas', pathMatch: 'full' },  
  { path: 'lista-racas', loadComponent: () => import('./app/componentes/lista-racas/lista-racas.component').then(m => m.ListaRacasComponent) },
  { path: 'detalhe-raca/:id', loadComponent: () => import('./app/componentes/detalhe-raca/detalhe-raca.component').then(m => m.DetalheRacaComponent) },
  { path: '**', redirectTo: 'lista-racas', pathMatch: 'full' }  
];

bootstrapApplication(ListaRacasComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
  ]
}).catch(err => console.error(err));
