import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotPresenterComponent } from './dot-presenter.component';

describe('DotPresenterComponent', () => {
  let component: DotPresenterComponent;
  let fixture: ComponentFixture<DotPresenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotPresenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
