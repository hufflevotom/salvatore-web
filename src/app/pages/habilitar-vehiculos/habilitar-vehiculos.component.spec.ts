import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilitarVehiculosComponent } from './habilitar-vehiculos.component';

describe('HabilitarVehiculosComponent', () => {
  let component: HabilitarVehiculosComponent;
  let fixture: ComponentFixture<HabilitarVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilitarVehiculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilitarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
