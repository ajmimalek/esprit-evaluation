import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireensignantComponent } from './formulaireensignant.component';

describe('FormulaireensignantComponent', () => {
  let component: FormulaireensignantComponent;
  let fixture: ComponentFixture<FormulaireensignantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireensignantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireensignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
