import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import {
  IonImg,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/angular/standalone';
import { TabMenuComponent } from './tab-menu.component';

describe('TabMenuComponent', () => {
  let component: TabMenuComponent;
  let fixture: ComponentFixture<TabMenuComponent>;

  const mockActivatedRoute = {
    snapshot: {
      paramMap: new Map(),
      queryParamMap: new Map(),
      data: {},
      fragment: null,
    },
  }
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [IonicModule.forRoot(),
        IonTabBar,
        IonTabButton,
        IonTabs,
        IonLabel,
        IonImg, TabMenuComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }, // Proporciona el mock
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
