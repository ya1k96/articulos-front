import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorregirComponent } from './corregir.component';

describe('CorregirComponent', () => {
  let component: CorregirComponent;
  let fixture: ComponentFixture<CorregirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorregirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorregirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
