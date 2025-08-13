import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBoxerComponent } from './item-boxer.component';

describe('ItemBoxerComponent', () => {
  let component: ItemBoxerComponent;
  let fixture: ComponentFixture<ItemBoxerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemBoxerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemBoxerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
