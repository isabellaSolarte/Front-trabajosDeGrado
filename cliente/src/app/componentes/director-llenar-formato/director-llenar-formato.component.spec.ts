import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorLlenarFormatoComponent } from './director-llenar-formato.component';

describe('DirectorLlenarFormatoComponent', () => {
  let component: DirectorLlenarFormatoComponent;
  let fixture: ComponentFixture<DirectorLlenarFormatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectorLlenarFormatoComponent]
    });
    fixture = TestBed.createComponent(DirectorLlenarFormatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
