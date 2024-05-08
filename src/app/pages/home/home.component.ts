import { Component, OnInit } from '@angular/core';
import { DockComponent } from "../../components/dock/dock.component";
import { WindowComponent } from "../../components/window/window.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [DockComponent, WindowComponent]
})
export class HomeComponent {
  
}
