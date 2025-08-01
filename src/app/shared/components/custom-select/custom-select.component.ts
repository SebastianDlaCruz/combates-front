import { Component, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgIcon, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { featherArrowDown } from '@ng-icons/feather-icons';
@Component({
  selector: 'app-custom-select',
  imports: [NgIcon],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true
    },
    provideIcons({ featherArrowDown }),
    provideNgIconsConfig({
      size: '17px',
      color: '#b5b5b5'
    })
  ]
})
export class CustomSelectComponent implements ControlValueAccessor {

  options = input.required<any[]>();
  label = input.required<string>();
  iconArrowDown = featherArrowDown;
  labelOption = input.required<string>();
  valueOption = input.required<string>();

  isOpen = false;
  select: any = null;
  nameOption: any = null;

  private onChange: (value: any) => void = () => { }
  private onTouched: () => void = () => { }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.onTouched();
  }

  selectOption(option: unknown, label: unknown) {
    this.select = option;
    this.nameOption = label;
    this.onChange(option);
    this.isOpen = false;
    console.log(this.nameOption)
  }

  writeValue(obj: any): void {
    this.select = this.options().find(option => option.value === obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }



}
