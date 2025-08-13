import { Component, ElementRef, input, output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {


  title = input.required<string>();
  paragraph = input.required<string>();

  confirm = output<void>();


  @ViewChild('dialog', { static: true }) dialog!: ElementRef<HTMLDialogElement>;

  open(): void {
    this.dialog.nativeElement.showModal();
  }

  close(): void {
    this.dialog.nativeElement.close();
  }
}
