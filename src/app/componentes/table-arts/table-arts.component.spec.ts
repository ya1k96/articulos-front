import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableArtsComponent } from './table-arts.component';

describe('TableArtsComponent', () => {
  let component: TableArtsComponent;
  let fixture: ComponentFixture<TableArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
