import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeleteComponent } from './help-delete.component';

describe('HelpDeleteComponent', () => {
  let component: HelpDeleteComponent;
  let fixture: ComponentFixture<HelpDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
