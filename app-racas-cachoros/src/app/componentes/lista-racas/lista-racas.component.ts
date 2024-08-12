import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-racas',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, RouterModule],
  templateUrl: './lista-racas.component.html',
  styleUrls: ['./lista-racas.component.scss'],
})
export class ListaRacasComponent {}
