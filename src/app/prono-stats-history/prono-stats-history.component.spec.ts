import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoStatsHistoryComponent } from './prono-stats-history.component';

describe('PronoStatsComponent', () => {
  let component: PronoStatsHistoryComponent;
  let fixture: ComponentFixture<PronoStatsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoStatsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoStatsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
