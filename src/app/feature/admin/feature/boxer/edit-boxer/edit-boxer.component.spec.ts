import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBoxerComponent } from './edit-boxer.component';

describe('EditBoxerComponent', () => {
  let component: EditBoxerComponent;
  let fixture: ComponentFixture<EditBoxerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBoxerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
