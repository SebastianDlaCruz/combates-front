import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
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
export class CustomSelectComponent implements ControlValueAccessor, OnChanges {


  options = input.required<any[]>();
  label = input.required<string>();
  iconArrowDown = featherArrowDown;
  labelOption = input.required<string>();
  valueOption = input.required<string>();
  controlForm = input.required<FormControl<any>>();

  isOpen = false;
  select: any = null;
  nameOption: any = null;
  value = null;

  private onChange: (value: any) => void = () => { }
  private onTouched: () => void = () => { };


  ngOnChanges(changes: SimpleChanges) {

    if (this.options().length > 0 && this.value) {
      this.select = this.options().find(option => option[this.valueOption()] === this.value);
      this.nameOption = this.select?.[this.labelOption()];

    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    this.onTouched();
  }

  selectOption(option: unknown, label: unknown) {
    this.select = option;
    this.nameOption = label;
    this.onChange(option);
    this.isOpen = false;
  }

  writeValue(obj: any): void {
    this.value = obj;
    this.select = this.options().find(option => option[this.valueOption()] === this.value);

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }



}
