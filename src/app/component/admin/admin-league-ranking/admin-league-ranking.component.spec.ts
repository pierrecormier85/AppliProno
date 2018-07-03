import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeagueRankingComponent } from './admin-league-ranking.component';

describe('AdminLeagueRankingComponent', () => {
  let component: AdminLeagueRankingComponent;
  let fixture: ComponentFixture<AdminLeagueRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLeagueRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLeagueRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
