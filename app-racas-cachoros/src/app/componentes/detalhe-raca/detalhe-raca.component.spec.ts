import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRacaComponent } from './detalhe-raca.component';

describe('DetalheRacaComponent', () => {
  let component: DetalheRacaComponent;
  let fixture: ComponentFixture<DetalheRacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheRacaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheRacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
