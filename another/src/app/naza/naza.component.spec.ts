import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NazaComponent } from './naza.component';

describe('NazaComponent', () => {
  let component: NazaComponent;
  let fixture: ComponentFixture<NazaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NazaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
