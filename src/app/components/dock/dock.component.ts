import { Component } from '@angular/core';
import { WindowComponent } from "../window/window.component";

@Component({
    selector: 'app-dock',
    standalone: true,
    templateUrl: './dock.component.html',
    styleUrl: './dock.component.scss',
    imports: [WindowComponent, ]
})
export class DockComponent {

  apps = [
    { name: 'User', img: 'assets/apps/icon_user.png', url: 'https://twitter.com/JuanPedrovich' },
    { name: 'X', img: 'assets/apps/icon_x.png', url: 'https://twitter.com/JuanPedrovich' },
    { name: 'Linkedin', img: 'assets/apps/icon_linkedin.png', url: 'https://www.linkedin.com/in/jpadamuz/' },
    { name: 'Github', img: 'assets/apps/icon_github.png', url: 'https://github.com/JuanPeWork' },
    { name: 'Cv', img: 'assets/apps/icon_cv.png', url: 'assets/docs/curriculum_juanpedro_adamuz.pdf' },
    { name: 'Bulking App', img: 'assets/apps/icon_bulking.png', url: 'https://play.google.com/store/apps/details?id=com.jpadamuz.bulkingapp' },
  ];

  display: boolean = false;

  showDialog() {
      this.display = true;
  }

  onDisplayChange(event: any) {
    this.display = event;
  }
  


}
