import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarImagenComponent } from './revisar-imagen.component';

describe('RevisarImagenComponent', () => {
  let component: RevisarImagenComponent;
  let fixture: ComponentFixture<RevisarImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevisarImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevisarImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
