/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EquipoListComponent } from './equipo-list.component';
import { faker } from '@faker-js/faker';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';




describe('EquipoListComponent', () => {
  let component: EquipoListComponent;
  let fixture: ComponentFixture<EquipoListComponent>;
  let httpMock: HttpTestingController;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipoListComponent ],
      providers: [EquipoService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 10; i++) {
      const equipo = new Equipo(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.equipos.push(equipo);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should have 10 <div.col.mb-2> elements', () => {
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(10)
  });

  it('should have 10 <card.p-2> elements', () => {
    expect(debug.queryAll(By.css('div.card.p-2'))).toHaveSize(10)
  });

  it('should have 10 <img> elements', () => {
    expect(debug.queryAll(By.css('img'))).toHaveSize(10)
  });

  it('should have 10 <div.card-body> elements', () => {
    expect(debug.queryAll(By.css('div.card-body'))).toHaveSize(10)
  });

  it('should have the corresponding src to the equipo image and alt to the equipo marca', () => {
    debug.queryAll(By.css('img')).forEach((img, i)=>{
      expect(img.attributes['src']).toEqual(
        component.equipos[i].fotografia_ref)
 
      expect(img.attributes['alt']).toEqual(
        component.equipos[i].marca)
    })
  });

  it('should have h5 tag with the equipo.marca', () => {
    debug.queryAll(By.css('h5.card-title')).forEach((h5, i)=>{
      expect(h5.nativeElement.textContent).toContain(component.equipos[i].marca)
    });
  });

  it('should have 9 <div.col.mb-2> elements and the deleted equipo should not exist', () => {
    const equipo = component.equipos.pop()!;
    fixture.detectChanges();
    expect(debug.queryAll(By.css('div.col.mb-2'))).toHaveSize(9)
 
    debug.queryAll(By.css('div.col.mb-2')).forEach((selector, i)=>{
      expect(selector.nativeElement.textContent).not.toContain(equipo.marca);
    });
  });


});
