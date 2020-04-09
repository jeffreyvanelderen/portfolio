import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerslagYappaComponent } from './verslag-yappa.component';

describe('VerslagYappaComponent', () => {
  let component: VerslagYappaComponent;
  let fixture: ComponentFixture<VerslagYappaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerslagYappaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerslagYappaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
