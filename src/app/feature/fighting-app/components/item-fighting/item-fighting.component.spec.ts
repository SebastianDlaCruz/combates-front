import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFightingComponent } from './item-fighting.component';

describe('ItemFightingComponent', () => {
  let component: ItemFightingComponent;
  let fixture: ComponentFixture<ItemFightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemFightingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
