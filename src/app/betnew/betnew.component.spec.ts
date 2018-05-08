import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetnewComponent } from './betnew.component';

describe('BetnewComponent', () => {
  let component: BetnewComponent;
  let fixture: ComponentFixture<BetnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
