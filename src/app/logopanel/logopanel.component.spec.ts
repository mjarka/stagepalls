import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopanelComponent } from './logopanel.component';

describe('LogopanelComponent', () => {
  let component: LogopanelComponent;
  let fixture: ComponentFixture<LogopanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogopanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogopanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
