import { DatePipe, NgClass } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { timer } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { AutoDestroyService } from '../../services/utils/auto-destroy.service';
import { WindowComponent } from "../window/window.component";
import { MenuModule } from 'primeng/menu'
import { MenuItem, SharedModule } from 'primeng/api';
import { ContactComponent } from "../contact/contact.component";


@Component({
    selector: 'app-topbar',
    standalone: true,
    providers: [AutoDestroyService],
    templateUrl: './topbar.component.html',
    styleUrl: './topbar.component.scss',
    imports: [DatePipe, WindowComponent, NgClass, MenuModule, ContactComponent, SharedModule]
})
export class TopbarComponent {

  items: MenuItem[] = [
    { id: '1', label: 'Sobre mí', icon: 'pi pi-home' },
    // { id: '2', label: 'Proyectos', icon: 'pi pi-search' },
    { id: '3', label: 'Contacto', icon: 'pi pi-envelope' }
  ];
  displayWindow: boolean = false;
  displayContact: boolean = false;
  $currentTime: WritableSignal<Date> = signal(new Date());

  constructor(private readonly destroy$: AutoDestroyService) {}


  ngOnInit(): void {
    this.setClock().subscribe( this.$currentTime.set );
  }


  setClock()  {
    return timer(0, 1000)
      .pipe(
        map(() => new Date()),
        map(date => new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes())),
        distinctUntilChanged((prev, curr) => prev.getTime() === curr.getTime()),
        takeUntil(this.destroy$)
      )
  }

  showWindow() {
    this.displayWindow = true;
  }

  showContact() {
    this.displayContact = true;
  }

  onDisplayChangeContact(event: any) {
    this.displayContact = event;
  }

  onDisplayChange(event: any) {
    this.displayWindow = event;
  }

  handleModal(id: any) {
    if(id == '1') {
      this.displayWindow = true;
    } else {
      this.displayContact = true;
    }
  }

}
