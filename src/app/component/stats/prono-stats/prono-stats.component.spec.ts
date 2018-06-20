import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoStatsComponent } from './prono-stats.component';

describe('PronoStatsComponent', () => {
  let component: PronoStatsComponent;
  let fixture: ComponentFixture<PronoStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
