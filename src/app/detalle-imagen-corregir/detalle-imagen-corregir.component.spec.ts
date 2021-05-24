import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleImagenCorregirComponent } from './detalle-imagen-corregir.component';

describe('DetalleImagenCorregirComponent', () => {
  let component: DetalleImagenCorregirComponent;
  let fixture: ComponentFixture<DetalleImagenCorregirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleImagenCorregirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleImagenCorregirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
