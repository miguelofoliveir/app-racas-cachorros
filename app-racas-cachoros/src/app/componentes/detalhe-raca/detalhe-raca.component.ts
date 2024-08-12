import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-detalhe-raca',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './detalhe-raca.component.html',
  styleUrls: ['./detalhe-raca.component.scss']
})
export class DetalheRacaComponent {}
