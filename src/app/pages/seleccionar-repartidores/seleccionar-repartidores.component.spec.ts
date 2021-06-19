import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionarRepartidoresComponent } from './seleccionar-repartidores.component';

describe('SeleccionarRepartidoresComponent', () => {
  let component: SeleccionarRepartidoresComponent;
  let fixture: ComponentFixture<SeleccionarRepartidoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionarRepartidoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
