import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraternitiesComponent } from './fraternities.component';

describe('FraternitiesComponent', () => {
  let component: FraternitiesComponent;
  let fixture: ComponentFixture<FraternitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraternitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraternitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
