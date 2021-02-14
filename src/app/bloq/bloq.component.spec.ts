import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqComponent } from './bloq.component';

describe('BloqComponent', () => {
  let component: BloqComponent;
  let fixture: ComponentFixture<BloqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
