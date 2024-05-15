/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoDetailComponent } from './equipo-detail.component';

import { faker } from '@faker-js/faker';

import { EquipoDetail } from '../equipo-detail';

describe('EquipoDetailComponent', () => {
  let component: EquipoDetailComponent;
  let fixture: ComponentFixture<EquipoDetailComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ EquipoDetailComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
   fixture = TestBed.createComponent(EquipoDetailComponent);
   component = fixture.componentInstance;

  
   component.equipoDetail= new EquipoDetail(
    faker.number.int(),
      faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
     );

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should have a p.h3.p-3 element with equipoDetail.marca', () => {
  const element: HTMLElement = debug.query(By.css('p.h3.p-3')).nativeElement;
  expect(element.textContent).toContain(component.equipoDetail.marca);
});

it('should have an img element with src= equipoDetail.fotografia_ref', () => {
  expect(debug.query(By.css('img')).attributes['src']).toEqual(
    component.equipoDetail.fotografia_ref
  );
});

it('should have an img element with alt= equipoDetail.marca', () => {
  expect(debug.query(By.css('img')).attributes['alt']).toEqual(
    component.equipoDetail.marca
  );
});

it('should have one dd tag for component.equipoDetail.id', () => {
  const allDt : DebugElement[] = debug.queryAll(By.css('dt'));
  const node = allDt.find((value) => {
    return value.nativeElement.textContent == 'Id';
  });
  expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.id);
});

it('should have one dd tag for component.equipoDetail.descripcion', () => {
  const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
  const node = allDt.find((value) => {
    return value.nativeElement.textContent == 'Descripción';
  });
  expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.descripcion);
});


it('should have one dd tag for component.equipoDetail.precio_alquiler', () => {
  const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
  const node = allDt.find((value) => {
    return value.nativeElement.textContent == 'Precio Alquiler';
  });
  expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.precio_alquiler);
});

it('should have one dd tag for component.equipoDetail.fotografia_ref', () => {
  const allDt : DebugElement[]= debug.queryAll(By.css('dt'));
  const node = allDt.find((value) => {
    return value.nativeElement.textContent == 'Fotografia de referencia';
  });
  expect(node?.nativeElement.nextSibling.textContent).toContain(component.equipoDetail.fotografia_ref);
});
});