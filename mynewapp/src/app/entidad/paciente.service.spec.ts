import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { PacienteComponent } from './paciente.component';
import { PacienteService } from './paciente.service';
import { Paciente } from './paciente';

describe('PacienteListComponent', () => {
 let component: PacienteComponent;
 let fixture: ComponentFixture<PacienteComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ PacienteComponent ],
     providers: [ PacienteService ]
   })
   .compileComponents();
 })); 


 beforeEach(() => {
  fixture = TestBed.createComponent(PacienteComponent);
  component = fixture.componentInstance;
});


});
