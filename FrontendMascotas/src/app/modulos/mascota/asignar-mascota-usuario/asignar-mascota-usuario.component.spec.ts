import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarMascotaUsuarioComponent } from './asignar-mascota-usuario.component';

describe('AsignarMascotaUsuarioComponent', () => {
  let component: AsignarMascotaUsuarioComponent;
  let fixture: ComponentFixture<AsignarMascotaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarMascotaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarMascotaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
