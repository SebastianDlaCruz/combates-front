import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemsFightsComponent } from '../items-fights/items-fights.component';
import { TableFightsComponent } from './table-fights.component';

describe('TableFightsComponent', () => {
  let component: TableFightsComponent;
  let fixture: ComponentFixture<TableFightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), ItemsFightsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TableFightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
