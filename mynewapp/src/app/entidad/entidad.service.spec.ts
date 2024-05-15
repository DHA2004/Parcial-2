import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { EntidadComponent } from './entidad.component';
import { EntidadService } from './entidad.service';
import { Entidad } from './entidad';

describe('EntidadListComponent', () => {
 let component: EntidadComponent;
 let fixture: ComponentFixture<EntidadComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ EntidadComponent ],
     providers: [ EntidadService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(EntidadComponent);
   component = fixture.componentInstance;
   component.entidades = [
     new Entidad(faker.lorem.sentence(), faker.person.fullName(), faker.number.int())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.entidades[0].name)
 });
 
});