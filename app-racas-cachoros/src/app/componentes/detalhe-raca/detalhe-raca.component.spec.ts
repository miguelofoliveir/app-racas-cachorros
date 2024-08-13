import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetalheRacaComponent } from './detalhe-raca.component';
import { Raca } from '../../model/raca.model';
import { By } from '@angular/platform-browser';

describe('DetalheRacaComponent', () => {
  let component: DetalheRacaComponent;
  let fixture: ComponentFixture<DetalheRacaComponent>;
  const mockRaca: Raca = {
    id: 1,
    name: 'Akita',
    temperament: 'Docile, Alert, Responsive',
    weight: { imperial: '65 - 115', metric: '29 - 52' },
    height: { imperial: '24 - 28', metric: '61 - 71' },
    life_span: '10 - 14 years',
    bred_for: 'Hunting bears',
    breed_group: 'Working',
    origin: 'Japan',
    reference_image_id: 'abc123',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCardModule, DetalheRacaComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: mockRaca }],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o nome da raça corretamente', () => {
    const titleElement = fixture.debugElement.query(By.css('mat-card-title')).nativeElement;
    expect(titleElement.textContent).toContain('Akita');
  });

  it('deve exibir a origem da raça corretamente', () => {
    const subtitleElement = fixture.debugElement.query(By.css('mat-card-subtitle')).nativeElement;
    expect(subtitleElement.textContent).toContain('Japan');
  });

  it('deve exibir os detalhes da raça corretamente', () => {
    const temperamentElement = fixture.debugElement.query(By.css('p:nth-child(1)')).nativeElement;
    const weightElement = fixture.debugElement.query(By.css('p:nth-child(2)')).nativeElement;
    const heightElement = fixture.debugElement.query(By.css('p:nth-child(3)')).nativeElement;
    const lifeSpanElement = fixture.debugElement.query(By.css('p:nth-child(4)')).nativeElement;
    const bredForElement = fixture.debugElement.query(By.css('p:nth-child(5)')).nativeElement;
    const breedGroupElement = fixture.debugElement.query(By.css('p:nth-child(6)')).nativeElement;

    expect(temperamentElement.textContent).toContain('Temperamento: Docile, Alert, Responsive');
    expect(weightElement.textContent).toContain('Peso: 29 - 52 kg');
    expect(heightElement.textContent).toContain('Altura: 61 - 71 cm');
    expect(lifeSpanElement.textContent).toContain('Expectativa de vida: 10 - 14 years');
    expect(bredForElement.textContent).toContain('Criado para: Hunting bears');
    expect(breedGroupElement.textContent).toContain('Grupo da raça: Working');
  });

  it('deve exibir a imagem correta da raça', () => {
    const imageElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(imageElement.src).toContain('https://cdn2.thedogapi.com/images/abc123.jpg');
  });
});
