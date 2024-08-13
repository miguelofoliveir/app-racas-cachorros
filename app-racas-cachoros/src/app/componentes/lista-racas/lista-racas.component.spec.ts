import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ListaRacasComponent } from './lista-racas.component';
import { RacasApiService } from '../../service/racas-api.service';
import { of } from 'rxjs';
import { Raca } from '../../model/raca.model';

describe('ListaRacasComponent', () => {
  let component: ListaRacasComponent;
  let fixture: ComponentFixture<ListaRacasComponent>;
  let service: RacasApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        ListaRacasComponent,
      ],
      providers: [RacasApiService]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaRacasComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(RacasApiService);

    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar a lista de raças na inicialização', () => {
    const dummyRacas: Raca[] = [
      { id: 1, name: 'Akita', temperament: 'Docile', weight: { imperial: '65 - 115', metric: '29 - 52' }, height: { imperial: '24 - 28', metric: '61 - 71' }, life_span: '10 - 14 years' }
    ];

    spyOn(service, 'getRacas').and.returnValue(of(dummyRacas));

    component.ngOnInit();

    expect(component.racas.length).toBe(1);
    expect(component.racas).toEqual(dummyRacas);
  });

  it('deve abrir o diálogo de detalhes ao clicar em uma raça', () => {
    spyOn(component, 'abrirDetalhes');
    const dummyRaca: Raca = { id: 1, name: 'Akita', temperament: 'Docile', weight: { imperial: '65 - 115', metric: '29 - 52' }, height: { imperial: '24 - 28', metric: '61 - 71' }, life_span: '10 - 14 years' };

    component.abrirDetalhes(dummyRaca);

    expect(component.abrirDetalhes).toHaveBeenCalledWith(dummyRaca);
  });
});
