import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolariComponent } from './solari.component';

describe('SolariComponent', () => {
  let component: SolariComponent;
  let fixture: ComponentFixture<SolariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
