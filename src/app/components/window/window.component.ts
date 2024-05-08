import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog'

@Component({
  selector: 'app-window',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent {

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
