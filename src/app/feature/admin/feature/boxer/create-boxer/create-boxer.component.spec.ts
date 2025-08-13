import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBoxerComponent } from './create-boxer.component';

describe('CreateBoxerComponent', () => {
  let component: CreateBoxerComponent;
  let fixture: ComponentFixture<CreateBoxerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateBoxerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
