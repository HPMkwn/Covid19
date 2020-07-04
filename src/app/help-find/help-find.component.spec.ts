import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpFindComponent } from './help-find.component';

describe('HelpFindComponent', () => {
  let component: HelpFindComponent;
  let fixture: ComponentFixture<HelpFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
