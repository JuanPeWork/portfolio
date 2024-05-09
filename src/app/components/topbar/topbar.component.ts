import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, WritableSignal, signal } from '@angular/core';
import { timer } from 'rxjs';
import { distinctUntilChanged, map, takeUntil } from 'rxjs/operators';
import { AutoDestroyService } from '../../services/utils/auto-destroy.service';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [DatePipe, AsyncPipe, NgClass],
  providers: [AutoDestroyService],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {

  items = [
    { id: 1, label: 'Sobre mí', icon: 'pi pi-home' },
    { id: 2, label: 'Proyectos', icon: 'pi pi-search' },
    { id: 3, label: 'Contactow', icon: 'pi pi-envelope' }
  ];
  
  $currentTime: WritableSignal<Date> = signal(new Date());


    constructor(private readonly destroy$: AutoDestroyService) {

    }


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

}
