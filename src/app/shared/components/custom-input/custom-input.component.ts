
import { Component, input, signal } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherEye, featherEyeOff } from '@ng-icons/feather-icons';
import { CustomInputValidators } from './model/custom-input.model';

/**
 * componente input personalizado
 * input recibe un objeto de configuración para establecer las propiedades del input
 * config : CustomInputConfig
 * @example {
 * label: 'Nombre',
 *   placeholder: 'Ingrese su nombre',
 *   type: CustomInputType.Text,
 *   validators: [Validators.required]
 * }
 *
 */


@Component({
  selector: 'app-custom-input',
  imports: [NgIcon, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    },
    provideIcons({ featherEye, featherEyeOff })
  ]
})
export class CustomInputComponent implements ControlValueAccessor {


  type = input.required<string>();
  label = input.required<string>();
  ref = input.required<string>();
  placeholder = input<string>();
  disabled = false;
  controlForm = input.required<FormControl<any>>()
  validators = input<CustomInputValidators[]>();

  value: any;

  iconEyed = featherEye;
  iconEyeOff = featherEyeOff;

  visiblePassword = signal(false);

  onChange: (value: any) => void = () => { };
  onTouched: () => void = () => { };


  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }


  onVisibilityToggle(): void {
    this.visiblePassword.set(!this.visiblePassword());
  }

}
