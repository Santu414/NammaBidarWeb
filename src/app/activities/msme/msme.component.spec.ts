import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsmeComponent } from './msme.component';

describe('MsmeComponent', () => {
  let component: MsmeComponent;
  let fixture: ComponentFixture<MsmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
