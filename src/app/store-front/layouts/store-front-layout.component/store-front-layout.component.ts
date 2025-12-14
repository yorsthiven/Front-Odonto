import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar.component/front-navbar.component";
import { FrontFooterComponent } from '@store-front/components/front-footer.component/front-footer.component';

@Component({
  selector: 'app-store-front-layout.component',
  imports: [
    RouterOutlet,
    FrontNavbarComponent,
    FrontFooterComponent
],
  templateUrl: './store-front-layout.component.html',
  styleUrl: './store-front-layout.component.css',
})
export class StoreFrontLayoutComponent { }
