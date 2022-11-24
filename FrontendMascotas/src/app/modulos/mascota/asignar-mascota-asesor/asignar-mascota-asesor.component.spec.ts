import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMascotaAsesorComponent } from './asignar-mascota-asesor.component';

describe('AsignarMascotaAsesorComponent', () => {
  let component: AsignarMascotaAsesorComponent;
  let fixture: ComponentFixture<AsignarMascotaAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarMascotaAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarMascotaAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
