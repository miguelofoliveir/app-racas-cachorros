import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { RouterModule } from '@angular/router';
import { RacasApiService } from '../../service/racas-api.service';
import { Raca } from '../../model/raca.model';
import { DetalheRacaComponent } from '../detalhe-raca/detalhe-raca.component';

@Component({
  selector: 'app-lista-racas',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RouterModule,
  ],
  templateUrl: './lista-racas.component.html',
  styleUrls: ['./lista-racas.component.scss'],
})
export class ListaRacasComponent implements OnInit {
  racas: Raca[] = [];
  paginaAtual: Raca[] = [];
  totalRacas = 0;
  pageSize = 18;
  isLoading = true;

  constructor(
    private racasApiService: RacasApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.racasApiService.getRacas().subscribe((data: Raca[]) => {
      this.racas = data;
      this.totalRacas = data.length;
      this.isLoading = false;
      this.mudarPagina({ pageIndex: 0, pageSize: this.pageSize } as PageEvent);
    });
  }

  mudarPagina(event: PageEvent): void {
    this.isLoading = true;

    this.loadPageData(event.pageIndex, event.pageSize).then(() => {
      this.isLoading = false;
    });
  }

  abrirDetalhes(raca: Raca): void {
    this.dialog.open(DetalheRacaComponent, {
      width: '400px',
      data: raca,
    });
  }

  private loadPageData(pageIndex: number, pageSize: number): Promise<void> {
    return new Promise<void>((resolve) => {
      const startIndex = pageIndex * pageSize;
      const endIndex = startIndex + pageSize;
      this.paginaAtual = this.racas.slice(startIndex, endIndex);
      resolve();
    });
  }
}
