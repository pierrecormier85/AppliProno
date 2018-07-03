import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoHallOfFameComponent } from './prono-hall-of-fame.component';

describe('PronoHallOfFameComponent', () => {
  let component: PronoHallOfFameComponent;
  let fixture: ComponentFixture<PronoHallOfFameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoHallOfFameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoHallOfFameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
