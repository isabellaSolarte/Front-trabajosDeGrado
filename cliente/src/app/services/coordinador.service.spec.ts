import { TestBed } from '@angular/core/testing';
import { CoordinadorService } from './coordinador.service';

describe('CoordinadorService', () => {
  let service: CoordinadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
