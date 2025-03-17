import { AsyncPipe } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { Boxer } from '@core/models/boxer.model';
import { CategoryService } from '@core/services/category/category.service';
import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-selected-boxer',
  templateUrl: './selected-boxer.component.html',
  styleUrls: ['./selected-boxer.component.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, AsyncPipe],
})
export class SelectedBoxerComponent implements OnChanges, OnDestroy {

  @Input() selectBoxer: Boxer | null = null;
  @Output() onDelete = new EventEmitter<void>();

  nameCategory$?: Observable<string | undefined>;
  name: string | undefined = ""
  private categoryServices = inject(CategoryService);

  constructor() {

    addIcons({ closeOutline });
  }

  ngOnChanges() {

    if (this.selectBoxer) {
      this.categoryServices.getName(this.selectBoxer?.id_category)
        .subscribe(name => this.name = name);
    }

  }



  delete() {
    this.onDelete.emit();
  }

  ngOnDestroy(): void {
    this.categoryServices.destroy();
  }

}
