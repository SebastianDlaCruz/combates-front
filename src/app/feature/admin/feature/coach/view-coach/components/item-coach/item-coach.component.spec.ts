import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCoachComponent } from './item-coach.component';

describe('ItemCoachComponent', () => {
  let component: ItemCoachComponent;
  let fixture: ComponentFixture<ItemCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemCoachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
