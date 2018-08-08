import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DVOrgaComponent } from './dv-orga.component';

describe('PronoHallOfFameComponent', () => {
  let component: DVOrgaComponent;
  let fixture: ComponentFixture<DVOrgaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DVOrgaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DVOrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
