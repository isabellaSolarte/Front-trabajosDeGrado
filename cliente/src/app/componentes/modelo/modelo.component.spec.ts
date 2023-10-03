import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloComponent } from './modelo.component';

describe('ModeloComponent', () => {
  let component: ModeloComponent;
  let fixture: ComponentFixture<ModeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeloComponent]
    });
    fixture = TestBed.createComponent(ModeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
