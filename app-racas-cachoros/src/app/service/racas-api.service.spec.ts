import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RacasApiService } from './racas-api.service';
import { Raca } from '../model/raca.model';

describe('RacasApiService', () => {
  let service: RacasApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RacasApiService],
    });
    service = TestBed.inject(RacasApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar uma lista de raças (getRacas)', () => {
    const dummyRacas: Raca[] = [
      { id: 1, name: 'Akita', temperament: 'Docile', weight: { imperial: '65 - 115', metric: '29 - 52' }, height: { imperial: '24 - 28', metric: '61 - 71' }, life_span: '10 - 14 years' },
      { id: 2, name: 'Beagle', temperament: 'Curious', weight: { imperial: '20 - 25', metric: '9 - 11' }, height: { imperial: '13 - 15', metric: '33 - 38' }, life_span: '12 - 15 years' }
    ];

    service.getRacas().subscribe(racas => {
      expect(racas.length).toBe(2);
      expect(racas).toEqual(dummyRacas);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRacas);
  });

  it('deve retornar os detalhes de uma raça pelo ID (getRacaById)', () => {
    const dummyRaca: Raca = { id: 1, name: 'Akita', temperament: 'Docile', weight: { imperial: '65 - 115', metric: '29 - 52' }, height: { imperial: '24 - 28', metric: '61 - 71' }, life_span: '10 - 14 years' };

    service.getRacaById(1).subscribe(raca => {
      expect(raca).toEqual(dummyRaca);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyRaca);
  });
});
