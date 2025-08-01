import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomInputComponent } from '@shared/components/custom-input/custom-input.component';
import { CustomSelectComponent } from '@shared/components/custom-select/custom-select.component';

@Component({
  selector: 'app-create-clashes',
  imports: [CustomInputComponent, CustomSelectComponent],
  templateUrl: './create-clashes.component.html',
  styleUrl: './create-clashes.component.css'
})
export class CreateClashesComponent {

  form = new FormGroup({
    number: new FormControl(0, [Validators.required]),
    id_type_clashes: new FormControl(0, [Validators.required]),
    rounds: new FormControl(0, [Validators.required]),
    id_category: new FormControl(0, [Validators.required]),
    id_state: new FormControl('', [Validators.required])
  });




}
