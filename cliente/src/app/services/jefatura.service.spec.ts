import { TestBed } from '@angular/core/testing';
import { JefaturaService } from './jefatura.service';

describe('JefaturaService', () => {
  let service: JefaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JefaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
