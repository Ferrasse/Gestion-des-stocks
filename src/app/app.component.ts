import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PageLoginComponent} from "./ppage/page-login/page-login.component";
import {PageInscriptionComponent} from "./ppage/page-inscription/page-inscription.component";
import {PageMenuComponent} from "./composants/page-menu/page-menu.component";
import {PageDashboardComponent} from "./ppage/page-dashboard/page-dashboard.component";
import {PageArticleComponent} from "./ppage/articles/page-article/page-article.component";
//import { PageMenuComponent } from "./composants/page-menu/page-menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PageLoginComponent, PageInscriptionComponent, PageDashboardComponent, PageArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetLibre';
}
