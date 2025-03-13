import { ComponentFixture, TestBed } from '@angular/core/testing';

import { conciertosPasadosComponent } from './conciertospasados.component';

describe('conciertosPasadosComponent', () => {
  let component: conciertosPasadosComponent;
  let fixture: ComponentFixture<conciertosPasadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [conciertosPasadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(conciertosPasadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
