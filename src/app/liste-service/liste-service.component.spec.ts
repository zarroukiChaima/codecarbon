import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeServiceComponent } from './liste-service.component';

describe('ListeServiceComponent', () => {
  let component: ListeServiceComponent;
  let fixture: ComponentFixture<ListeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
