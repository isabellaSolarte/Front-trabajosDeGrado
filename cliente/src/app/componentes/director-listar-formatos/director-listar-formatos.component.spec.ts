import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorListarFormatosComponent } from './director-listar-formatos.component';

describe('DirectorListarFormatosComponent', () => {
  let component: DirectorListarFormatosComponent;
  let fixture: ComponentFixture<DirectorListarFormatosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorListarFormatosComponent]
    });
    fixture = TestBed.createComponent(DirectorListarFormatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
