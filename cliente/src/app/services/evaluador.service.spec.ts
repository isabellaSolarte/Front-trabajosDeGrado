import { TestBed } from '@angular/core/testing';
import { EvaluadorService } from './evaluador.service';

describe('EvaluadorService', () => {
    let service: EvaluadorService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(EvaluadorService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
  