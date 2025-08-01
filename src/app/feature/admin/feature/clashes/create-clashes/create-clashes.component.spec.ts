import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClashesComponent } from './create-clashes.component';

describe('CreateClashesComponent', () => {
  let component: CreateClashesComponent;
  let fixture: ComponentFixture<CreateClashesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClashesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
