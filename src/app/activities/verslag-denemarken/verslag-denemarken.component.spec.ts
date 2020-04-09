import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerslagDenemarkenComponent } from './verslag-denemarken.component';

describe('VerslagDenemarkenComponent', () => {
  let component: VerslagDenemarkenComponent;
  let fixture: ComponentFixture<VerslagDenemarkenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerslagDenemarkenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerslagDenemarkenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
