import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinigameComponent } from './minigame.component';

describe('MinigameComponent', () => {
  let component: MinigameComponent;
  let fixture: ComponentFixture<MinigameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinigameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinigameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
