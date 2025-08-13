import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSchoolComponent } from './item-school.component';

describe('ItemSchoolComponent', () => {
  let component: ItemSchoolComponent;
  let fixture: ComponentFixture<ItemSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSchoolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
