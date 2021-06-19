import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarArchivoComponent } from './importar-archivo.component';

describe('ImportarArchivoComponent', () => {
  let component: ImportarArchivoComponent;
  let fixture: ComponentFixture<ImportarArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportarArchivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportarArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
