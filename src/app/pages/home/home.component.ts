import { Component } from '@angular/core';
import { DockComponent } from "../../components/dock/dock.component";
import { WindowComponent } from "../../components/window/window.component";
import { TopbarComponent } from "../../components/topbar/topbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [DockComponent, WindowComponent, TopbarComponent]
})
export class HomeComponent {
  
}
