import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Raca } from '../../model/raca.model';
@Component({
  selector: 'app-detalhe-raca',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './detalhe-raca.component.html',
  styleUrls: ['./detalhe-raca.component.scss']
})
export class DetalheRacaComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public raca: Raca) {}
}
