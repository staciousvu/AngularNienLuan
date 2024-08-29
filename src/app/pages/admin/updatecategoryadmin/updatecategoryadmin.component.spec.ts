import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategoryadminComponent } from './updatecategoryadmin.component';

describe('UpdatecategoryadminComponent', () => {
  let component: UpdatecategoryadminComponent;
  let fixture: ComponentFixture<UpdatecategoryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecategoryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecategoryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
