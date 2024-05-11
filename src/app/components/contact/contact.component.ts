import { Component, EventEmitter, Input, Output } from '@angular/core';

import { DialogModule } from 'primeng/dialog'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  @Input() displayModal: boolean = false;
  @Output() displayChange = new EventEmitter();
  

  showModalDialog() {
    this.displayModal = true;
  }

  hideModalDialog() {
    this.displayChange.emit(false);

  }

  ngOnDestroy() {
    this.displayChange.unsubscribe();
  }
}
