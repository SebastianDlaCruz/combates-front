import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Boxer } from '@core/models/boxer.model';
import { SearchBoxerService } from '@core/services/search-boxer/search-boxer.service';
import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListOfBoxersComponent } from './components/list-of-boxers/list-of-boxers.component';
import { SelectedBoxerComponent } from './components/selected-boxer/selected-boxer.component';
import { AdapterSubmitService } from './services/adapter-submit/adapter-submit.service';
import { ValidateIdService } from './services/validate-id/validate-id.service';
import { validatorCorner } from './utils/validator-corner/validator-corner.util';

@Component({
  selector: 'app-clashes',
  templateUrl: './clashes.component.html',
  styleUrls: ['./clashes.component.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle, IonToolbar, IonInput, IonItem,
    IonContent, IonSelect, IonLabel, SelectedBoxerComponent, ListOfBoxersComponent,
    IonSelectOption, IonSearchbar, IonList, IonButton, ReactiveFormsModule]
})
export class ClashesComponent implements OnInit, OnDestroy {

  boxersOne: Boxer[] = [];
  boxersTwo: Boxer[] = [];

  selectBoxerOne: Boxer | null = null;
  selectBoxerTwo: Boxer | null = null;

  private search$ = inject(SearchBoxerService);
  private validate_id = inject(ValidateIdService);
  private adapterSubmit = inject(AdapterSubmitService);

  form = new FormGroup({
    number_clashes: new FormControl(1, Validators.required),
    id_type_clashes: new FormControl(1, Validators.required),
    rounds: new FormControl(2, Validators.required),
    id_category: new FormControl(1, Validators.required),
    id_boxer_one: new FormControl('', Validators.required),
    id_boxer_two: new FormControl('', Validators.required),
    id_boxer_three: new FormControl(''),
    id_state: new FormControl(1, Validators.required),

    cornerBoxerOne: new FormControl('', Validators.required),

    cornerBoxerTwo: new FormControl('', Validators.required)

  }, {
    validators: [validatorCorner('cornerBoxerOne', 'cornerBoxerTwo')]
  });


  ngOnInit() {
  }


  searchInputBoxerOne(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.search$.byName(query).subscribe({
      next: (boxers) => {
        this.boxersOne = boxers ?? [];
      }
    })

  }


  searchInputBoxerTwo(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    this.search$.byName(query).subscribe({
      next: (boxers) => {
        this.boxersTwo = boxers ?? [];
      }
    })

  }


  onClickBoxerOne(boxer: Boxer) {

    if (boxer && boxer.id) {

      const idTwo = this.form.get('id_boxer_two')?.value ?? '';

      if (!this.validate_id.isEqual(boxer.id, idTwo)) {

        this.form.get('id_boxer_one')?.setValue(boxer.id);
        this.boxersOne = [];
        this.selectBoxerOne = boxer;

      }
    }
  }

  onDeleteBoxerOne() {
    this.selectBoxerOne = null;
    this.form.get('id_boxer_one')?.setValue('');
  }

  onDeleteBoxerTwo() {
    this.selectBoxerTwo = null;
    this.form.get('id_boxer_two')?.setValue('');
  }

  onClickBoxerTwo(boxer: Boxer) {

    if (boxer && boxer.id) {

      const idOne = this.form.get('id_boxer_one')?.value ?? '';

      if (!this.validate_id.isEqual(boxer.id, idOne)) {

        this.form.get('id_boxer_two')?.setValue(boxer.id);
        this.boxersTwo = [];
        this.selectBoxerTwo = boxer;
      }
    }
  }

  onSubmit() {

    if (this.form.valid) {
      this.adapterSubmit.create(this.form).subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

  }

  ngOnDestroy(): void {
    this.search$.destroySearchBoxer();

  }


}
