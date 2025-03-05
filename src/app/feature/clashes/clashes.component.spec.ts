import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClashesComponent } from './clashes.component';

describe('ClashesComponent', () => {
  let component: ClashesComponent;
  let fixture: ComponentFixture<ClashesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(), ClashesComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ClashesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
