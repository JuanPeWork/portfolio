import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { WindowComponent } from "../window/window.component";

@Component({
    selector: 'app-dock',
    standalone: true,
    templateUrl: './dock.component.html',
    styleUrl: './dock.component.scss',
    imports: [WindowComponent, TooltipModule ]
})
export class DockComponent {


  
  apps = [
    { id: 1, name: 'Sobre mí', img: 'assets/apps/icon_user.png', url: 'https://twitter.com/JuanPedrovich' },
    { id: 2, name: 'X', img: 'assets/apps/icon_x.png', url: 'https://twitter.com/JuanPedrovich' },
    { id: 3, name: 'LinkedIn', img: 'assets/apps/icon_linkedin.png', url: 'https://www.linkedin.com/in/jpadamuz/' },
    { id: 4, name: 'Github', img: 'assets/apps/icon_github.png', url: 'https://github.com/JuanPeWork' },
    { id: 5, name: 'Cv', img: 'assets/apps/icon_cv.png', url: 'assets/docs/curriculum_juanpedro.pdf' },
    { id: 6, name: 'Bulking App', img: 'assets/apps/icon_bulking.png', url: 'https://play.google.com/store/apps/details?id=com.jpadamuz.bulkingapp' },
  ];

  displayWindow: boolean = false;

  showDialog() {
      this.displayWindow = true;
  }

  onDisplayChange(event: any) {
    this.displayWindow = event;
  }

}
