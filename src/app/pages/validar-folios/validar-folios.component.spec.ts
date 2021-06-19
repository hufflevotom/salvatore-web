import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFoliosComponent } from './validar-folios.component';

describe('ValidarFoliosComponent', () => {
  let component: ValidarFoliosComponent;
  let fixture: ComponentFixture<ValidarFoliosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidarFoliosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidarFoliosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
