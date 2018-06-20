import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronoRankingMoyenneComponent } from './prono-ranking-moyenne.component';

describe('PronoRankingMoyenneComponent', () => {
  let component: PronoRankingMoyenneComponent;
  let fixture: ComponentFixture<PronoRankingMoyenneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronoRankingMoyenneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronoRankingMoyenneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
